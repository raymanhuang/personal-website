import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterSection = styled.footer`
  padding: 60px 0 40px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  font-size: 0.85rem;
  opacity: 0.7;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.2,
      staggerChildren: 0.1
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

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SocialLinks>
              <SocialLink
                href="https://github.com/raymanhuang"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href="https://linkedin.com/in/raymanhuang"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink
                href="mailto:rayman.huang@mail.utoronto.ca"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </motion.div>

          <FooterText>
            <motion.div variants={itemVariants}>
              <MadeWith>
                Made with <FaHeart color="#e74c3c" style={{ animation: 'pulse 2s infinite' }} /> using <FaReact color="#61dafb" /> React
              </MadeWith>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Copyright>
                © {new Date().getFullYear()} Rayman Huang. All rights reserved.
              </Copyright>
            </motion.div>
          </FooterText>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;