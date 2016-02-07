/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from '../../Lib/Style/common';

function PostPage() {}
PostPage.prototype = {
  container: common.CONTAINER.UL_CONTAINER,
  post: {
    listStyle: 'none',
    marginBottom: 10
  }
};

export default new PostPage();
