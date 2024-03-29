
import React from 'react';
import Link from 'next/Link';

export class Menu extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/speakers">
                  <a className="nav-link">Speakers</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sessions">
                  <a className="nav-link">Sessions</a>
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

