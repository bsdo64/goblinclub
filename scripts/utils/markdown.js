/**
 * Created by dobyeongsu on 2015. 11. 11..
 */
import Remarkable from 'markdown-it';
import hljs from 'highlight.js'
import videoParser from './markdown-video-parser';

var md = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    },
    html: false,
    breaks: true,
    linkify: true
}).use(video_plugin);

function video_embed(md) {
    function video_return(state, silent) {
        var code,
            serviceEnd,
            serviceStart,
            pos,
            res,
            videoID = '',
            tokens,
            token,
            start,
            oldPos = state.pos,
            max = state.posMax;

        // When we add more services, (youtube) might be (youtube|vimeo|vine), for example
        var EMBED_REGEX = /@\[(youtube|vimeo|twitch)\]\([\s]*(.*?)[\s]*[\)]/im;


        if (state.src.charCodeAt(state.pos) !== 0x40/* @ */) {
            return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) {
            return false;
        }

        var match = EMBED_REGEX.exec(state.src);

        if(!match){
            return false;
        }

        if (match.length < 3){
            return false;
        }

        var service = match[1];
        var videoID = match[2];
        var parsed = videoParser.parse(videoID);
        if (!parsed) {
            return false;
        }
        var mediaType = parsed.mediaType;
        service = parsed.provider;

        if(mediaType === 'stream' && service === 'twitch') {
            videoID = parsed.channel;
        } else {
            videoID = parsed.id;
        }

        // If the videoID field is empty, regex currently make it the close parenthesis.
        if (videoID === ')') {
            videoID = '';
        }

        serviceStart = state.pos + 2;
        serviceEnd = md.helpers.parseLinkLabel(state, state.pos + 1, false);

        //
        // We found the end of the link, and know for a fact it's a valid link;
        // so all that's left to do is to call tokenizer.
        //
        if (!silent) {
            state.pos = serviceStart;
            state.posMax = serviceEnd;
            state.service = state.src.slice(serviceStart, serviceEnd);
            var newState = new state.md.inline.State(
                service,
                state.md,
                state.env,
                tokens = []
            );
            newState.md.inline.tokenize(newState);

            token = state.push('video', '');
            token.videoID = videoID;
            token.service = service;
            token.mediaType = mediaType;
            token.level = state.level;
        }

        state.pos = state.pos + state.src.indexOf(')');
        state.posMax = state.tokens.length;
        return true;
    }

    return video_return;
}

function tokenize_youtube(videoID) {
    var embedStart = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="ytplayer" type="text/html" src="//www.youtube.com/embed/';
    var embedEnd = '?vq=hd1080&fs=1&rel=0" frameborder="0" allowfullscreen></iframe></div>';
    return embedStart + videoID + embedEnd;
}

function tokenize_vimeo(videoID) {
    var embedStart = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="vimeoplayer" src="//player.vimeo.com/video/';
    var embedEnd = '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
    return embedStart + videoID + embedEnd;
}
function tokenize_twitchStream(videoID) {
    var embedStart = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="twitchplayer" src="//player.twitch.tv/?channel=';
    var embedEnd = '&muted=true" frameborder="0" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
    return embedStart + videoID + embedEnd;
}
function tokenize_twitchVideo(videoID) {
    var embedStart = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="twitchplayer" src="//player.twitch.tv/?video=v';
    var embedEnd = '&muted=true" frameborder="0" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
    return embedStart + videoID + embedEnd;
}
function tokenize_video(md) {
    function tokenize_return(tokens, idx, options, env, self) {
        var videoID = md.utils.escapeHtml(tokens[idx].videoID);
        var service = md.utils.escapeHtml(tokens[idx].service);
        var mediaType = md.utils.escapeHtml(tokens[idx].mediaType);
        if (videoID === '') {
            return '';
        }

        if (service.toLowerCase() === 'youtube') {
            return tokenize_youtube(videoID);
        } else if (service.toLowerCase() === 'vimeo') {
            return tokenize_vimeo(videoID);
        } else if (service.toLowerCase() === 'twitch' && mediaType === 'stream') {
            return tokenize_twitchStream(videoID);
        } else if (service.toLowerCase() === 'twitch' && mediaType === 'video') {
            return tokenize_twitchVideo(videoID);
        } else {
            return('');
        }
    }

    return tokenize_return;
}

function video_plugin(md) {
    md.renderer.rules.video = tokenize_video(md);
    md.inline.ruler.before('emphasis', 'video', video_embed(md));
}

export default md;