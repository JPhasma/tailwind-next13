import React from 'react';

import Link from 'next/link';

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link href='/'>Home</Link>
      <Link href='/todos'>Todos</Link>
      <hr />
    </header>
  );
}

export default Header;
