"use client";

import React, { useEffect, useState } from 'react';

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values
  const translateY = Math.min(scrollY / 2, 60); // Move up max 60px
  const opacity = Math.max(1 - scrollY / 200, 0); // Fade out
  const skew = Math.sin(scrollY / 100) * 10; // Brush skew effect
  const letterSpace = 0.2 + Math.abs(Math.sin(scrollY / 80)) * 0.8; // Animate letter spacing
  const shadowSpread = 8 + Math.abs(Math.sin(scrollY / 60)) * 24; // Animate shadow for brush feel

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          margin: '0',
          borderRadius: '0',
          overflow: 'hidden',
          boxShadow: '0 20px 24px rgba(255, 255, 255, 0.71)'
        }}
      >
        {/* Header */}
        <header
          style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            width: '100vw',
            padding: '2rem 0',
            textAlign: 'center',
            fontSize: '10rem',
            fontWeight: 600,
            color: 'white',
            textShadow: '0 2px 8px #222',
            zIndex: 2,
            fontFamily: "'Permanent Marker', cursive",
            letterSpacing: '0.2rem',
            background: 'rgba(233, 226, 226, 0.15)',
            opacity,
            transition: 'transform 0.2s, opacity 0.2s, letter-spacing 0.2s, text-shadow 0.2s',

            transform: `translate(-50%, 50%) translateY(-${translateY}px) skewX(${skew}deg)`,
          }}
        >
          Strokes
        </header>
        <img
          src="http://localhost:3000/star.jpg"
          alt="Starry Night by Van Gogh"
          draggable={false}
          onContextMenu={e => e.preventDefault()}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // opacity: imageOpacity,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            display: 'sblock',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        />
        {/* Pastel overlay */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(255, 223, 186, 0.5) 0%, rgba(186, 225, 255, 0.5) 50%, rgba(255, 186, 221, 0.5) 100%)',
            zIndex: 1
          }}
        />
          {/* FIXED Background Image */}
  <img
    src="http://localhost:3000/star.jpg"
    alt="Starry Night by Van Gogh"
    draggable={false}
    onContextMenu={e => e.preventDefault()}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      userSelect: "none",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
        <div
          style={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            transform: `translate(-50%, 50%) translateY(-${translateY}px) skewX(${skew}deg)`,
            width: '100vw',
            textAlign: 'center',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 130,
            letterSpacing: `${letterSpace}rem`,
            fontFamily: "'Permanent Marker', cursive",
            textShadow: `0 ${shadowSpread}px ${shadowSpread * 2}px #000, 0 2px 8px #222`,
            opacity,
            transition: 'transform 0.2s, opacity 0.2s, letter-spacing 0.2s, text-shadow 0.2s',
            zIndex: 2
          }}
        >
          Caught in the Art
        </div>

            {/* ABOUT ME (second 100vh) */}
  <div
    style={{
      position: "absolute",
      width: "100vw",
      bottom: "0",
      top: 0,
      height: "150vh",
      fontWeight: 500,
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "'Typewriter', monospace",
      textShadow: "0 2px 8px #000",
    }}
  >
    <h2 style={{ fontSize: "4rem", marginBottom: "1rem" }}>Hello World !</h2>
    <p style={{ fontSize: "1.5rem", maxWidth: "700px", lineHeight: 1.6 }}>
      I’m <b>Bibhash</b> — a software engineer with 5 years of experience
      across multiple tech stacks and domain.  
      I love building cool stuff, be it code, art or my life.
    </p>
    <p
      style={{
        marginTop: "2rem",
        fontSize: "1.2rem",
        background: "rgba(0,0,0,0.5)",
        padding: "0.8rem 1.5rem",
        borderRadius: "8px",
      }}
    >
      📧 Reach me at: <b>bibhashmorang1@gmail.com</b>
      <br />
      🌐 Scroll for cool stuff
    </p>
  </div>

      </div>
       {/* CONTENT SECTIONS */}
      <section
        style={{
          height: "100vh",
          background: "#111",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontFamily: "'Permanent Marker', cursive",
        }}
      >
        🎨 Art
      </section>

      <section
        style={{
          height: "100vh",
          background: "#2a2a72",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontFamily: "'Permanent Marker', cursive",
        }}
      >
        💻 Projects
      </section>

      <section
        style={{
          height: "100vh",
          background: "#ff6f61",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontFamily: "'Permanent Marker', cursive",
        }}
      >
        ✈️ Trips
      </section>

      <section
        style={{
          height: "100vh",
          background: "#1e3c72",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontFamily: "'Permanent Marker', cursive",
        }}
      >
        🏋️ Bodybuilding
      </section>
    </>
  );
}

export default HomePage;