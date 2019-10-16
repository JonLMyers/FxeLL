import React from 'react';
import {Link} from 'react-router-dom';

function TargetBar() {
  return (
    <nav>
        <ul class="right hide-on-med-and-down">
            <li><Link to="/">*Nix Targets</Link></li>
            <li><Link to="/">Windows Targets</Link></li>
        </ul>
        <ul id="slide-out" class="side-nav fixed">
            <li><Link to="/">*Nix Target</Link></li>
            <li><Link to="/">Windows Targets</Link></li>
        </ul>
        <ul id="Teams" class="dropdown-content">
            <li><a href="/">Team 1</a></li>
            <li><a href="/">Team 2</a></li>
            <li class="divider"></li>
            <li><a href="/">CustomName</a></li>
        </ul>
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
    </nav>
  );
}

export default TargetBar;