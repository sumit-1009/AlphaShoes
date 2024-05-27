import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
          <div className="logo">
            <img src="/images/nike.png" alt="logo" srcset="" />
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">About</li>
            <li href="#">Location</li>
            <li href="#">Contact</li>
          </ul>
          <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar