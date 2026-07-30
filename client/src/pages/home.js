import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  // Hero Parallax
  const { scrollYProgress: heroProgress } = useScroll();
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);

  // Sticky Manifesto
  const manifestoRef = useRef(null);
  const { scrollYProgress: stickyScroll } = useScroll({
    target: manifestoRef,
    offset: ["start start", "end end"]
  });
  const textScale = useTransform(stickyScroll, [0, 0.5], [1, 1.2]);
  const textBlur = useTransform(stickyScroll, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  // Horizontal Scroll for Products
  const targetRef = useRef(null);
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: targetRef,
  });
  const x = useTransform(horizontalScroll, [0, 1], ["1%", "-65%"]);

  return (
    <div style={styles.container}>
      
      {/* 1. KINETIC HERO SECTION */}
      <section style={styles.heroSection}>
        <motion.div style={{ ...styles.heroContent, y: heroY, opacity: heroOpacity }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={styles.microTag}>WECOVE ENGINEERING</span>
          </motion.div>
          
          <motion.h1 
            style={styles.massiveHeading}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Defy the <br/> <span style={styles.italicAccent}>Standard.</span>
          </motion.h1>
          
          <motion.p 
            style={styles.heroSubtext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We architect responsive marketplace architectures and high-performance digital ecosystems. Precision-crafted for the open market.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. TECH STACK MARQUEE */}
      <div style={styles.marqueeContainer}>
        <motion.div 
          style={styles.marqueeTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <h3 style={styles.marqueeText}>
            REACT ✦ NODE.JS ✦ MONGODB ✦ EXPRESS ✦ FIGMA ✦ N8N AUTOMATION ✦ REACT ✦ NODE.JS ✦ MONGODB ✦ EXPRESS ✦ FIGMA ✦ N8N AUTOMATION ✦
          </h3>
        </motion.div>
      </div>

      {/* 3. THE STICKY MANIFESTO */}
      <section ref={manifestoRef} style={styles.stickyContainer}>
        <div style={styles.stickyContent}>
          <motion.h2 
            style={{ ...styles.manifestoText, scale: textScale, filter: textBlur }}
          >
            Software is abundant. <br/> <span style={styles.boldAccent}>Excellence is rare.</span>
          </motion.h2>
        </div>
        <div style={styles.scrollingContent}>
          <div style={styles.manifestoBlock}>
            <h3 style={styles.blockTitle}>The Philosophy</h3>
            <p style={styles.blockText}>
              We strip away the bloat. Every product deployed under the Wecove banner is an exercise in minimalist power. We combine breathtaking UI/UX design with unshakeable backend infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL PRODUCT SHOWCASE */}
      <section ref={targetRef} style={styles.horizontalScrollContainer}>
        <div style={styles.horizontalSticky}>
          <div style={styles.horizontalHeader}>
            <h2 style={styles.sectionTitleDark}>Flagship Deployments</h2>
            <p style={styles.sectionSubDark}>Products engineered for scale and market dominance.</p>
          </div>
          
          <motion.div style={{ ...styles.horizontalTrack, x }}>
            {/* Product 1 */}
            <div style={styles.productCard}>
              <div style={styles.productImagePlaceholder}></div>
              <h3 style={styles.productTitle}>Omistia</h3>
              <p style={styles.productDesc}>A next-generation e-commerce application featuring gamified checkout experiences and dynamic user retention mechanics.</p>
            </div>
            
            {/* Product 2 */}
            <div style={styles.productCard}>
              <div style={styles.productImagePlaceholder}></div>
              <h3 style={styles.productTitle}>V-STARS</h3>
              <p style={styles.productDesc}>An automated farm surveillance and anti-theft ecosystem bridging the gap between hardware monitoring and real-time software alerts.</p>
            </div>

            {/* Product 3 */}
            <div style={styles.productCard}>
              <div style={styles.productImagePlaceholder}></div>
              <h3 style={styles.productTitle}>Tattoopetals</h3>
              <p style={styles.productDesc}>A custom-configured web platform with seamless DNS routing, designed for high-availability open market transactions.</p>
            </div>

             {/* Product 4 */}
             <div style={styles.productCard}>
              <div style={styles.productImagePlaceholder}></div>
              <h3 style={styles.productTitle}>Againzt</h3>
              <p style={styles.productDesc}>A modern digital retail platform engineered from the ground up for frictionless user experiences and rapid scaling.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXTENDS THE BLACK BACKGROUND DOWN FOR BREATHING ROOM */}
      <div style={{ height: '250px', width: '100%', backgroundColor: '#0a0a0a' }}></div>

      {/* 5. ASYMMETRIC CAPABILITIES GRID */}
      <section style={styles.capabilitiesSection}>
        <div style={styles.capabilitiesHeader}>
          <h2 style={styles.sectionTitle}>The Arsenal</h2>
        </div>

        <div style={styles.bentoGrid}>
          <motion.div 
            style={{ ...styles.bentoBox, ...styles.bentoLarge }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div style={styles.bentoContent}>
              <h4 style={styles.bentoTitle}>Full-Stack Dominance</h4>
              <p style={styles.bentoDesc}>
                Engineered on a pure MERN stack foundation. We bypass conventional limits to deliver zero-latency experiences and secure, highly scalable databases.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ ...styles.bentoBox, ...styles.bentoDark }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div style={styles.bentoContent}>
              <h4 style={styles.bentoTitleDark}>Workflow Automation</h4>
              <p style={styles.bentoDescDark}>
                Deploying complex, node-based n8n pipelines that aggregate data flawlessly and automate operations at scale.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={styles.bentoBox}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div style={styles.bentoContent}>
              <h4 style={styles.bentoTitle}>Pixel-Perfect UI/UX</h4>
              <p style={styles.bentoDesc}>
                Interfaces that breathe. We implement modern, high-conversion visual languages tailored for flawless user retention.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. MASSIVE CLOSING CTA */}
      <section style={styles.finalSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={styles.ctaWrapper}
        >
          <h2 style={styles.hugeCtaText}>Initiate.</h2>
          <button style={styles.executiveButton}>
            Engage Wecove
          </button>
        </motion.div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#fcfcfc',
    color: '#050505',
    width: '100%',
    overflowX: 'clip', // Prevents horizontal scroll while allowing sticky to work
    WebkitFontSmoothing: 'antialiased',
  },
  /* 1. HERO */
  heroSection: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '1200px',
    padding: '0 2rem',
    zIndex: 10,
  },
  microTag: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.2em',
    color: '#666',
    textTransform: 'uppercase',
  },
  massiveHeading: {
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    fontWeight: '800',
    lineHeight: '0.9',
    letterSpacing: '-0.04em',
    margin: '2rem 0',
    color: '#050505',
  },
  italicAccent: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#444',
  },
  heroSubtext: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.5',
    fontWeight: '400',
  },

  /* 2. MARQUEE */
  marqueeContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#050505',
    padding: '2rem 0',
    borderBottom: '1px solid #222',
  },
  marqueeTrack: {
    display: 'flex',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },
  marqueeText: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#fcfcfc',
    letterSpacing: '0.1em',
    margin: 0,
    paddingRight: '2rem',
  },

  /* 3. STICKY MANIFESTO */
  stickyContainer: {
    position: 'relative',
    height: '200vh',
    backgroundColor: '#050505',
    color: '#fcfcfc',
  },
  stickyContent: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  manifestoText: {
    fontSize: 'clamp(2rem, 5vw, 5rem)',
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
    color: '#888',
  },
  boldAccent: {
    color: '#fcfcfc',
    fontWeight: '700',
  },
  scrollingContent: {
    position: 'absolute',
    bottom: '10vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 20,
  },
  manifestoBlock: {
    backgroundColor: 'rgba(252, 252, 252, 0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '3rem',
    borderRadius: '24px',
    maxWidth: '600px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  blockTitle: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '1rem',
    color: '#aaa',
  },
  blockText: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    color: '#eee',
  },

  /* 4. HORIZONTAL SCROLL SECTION */
  horizontalScrollContainer: {
    position: 'relative',
    height: '300vh', 
    backgroundColor: '#0a0a0a',
  },
  horizontalSticky: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0 4rem',
  },
  horizontalHeader: {
    marginBottom: '4rem',
  },
  sectionTitleDark: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#fcfcfc',
    letterSpacing: '-0.03em',
    marginBottom: '0.5rem',
  },
  sectionSubDark: {
    fontSize: '1.25rem',
    color: '#888',
  },
  horizontalTrack: {
    display: 'flex',
    gap: '3rem',
    width: 'max-content',
  },
  productCard: {
    width: '450px',
    backgroundColor: '#111',
    borderRadius: '24px',
    padding: '2rem',
    border: '1px solid #222',
  },
  productImagePlaceholder: {
    width: '100%',
    height: '250px',
    backgroundColor: '#222',
    borderRadius: '16px',
    marginBottom: '2rem',
  },
  productTitle: {
    fontSize: '2rem',
    color: '#fcfcfc',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  productDesc: {
    fontSize: '1.1rem',
    color: '#aaa',
    lineHeight: '1.5',
  },

  /* 5. BENTO GRID CAPABILITIES */
  capabilitiesSection: {
    padding: '10rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  capabilitiesHeader: {
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    letterSpacing: '-0.03em',
  },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridAutoRows: '400px',
    gap: '2rem',
  },
  bentoBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: '32px',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    transition: 'transform 0.4s ease',
  },
  bentoLarge: {
    gridColumn: 'span 2 / auto',
    backgroundColor: '#ececec',
  },
  bentoDark: {
    backgroundColor: '#050505',
    color: '#fcfcfc',
  },
  bentoContent: {
    maxWidth: '400px',
  },
  bentoTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    color: '#050505',
  },
  bentoDesc: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.5',
  },
  bentoTitleDark: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    color: '#fcfcfc',
  },
  bentoDescDark: {
    fontSize: '1.1rem',
    color: '#aaa',
    lineHeight: '1.5',
  },

  /* 6. FINAL CTA */
  finalSection: {
    padding: '10rem 2rem 15rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaWrapper: {
    textAlign: 'center',
  },
  hugeCtaText: {
    fontSize: 'clamp(5rem, 15vw, 12rem)',
    fontWeight: '800',
    letterSpacing: '-0.05em',
    color: '#050505',
    marginBottom: '2rem',
  },
  executiveButton: {
    padding: '1.5rem 4rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    backgroundColor: '#050505',
    color: '#fcfcfc',
    border: 'none',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  }
};

export default Home;