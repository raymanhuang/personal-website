import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0f0f23);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: #ffffff;
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FloatingOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.1;
`;

const Orb1 = styled(Orb)`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: 10%;
  left: 10%;
`;

const Orb2 = styled(Orb)`
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  top: 60%;
  right: 15%;
`;

const Orb3 = styled(Orb)`
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  bottom: 20%;
  left: 20%;
`;

const GeometricLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.05;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #ffffff, transparent);
  }
  
  &::before {
    left: 20%;
    animation: lineFloat1 8s ease-in-out infinite;
  }
  
  &::after {
    right: 30%;
    animation: lineFloat2 10s ease-in-out infinite reverse;
  }
  
  @keyframes lineFloat1 {
    0%, 100% { transform: translateY(-10px); opacity: 0.05; }
    50% { transform: translateY(10px); opacity: 0.1; }
  }
  
  @keyframes lineFloat2 {
    0%, 100% { transform: translateY(5px); opacity: 0.03; }
    50% { transform: translateY(-5px); opacity: 0.08; }
  }
`;

const ParticleField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

const Navigation = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const NavText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
`;

const MainContent = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

const Name = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  font-weight: 400;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.4rem;
  }
`;

const ProfAILink = styled(motion.a)`
  font-family: 'Poppins', sans-serif;
  color: #4f9cf9;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #67a8ff;
    text-decoration: underline;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

function App() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10
  }));

  return (
    <AppContainer>
      <FloatingOrbs>
        <Orb1
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <Orb2
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <Orb3
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </FloatingOrbs>

      <GeometricLines />

      <ParticleField>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </ParticleField>

      <Navigation
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NavText>home</NavText>
      </Navigation>

      <MainContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Name variants={itemVariants}>
          Rayman Huang
        </Name>
        
        <Description variants={itemVariants}>
          I'm currently working as a Founding Software Engineer at{' '}
          <ProfAILink 
            href="https://profai.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ProfAI.io
          </ProfAILink>
          . I'm also studying Computer Engineering at the University of Toronto, 
          building scalable systems and AI-powered educational tools.
        </Description>

        <LinksContainer variants={itemVariants}>
          <SocialLink
            href="https://github.com/raymanhuang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt />
            github
          </SocialLink>
          
          <SocialLink
            href="https://www.linkedin.com/in/rayman-huang-9736791a7/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt />
            linkedin
          </SocialLink>
        </LinksContainer>
      </MainContent>
    </AppContainer>
  );
}

export default App;