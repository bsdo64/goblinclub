import Alt from 'alt';
import chromeDebug from '../../node_modules/alt-utils/lib/chromeDebug';

const alt = new Alt({});

// Debug
chromeDebug(alt);

alt.dispatcher.register((state) => {
  if (!process.env.NODE) {
    let snapshot = alt.takeSnapshot();

    /* Debug - All Current Stores */
    console.group('Action : ' + state.action);
    console.log('All Current Stores\t', JSON.parse(snapshot));
    /* Debug - Current Dispatch Payload */
    console.log('Dispatched\t\t', state.payload);
  }
});

export default alt;
