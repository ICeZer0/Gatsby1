import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
  <div className="text-center">
    <IndexLink to="/">Home</IndexLink>
    {' | '}
    <Link to="intro">Intro</Link>
    {' | '}
    <Link to="signup">Signup</Link>
    {' | '}
    <Link to="*">404</Link>
  </div>
)

export default Header