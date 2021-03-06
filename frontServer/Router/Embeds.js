import express from 'express';
import Api from '../lib/Api';
import request from 'superagent';
import videoParser from 'js-video-url-parser';

const Embeds = express.Router();

Embeds.get('/oembed', (req, res, next) => {
  let url = req.query.url;
  let data = videoParser.parse(url);
  let html;
  //req.query.api_key = 'e47ae848e376ee18ede943';

  switch (data.provider) {
    case 'youtube':
      html = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.2493%;">' +
               '<div id="' + data.id + '" class="youtube-embed" ' +
                    'style="-webkit-background-size: 100% 100%; -moz-background-size: 100% 100%; -o-background-size: 100% 100%; background-size: 100% 100%; ' +
                           'background-image:url(http://i.ytimg.com/vi/' + data.id + '/sddefault.jpg); top: 0; left: 0; width: 100%; height: 100%; position: absolute;" ' +
               '/>' +
             '</div>';
      break;

    case 'twitch':
      if (data.mediaType === 'stream') {
        html = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 60.9682%;">' +
                 '<iframe src="http://player.twitch.tv/?channel=' + data.channel + '" frameborder="0" allowfullscreen style="top: 0; left: 0; width: 100%; height: 100%; position: absolute;"></iframe>' +
               '</div>';
      }

      if (data.mediaType === 'video') {
        html = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 60.9682%;">' +
                 '<iframe src="http://player.twitch.tv/?video=' + data.id + '" frameborder="0" allowfullscreen style="top: 0; left: 0; width: 100%; height: 100%; position: absolute;"></iframe>' +
               '</div>';
      }
      break;

    case 'vimeo':
      html = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 80%;">' +
               '<iframe src="//player.vimeo.com/video/' + data.id + '?byline=0&badge=0&portrait=0&title=0" frameborder="0" allowfullscreen style="top: 0; left: 0; width: 100%; height: 100%; position: absolute;"></iframe>' +
             '</div>';
      break;

    default:
      break;
  }

  if (html) {
    res.json({html: html});
  } else {
    res.json({});
  }

  /*request
    .get('http://iframe.ly/api/oembed')
    .set('Accept', 'application/json')
    .query(req.query)
    .end((err, iframeResult) => {
      //res.json(iframeResult.body);
      res.json({html: '<div>haha</div>'})
    })*/
});

export default Embeds;
