/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from '../../Lib/Style/common';

function NotFoundStyle() {}
NotFoundStyle.prototype = {
  container: common.CONTAINER.UL_CONTAINER,
  listObj: {
    backgroundColor: '#fff',
    borderRadius: 1,
    boxShadow: '1px 1px #b0c2c0',
    padding: 15
  },
  textCenter: {
    textAlign: 'center'
  }
};
export default new NotFoundStyle();
