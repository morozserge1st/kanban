import * as React from 'react';
import Header from './header/header';
import { MainContainer } from './main/main-container';
import Footer from './footer/footer';
import '../styles/app.scss';
import { DialogContainer } from './dialog/dialog-container';

const App = () => (
  <div className="wrapper">
    <Header />
    <MainContainer />
    <Footer />
    <DialogContainer />
  </div>
);

export default App;
