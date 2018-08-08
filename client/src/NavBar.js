import React, { Component } from 'react';
import Logo from './Logo';
import Skyline from './Skyline';
import Links from './Links';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='NavBar'>
        <table>
          <tbody>
            <tr>
              <td>
                <Logo />
              </td>
              <td id='NavBorder'>
                <Skyline />
              </td>
              <td>
                  <iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/300536103&color=%23421928&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                <Links />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NavBar;
