import React from 'react';

function NavLink({ href, active, children }) {
  return (
    <li>
      <a href={href} className={active ? 'active' : ''}>{children}</a>
    </li>
  );
}

export default NavLink;