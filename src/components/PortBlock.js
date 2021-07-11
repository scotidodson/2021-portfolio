import React from "react";
import './PortBlock.css';

export default class PortBlock extends React.Component {
    // check orientation
    renderTextLeft = () => {
        return (<><div className="text">text here</div><div className="image">image here</div></>);
    }
    
    renderTextRight = () => {
        return (<><div className="image">image here</div><div className="text">text here</div></>);
    }
    

    render() {
      return(
          <div className='portBlock'>
              {this.props.orientation === 'left' ? this.renderTextLeft():this.renderTextRight()}
              
          </div>
      );
    }
}
