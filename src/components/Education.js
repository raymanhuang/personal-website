import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 100px 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 40px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const UniversityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

const UniversityIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
`;

const UniversityInfo = styled.div`
  flex: 1;
`;

const UniversityName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const DegreeInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const GPASection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const GPALabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GPAValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const CourseworkSection = styled(motion.div)`
  margin-top: 2rem;
`;

const CourseworkTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }
`;

const CourseName = styled.div`
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #fff;
`;

const CourseDetails = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
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

const Education = () => {
  const courses = [
    { name: "Computer Fundamentals", details: "C Programming" },
    { name: "Programming Fundamentals", details: "C++, OOP" },
    { name: "Digital Systems", details: "FPGA, Verilog" },
    { name: "Computer Organization", details: "ARM Assembly, Processor Design" },
    { name: "Software Design", details: "C++ GIS Design" },
    { name: "Data Structures and Algorithms", details: "Algorithm Analysis" },
    { name: "Operating Systems", details: "System Programming" },
    { name: "Databases", details: "SQL, Database Design" },
    { name: "Distributed Systems", details: "Distributed Computing" },
    { name: "Machine Learning", details: "ML Algorithms" },
    { name: "Probability and Statistics", details: "Statistical Analysis" },
  ];

  return (
    <EducationSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>
            Education
          </SectionTitle>

          <EducationCard
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <UniversityHeader>
              <UniversityIcon>
                <FaGraduationCap />
              </UniversityIcon>
              <UniversityInfo>
                <UniversityName>University of Toronto</UniversityName>
                <DegreeInfo>
                  <InfoItem>
                    <FaMapMarkerAlt />
                    <span>Toronto, Ontario</span>
                  </InfoItem>
                  <InfoItem>
                    <FaCalendarAlt />
                    <span>September 2021 – Present</span>
                  </InfoItem>
                </DegreeInfo>
              </UniversityInfo>
            </UniversityHeader>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>
                Bachelor of Applied Science in Computer Engineering
              </h4>

              <GPASection
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <GPALabel>Cumulative GPA</GPALabel>
                <GPAValue>
                  <FaStar color="#ffd700" />
                  3.41/4.0
                </GPAValue>
              </GPASection>

              <CourseworkSection variants={itemVariants}>
                <CourseworkTitle>
                  📚 Relevant Coursework
                </CourseworkTitle>
                <CourseGrid>
                  {courses.map((course, index) => (
                    <CourseItem
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CourseName>{course.name}</CourseName>
                      <CourseDetails>{course.details}</CourseDetails>
                    </CourseItem>
                  ))}
                </CourseGrid>
              </CourseworkSection>
            </motion.div>
          </EducationCard>
        </motion.div>
      </Container>
    </EducationSection>
  );
};

export default Education;