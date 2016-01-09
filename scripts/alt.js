import Alt from 'alt';
import chromeDebug from 'alt-utils/lib/chromeDebug';

const alt = new Alt({});

// Debug
chromeDebug(alt);

alt.dispatcher.register((state) => {
  let snapshot = alt.takeSnapshot();

  /* Debug - All Current Stores */
  if (!process.env.NODE) {
    console.group('Action : ' + state.action);
  }
  console.log('All Current Stores\t', JSON.parse(snapshot));

  /* Debug - Current Dispatch Payload */
  console.log('Dispatched\t\t', state);
});

export default alt;
