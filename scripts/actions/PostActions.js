/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';

class PostActions {
    submitPost(post) {
        console.log('action1');
        this.dispatch(post);
        console.log('action2');
    }
}
var a = alt.createActions(PostActions);

console.log(1);
console.log(a);
console.log(2);

export default a