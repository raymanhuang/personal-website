import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaReact, 
  FaDatabase, 
  FaTools, 
  FaBookOpen,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaApple
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiFlask,
  SiExpress,
  SiIntellijidea,
  SiPycharm,
  SiNumpy,
  SiPandas,
  SiPytorch
} from 'react-icons/si';

const SkillsSection = styled.section`
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

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
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
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const SkillName = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
};

const categoryVariants = {
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

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C/C++", icon: <SiCplusplus />, level: 90 },
        { name: "Java", icon: <FaJava />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 },
        { name: "ARM Assembly", icon: <FaCode />, level: 70 },
        { name: "Verilog HDL", icon: <FaCode />, level: 65 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact />,
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "React Native", icon: <FaReact />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 80 },
        { name: "Flask", icon: <SiFlask />, level: 80 },
        { name: "pandas", icon: <SiPandas />, level: 75 },
        { name: "NumPy", icon: <SiNumpy />, level: 75 },
        { name: "PyTorch", icon: <SiPytorch />, level: 70 },
        { name: "Mongoose", icon: <FaDatabase />, level: 80 }
      ]
    },
    {
      title: "Developer Tools",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "VS Code", icon: <FaCode />, level: 90 },
        { name: "Visual Studio", icon: <FaCode />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "PyCharm", icon: <SiPycharm />, level: 80 },
        { name: "IntelliJ", icon: <SiIntellijidea />, level: 75 },
        { name: "Linux", icon: <FaLinux />, level: 75 },
        { name: "Valgrind", icon: <FaTools />, level: 70 }
      ]
    }
  ];

  return (
    <SkillsSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle>
            Technical Skills
          </SectionTitle>

          <SkillCategories>
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategory
                key={categoryIndex}
                variants={categoryVariants}
                whileHover={{ y: -5 }}
              >
                <CategoryHeader>
                  <CategoryIcon>
                    {category.icon}
                  </CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>

                <SkillsGrid>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -1, 1, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>
                        {skill.icon}
                      </SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>
                        <SkillProgress
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </SkillLevel>
                    </SkillItem>
                  ))}
                </SkillsGrid>
              </SkillCategory>
            ))}
          </SkillCategories>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;