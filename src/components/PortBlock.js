import React from "react";

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
          <div className='portfolio__block'>
              {this.props.textOnLeft ? this.renderTextLeft():this.renderTextRight()}
              
          </div>
      );
    }
}
