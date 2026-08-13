import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div style={styles.brandCol}>
          <h2 style={styles.logo}>WECOVE</h2>
          <p style={styles.tagline}>Defy the standard. Build the impossible.</p>
        </div>
        
        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Ecosystem</h4>
          <Link to="/" style={styles.link}>Platform</Link>
          <Link to="/about" style={styles.link}>Our Origin</Link>
          <Link to="/team" style={styles.link}>The Mind Trust</Link>
        </div>

        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Connect</h4>
          <Link to="/contact" style={styles.link}>Inquiries</Link>
          <Link to="/interns" style={styles.link}>Incubator</Link>
          <a href="#" style={styles.link}>LinkedIn</a>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Wecove Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#050505',
    color: '#fcfcfc',
    padding: '6rem 2rem 2rem 2rem',
    borderTopLeftRadius: '48px',
    borderTopRightRadius: '48px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '4rem',
    borderBottom: '1px solid #222',
  },
  brandCol: {
    flex: '2 1 300px',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '2px',
    marginBottom: '1rem',
  },
  tagline: {
    color: '#888',
    fontSize: '1.1rem',
    maxWidth: '300px',
  },
  linkCol: {
    flex: '1 1 150px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  colTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontSize: '0.95rem',
  },
  bottomBar: {
    textAlign: 'center',
    paddingTop: '2rem',
    color: '#555',
    fontSize: '0.9rem',
  }
};

export default Footer;