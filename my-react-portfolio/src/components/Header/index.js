import React from 'react'

const styles = {
  jumbotron: {
      backgroundColor: '#2089f0ff',
      color: '#ffffff',
      padding: '100px 25px',
      fontFamily: '"Arial", sans-serif',
  },
  h1: {
      fontSize: '70px',
  },
  p: {
      fontSize: '25px',
      fontFamily: '"Arial", sans-serif',
  }
}

function Header() {
  return (
  <div className="jumbotron text-center">
      <h1 style={styles.h1}>Heather Cooper</h1>
      <p style={styles.p}>MERN Full-Stack Web Developer</p>
  </div>
  )
}






export default Header;