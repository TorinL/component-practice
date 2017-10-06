import React from 'react';

import  styles  from "./home.css"

export class Home extends React.Component {
  render(){
    const { logo } = styles
    return (
      <div className="pure-g main-div">
        <div className="pure-u-1-3">
          <h2>A Gym For {this.props.firstName}</h2>
          <p>Located in Casco Viejo, Panama City, ALLEY CAT FITNESS FOUNDATION is a donation-only open community gym. We train local kids from the barrio for free; we cultivate at risk youth to be martial artists. Open for everyone, because health should be free.</p>
        </div>
        <div className="pure-u-1-3">
          <h2>Fighting For {this.props.sport}</h2>
          <p>Young men in Casco dream of being professional fighters, using their natural abilities to bring honor to their community. We cultivate mixed martial artists (body and mind) with the hope that they live their dream.</p>
        </div>
        <div className="pure-u-1-3">
          <h2>Keeping space</h2>
          <p>Young men in Casco dream of being professional fighters, using their natural abilities to bring honor to their community. We cultivate mixed martial artists (body and mind) with the hope that they live their dream.  </p>
        </div>
      </div>
    )
  }
}
