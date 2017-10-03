import React from 'react';

export class Header extends React.Component {
  render (){
    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">About</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Pro Fighters</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Testimonials</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Goals and Outreach</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">ACFF Blog</a></li>
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Donate</a></li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" id="menuLink1" className="pure-menu-link">Contact</a>
            <ul className="pure-menu-children">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Email</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Twitter</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Facebook</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
