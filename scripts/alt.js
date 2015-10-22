/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import Alt from 'alt';
import chromeDebug from 'alt/utils/chromeDebug';
import Immutable from 'immutable';

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
    var stateCopy
    if( typeof state.data !== 'undefined') {
        stateCopy = state;
        stateCopy.data = stateCopy.data.toJS();
    } else {
        stateCopy = state;
    }
    console.log('Dispatched\t\t', stateCopy);
});

export default alt;