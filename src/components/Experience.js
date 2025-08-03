import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaChevronRight, FaCode, FaRocket } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: rgba(255, 255, 255, 0.03);
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  display: flex;
  margin-bottom: 4rem;
  align-items: flex-start;
  
  &:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
    
    @media (max-width: 768px) {
      flex-direction: row;
      text-align: left;
    }
  }
  
  @media (max-width: 768px) {
    margin-left: 60px;
    flex-direction: row;
  }
`;

const TimelineNode = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  position: relative;
  margin: 0 2rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  z-index: 2;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    margin: 0;
  }
`;

const CardContent = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    
    ${props => props.isOdd ? `
      right: -30px;
      border-left-color: rgba(255, 255, 255, 0.1);
      
      @media (max-width: 768px) {
        left: -30px;
        right: auto;
        border-right-color: rgba(255, 255, 255, 0.1);
        border-left-color: transparent;
      }
    ` : `
      left: -30px;
      border-right-color: rgba(255, 255, 255, 0.1);
    `}
  }
  
  @media (max-width: 768px) {
    max-width: none;
    padding: 2rem;
  }
`;

const CompanyHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: #e0e7ff;
  margin-bottom: 1rem;
`;

const JobInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled(motion.li)`
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

const BulletPoint = styled.div`
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const TechStack = styled(motion.div)`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TechLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const achievementVariants = {
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

const Experience = () => {
  const experiences = [
    {
      title: "Founding Software Engineer",
      company: "ProfAI (profai.io)",
      location: "Toronto, Ontario",
      period: "Jan 2025 – Present",
      icon: <FaRocket />,
      achievements: [
        "Designed and implemented a multithreaded Flask backend in Python to convert PDF lecture slides into AI-narrated videos using Gemini API (script generation), Google Cloud Text-to-Speech (audio), and Groq API (subtitles), with real-time updates to MongoDB for progressive streaming.",
        "Optimized concurrency with slide-by-slide processing and asynchronous job execution, enabling users to begin consuming content while subsequent slides are still rendering.",
        "Developed a full-stack web platform using the MERN stack, integrating Firebase Authentication (Google, Apple, Email) and Gemini-powered components for quizzes, flashcards, and a context-aware AI assistant.",
        "Rebuilt the application in React Native for mobile, launched on iOS and iPadOS App Store, and integrated Stripe, RevenueCat, and custom webhooks for in-app subscription management.",
        "Scaled the platform to over 1,000 active users and paying customers, improving API throughput, reducing latency, and ensuring fault tolerance in a distributed content generation pipeline."
      ],
      techStack: ["Python", "Flask", "React", "React Native", "MongoDB", "Firebase", "Gemini API", "Google Cloud", "Stripe"]
    },
    {
      title: "Software Engineer Intern – PMF",
      company: "Advanced Micro Devices (AMD)",
      location: "Markham, Ontario", 
      period: "May 2024 – Present",
      icon: <FaCode />,
      achievements: [
        "Developed and debugged C++ kernel/user-mode features for PMF using WDK, WinDbg, and HDT/HDS.",
        "Implemented ACPI-based power config features and authored internal developer documentation.",
        "Built a Python Jenkins automation pipeline, reducing QA test time by 3 days per release.",
        "Created an internal website with React and Plotly to visualize GPU metrics from Excel data in real-time."
      ],
      techStack: ["C++", "Python", "React", "Jenkins", "WDK", "WinDbg", "Plotly"]
    }
  ];

  return (
    <ExperienceSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle>
            Experience
          </SectionTitle>

          <Timeline>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index}>
                <TimelineNode>
                  {exp.icon}
                </TimelineNode>
                
                <CardContent
                  variants={cardVariants}
                  isOdd={index % 2 === 0}
                  whileHover={{ y: -5 }}
                >
                  <CompanyHeader>
                    <JobTitle>
                      <FaBriefcase />
                      {exp.title}
                    </JobTitle>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobInfo>
                      <InfoItem>
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </InfoItem>
                      <InfoItem>
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </InfoItem>
                    </JobInfo>
                  </CompanyHeader>

                  <AchievementsList>
                    {exp.achievements.map((achievement, achIndex) => (
                      <Achievement
                        key={achIndex}
                        variants={achievementVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <BulletPoint />
                        <span>{achievement}</span>
                      </Achievement>
                    ))}
                  </AchievementsList>

                  <TechStack
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TechLabel>Technologies Used</TechLabel>
                    <TechTags>
                      {exp.techStack.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechTags>
                  </TechStack>
                </CardContent>
              </ExperienceCard>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;