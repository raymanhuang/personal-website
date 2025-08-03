import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaDatabase, FaMobile, FaCog, FaUsers } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 40px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProjectTitleSection = styled.div`
  flex: 1;
`;

const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ProjectDescription = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const Feature = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureBullet = styled.div`
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const TechStack = styled(motion.div)`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const TechTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
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

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
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

const featureVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Projects = () => {
  const projects = [
    {
      title: "Distributed Key-Value Store",
      subtitle: "Scalable NoSQL Database System",
      icon: <FaDatabase />,
      period: "January 2024 – April 2024",
      website: null,
      github: null,
      description: "A comprehensive distributed database system built from scratch, implementing advanced distributed systems concepts for fault tolerance and scalability.",
      features: [
        "Spearheaded development of a scalable, fault-tolerant NoSQL database using TCP sockets and Java, mirroring commercial database systems",
        "Utilized a centralized authority server with consistent hashing for load balancing and implemented Paxos Algorithm to achieve eventual consistency",
        "Formulated a comprehensive client-server protocol with advanced serialization and an integrated hashing layer for efficient data queries"
      ],
      techStack: ["Java", "TCP Sockets", "JUnit Testing", "Distributed Systems", "Paxos Algorithm", "Consistent Hashing"]
    },
    {
      title: "TrueChamp",
      subtitle: "Social Streak-Tracking Mobile App",
      icon: <FaMobile />,
      period: "January 2025 – April 2025",
      website: "truechamp.io",
      github: null,
      description: "A social motivation app that gamifies habit building through AI-powered challenge verification and real-time community engagement.",
      features: [
        "Built a social streak-tracking app where users join challenge-based parties and verify progress with AI-powered check-in photo validation using Gemini 2.5",
        "Deployed mobile app to the Apple App Store via TestFlight, leveraging Socket.IO for real-time updates and AWS S3 for image storage",
        "Designed and implemented 25+ production-grade UI screens with Figma, React Native, and Reanimated, supporting an engaging and responsive UX"
      ],
      techStack: ["Node.js", "React Native", "MongoDB", "ExpressJS", "LLMs", "Socket.IO", "AWS S3", "Figma", "Reanimated"]
    }
  ];

  return (
    <ProjectsSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle>
            Featured Projects
          </SectionTitle>

          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectHeader>
                  <ProjectTitleSection>
                    <ProjectIcon>
                      {project.icon}
                    </ProjectIcon>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectSubtitle>
                      <FaCalendarAlt />
                      {project.period}
                    </ProjectSubtitle>
                  </ProjectTitleSection>
                  
                  <ProjectLinks>
                    {project.website && (
                      <ProjectLink
                        href={`https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </ProjectLink>
                    )}
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectHeader>

                <ProjectDescription>
                  <strong>{project.subtitle}</strong>
                  <br /><br />
                  {project.description}
                </ProjectDescription>

                <FeaturesList>
                  {project.features.map((feature, featureIndex) => (
                    <Feature
                      key={featureIndex}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <FeatureBullet />
                      <span>{feature}</span>
                    </Feature>
                  ))}
                </FeaturesList>

                <TechStack
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <TechLabel>
                    <FaCog />
                    Technologies Used
                  </TechLabel>
                  <TechTags>
                    {project.techStack.map((tech, techIndex) => (
                      <TechTag
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </TechTag>
                    ))}
                  </TechTags>
                </TechStack>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;