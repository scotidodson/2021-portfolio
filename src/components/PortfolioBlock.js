import React from "react";

export default class PortfolioBlock extends React.Component {

    render() {
      return(
          <div className={this.props.index % 2 === 0 ? 'portfolio__block portfolio__block--textRight':'portfolio__block portfolio__block--textLeft'}>
              <div className='portfolio__block__text'>
                  <div className='portfolio__block__textContainer'>
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.tech}</h4>
                    <p>{this.props.blurb}</p>
                    <a href={'/'+this.props.title.toLowerCase().replaceAll(' ','-')}>See More</a>
                  </div>
              </div>
              <div className='portfolio__block__image'>

              </div>
              
          </div>
      );
    }
}