import React, {Component} from 'react';

class MobileHeader extends Component {
  showSidebar(){
    //@Todo: Mobile header to be implemented
  }
  render() {
    return (
      <div className="title-bar hide-for-large">
      <div className="title-bar-left">
        <button className="menu-icon" type="button" data-open="my-info" onClick={this.showSidebar}></button>
        <span className="title-bar-title">{this.props.name} </span>
      </div>
    </div>
    );
  }
}
export default MobileHeader;
