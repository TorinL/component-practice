import React from 'react';
import styles from './footer.css';

export default class Footer extends React.Component {
  render (){
    const {thing, background, text} = styles
    return (
      <div className={thing}>
        <div className={background}>
          <h1 className={text}>sup homies</h1>
        </div>
      </div>
    )
  }
}
