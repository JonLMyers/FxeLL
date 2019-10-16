import React from 'react';
import {Link} from 'react-router-dom';

function ToolBar() {
  return (
    <nav>
     <div class="nav-wrapper">
       <a href="/" class="brand-logo right">FxeLL</a>
       <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to="/">Shell</Link></li>
        <li><Link to="/">Command History</Link></li>
        <li><Link to="/">Statistics</Link></li>
       </ul>
     </div>
   </nav>
  );
}

export default ToolBar;