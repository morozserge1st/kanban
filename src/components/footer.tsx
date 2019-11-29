import * as React from 'react';

const Footer = () => (
  <footer className="footer">
    <ul className="state">
      <li className="state__item">
        Active tasks: &lt;N&gt;
      </li>
      <li className="state__item">
        Finished tasks: &lt;M&gt;
      </li>
    </ul>
    <p className="about">Kanban board by Sergei Morozov, 2019</p>
  </footer>
);

export default Footer;
