import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
  max-width: 800px;
  padding: 40px 20px;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #f0f2f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: #fff;
  border-radius: 1px;
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
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
      stiffness: 100
    }
  }
};

const Hero = () => {
  const floatingElements = [
    { size: 60, top: '10%', left: '10%', delay: 0 },
    { size: 80, top: '20%', right: '15%', delay: 1 },
    { size: 40, bottom: '20%', left: '20%', delay: 2 },
    { size: 100, bottom: '10%', right: '10%', delay: 0.5 },
  ];

  return (
    <HeroSection>
      <BackgroundElements>
        {floatingElements.map((element, index) => (
          <FloatingElement
            key={index}
            size={element.size}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </BackgroundElements>

      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Name variants={itemVariants}>
          Rayman Huang
        </Name>
        
        <Title variants={itemVariants}>
          Computer Engineering Student & Software Developer
        </Title>

        <ContactInfo variants={itemVariants}>
          <ContactItem
            href="mailto:rayman.huang@mail.utoronto.ca"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            <span>rayman.huang@mail.utoronto.ca</span>
          </ContactItem>
          
          <ContactItem
            href="https://linkedin.com/in/raymanhuang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </ContactItem>
          
          <ContactItem
            href="https://github.com/raymanhuang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </ContactItem>
        </ContactInfo>

        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2 }}
        >
          <ScrollText>Scroll Down</ScrollText>
          <ScrollLine
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;