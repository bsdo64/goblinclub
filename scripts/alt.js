import Alt from 'alt';
import chromeDebug from 'alt/utils/chromeDebug';

var alt = new Alt({
});

// Debug
chromeDebug(alt);

alt.dispatcher.register((state) => {
    var snapshot = alt.takeSnapshot();

    /* Debug - All Current Stores */
    console.group('action');
    console.log('All Current Stores\t', JSON.parse(snapshot));

    /* Debug - Current Dispatch Payload */
    console.log('Dispatched\t\t', state);
});

export default alt;