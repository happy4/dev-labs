import React from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.module.css';

export class Layout extends React.Component {
  render () {
    const { children } = this.props;

    return (
      <>
        <Header />
        <Menu />
        { children }
        <Footer />
      </>
    );
  }
}
