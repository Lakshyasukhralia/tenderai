import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CTAButton = styled(motion(Link))`
  margin-top: 20px;  /* Adjust this margin to add space above the button */
  padding: 10px 30px;
  background-color: #1a73e8;
  color: white;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #1558c4;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f1f3f4;
  padding-top: 100px; /* Account for the fixed header */
  padding-bottom: 100px; /* Account for the fixed header */

  @media (max-width: 768px) {
    padding-top: 80px;  /* Adjust padding on mobile */
  padding-bottom: 80px; /* Account for the fixed header */
  }
`;

const Heading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #202124;

  @media (max-width: 768px) {
    font-size: 3rem;  /* Reduce font size on mobile */
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;  /* Further reduce font size on small phones */
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.5rem;
  color: #5f6368;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;  /* Smaller font size for mobile */
  }
`;

const HeroImage = styled(motion.img)`
  margin-top: 40px;
  max-width: 90%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 20px;  /* Smaller margin on mobile */
    max-width: 100%;  /* Full width on mobile */
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Win More Government Bids
      </Heading>
      <SubHeading
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        With More Confidence using Tenderai's AI-driven platform
      </SubHeading>
      <CTAButton
        to="/search"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Find Tenders
      </CTAButton>

      {/* Image Below Button */}
      <HeroImage
        src="https://picsum.photos/1000/600"
        alt="Tenderai Dashboard Preview"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />
    </HeroSection>
  );
};

export default Hero;
