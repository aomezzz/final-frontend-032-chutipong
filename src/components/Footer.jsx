import React from 'react';

const Footer = () => {
  // Inline styles
  const styles = {
    footer: {
      padding: '20px 0',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #ccc',
    },
    topFooter: {
      marginBottom: '10px',
    },
    middleFooter: {
      marginBottom: '20px',
    },
    footerMenu: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
    },
    footerMenuItem: {
      margin: '0 15px',
    },
    socialIcons: {
      margin: '10px 0',
    },
    icon: {
      fontSize: '24px',
      margin: '0 10px',
      color: '#000', // Change to desired color
    },
    bottomFooter: {
      marginTop: '20px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.topFooter}>
    
      </div>

      <div style={styles.middleFooter}>
        <ul style={styles.footerMenu}>
          <li style={styles.footerMenuItem}>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li style={styles.footerMenuItem}>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li style={styles.footerMenuItem}>
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li style={styles.footerMenuItem}>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>


      <div style={styles.bottomFooter}>
        <p>
          Copyright © <a href="https://www.yoursite.com">Chutipong</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
