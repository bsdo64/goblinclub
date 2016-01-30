/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
function Modal() {}

Modal.prototype = {
  header: {
    borderBottom: 'none'
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#176963',
    textShadow: '1px 1px 1px #ccc',
    textAlign: 'center',
    marginBottom: 30
  }
};
export default new Modal();
