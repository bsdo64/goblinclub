import Alt from 'alt';

const alt = new Alt({});

// Debug
Alt.debug('alt', alt);

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
