import * as React from 'react';
import Header from './header/header';
import { MainContainer } from './main/main-container';
import Footer from './footer/footer';
import '../styles/app.scss';

const App = () => (
  <div className="wrapper">
    <Header />
    <MainContainer />
    <Footer />
  </div>
);

export default App;
