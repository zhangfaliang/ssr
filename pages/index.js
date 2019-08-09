import React from 'react'

import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href='/b' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href='/about' as='/about'>
        <a>about</a>
      </Link>
    </li>
    <li>
      <Link href='/helloUA' as='/helloUA'>
        <a>helloUA</a>
      </Link>
    </li>
    <li>
      <Link href='/dynamic' as='/dynamic'>
        <a>dynamic</a>
      </Link>
    </li>
  </ul>
)