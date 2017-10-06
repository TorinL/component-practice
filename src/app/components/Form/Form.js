import React from "react";
import styles from "./form";

export default class Form extends React.Component {
  render(){
    const {buttoncolor, sizing } = styles
    return(
      <div className={sizing}>
        <form>
         <label className={buttoncolor}>
          Name:
          <input type="text" name="name" />
         </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
    )
  }
}
