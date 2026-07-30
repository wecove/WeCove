import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  // Pre-populated with your actual collaborators
  const coreTeam = [
    { name: 'Chetan Sharma P', role: 'Founder & Lead Architect' },
    { name: '', role: 'Product Design Lead' },
    { name: '', role: 'Backend Infrastructure' },
    { name: '', role: 'Systems Engineer' },
    { name: '', role: 'Data Integration' },
    { name: '', role: 'Frontend Engineer' },
    { name: '', role: 'Operations & QA' },
  ];

  const advisors = [
    { name: '', role: 'Strategic Advisor' }
  ];

  // Animation variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={styles.container}>
      
      {/* 1. KINETIC HERO */}
      <section style={styles.heroSection}>
        <motion.div 
          style={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={styles.microTag}>THE MIND TRUST</span>
          <h1 style={styles.massiveHeading}>
            Engineered by <br/> <span style={styles.italicAccent}>Experts.</span>
          </h1>
          <p style={styles.heroSubtext}>
            Wecove is operated by a concentrated unit of full-stack developers, UI/UX perfectionists, and automation architects. No bloat, just pure execution.
          </p>
        </motion.div>
      </section>

      {/* 2. THE CORE TEAM ROSTER */}
      <section style={styles.rosterSection}>
        <div style={styles.rosterHeader}>
          <h2 style={styles.sectionTitle}>The Core Unit</h2>
        </div>

        <motion.div 
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreTeam.map((member, index) => (
            <motion.div key={index} variants={itemVariants} style={styles.card}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.initialText}>{member.name.charAt(0)}</span>
              </div>
              <div style={styles.cardInfo}>
                <h3 style={styles.name}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. ADVISORY BOARD */}
      <section style={styles.advisorySection}>
        <div style={styles.rosterHeader}>
          <h2 style={styles.sectionTitle}>Advisory</h2>
        </div>
        
        <motion.div 
          style={styles.advisorGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {advisors.map((advisor, index) => (
            <motion.div key={index} variants={itemVariants} style={styles.advisorCard}>
              <div style={styles.advisorInfo}>
                <h3 style={styles.name}>{advisor.name}</h3>
                <p style={styles.advisorRole}>{advisor.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#fcfcfc', // Changed to light theme background
    color: '#050505', // Changed to dark text
    width: '100%',
    overflowX: 'clip',
    WebkitFontSmoothing: 'antialiased',
    minHeight: '100vh',
  },
  
  /* 1. HERO SECTION */
  heroSection: {
    padding: '12rem 2rem 6rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
  },
  microTag: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.2em',
    color: '#888',
    textTransform: 'uppercase',
  },
  massiveHeading: {
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    fontWeight: '800',
    lineHeight: '0.9',
    letterSpacing: '-0.04em',
    margin: '2rem 0',
    color: '#050505', // Dark text for headings
  },
  italicAccent: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#666',
  },
  heroSubtext: {
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    color: '#555', // Softer dark gray
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '400',
  },

  /* 2. ROSTER SECTION */
  rosterSection: {
    padding: '6rem 2rem 10rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  rosterHeader: {
    borderBottom: '1px solid #eaeaea', // Light border
    paddingBottom: '2rem',
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    color: '#050505',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '3rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '1 / 1.2', 
    backgroundColor: '#f5f5f5', // Light gray box
    borderRadius: '16px',
    marginBottom: '1.5rem',
    border: '1px solid #eaeaea', // Subtle border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  },
  initialText: {
    fontSize: '4rem',
    fontWeight: '800',
    color: '#ccc', // Subtle gray initial
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.01em',
    color: '#050505',
  },
  role: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '500',
  },

  /* 3. ADVISORY SECTION */
  advisorySection: {
    padding: '0 2rem 12rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  advisorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '2rem',
  },
  advisorCard: {
    backgroundColor: '#f5f5f5', // Light gray background
    border: '1px solid #eaeaea',
    borderRadius: '16px',
    padding: '3rem 2rem',
    display: 'flex',
    alignItems: 'center',
  },
  advisorInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  advisorRole: {
    fontSize: '1rem',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '600',
    marginTop: '0.5rem',
  }
};

export default Team;