/**
 * Created by dobyeongsu on 2016. 4. 18..
 */
import React, {Component} from 'react';

import RightMenuLayout from './RightMenuLayout';

export default class SectionLayout extends Component {
  displayName() {
    return 'SectionLayout';
  }
  render() {
    return (
      <div className="section">
        <div className="contents">

        </div>
        
        <RightMenuLayout />
        
      </div>
    );
  }
}