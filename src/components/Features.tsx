import React from 'react';
import styled from 'styled-components';

// Styled components for the section, grid, and feature cards
const FeaturesSection = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #202124;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust heading size on mobile */
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;  /* Ensures content wraps on smaller screens */
  gap: 20px;  /* Adds space between feature cards */
  max-width: 1200px;
  margin: 0 auto;  /* Centers the grid horizontally */

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack feature cards vertically on mobile */
    align-items: center;  /* Center align items */
  }
`;

const FeatureCard = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 80%;  /* Make cards take up most of the width on mobile */
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1a73e8;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Features Component
const Features = () => {
  return (
    <FeaturesSection id="features">
      <Heading>Key Features</Heading>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>AI Insights</FeatureTitle>
          <FeatureDescription>Leverage AI to gain insights from tender data.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Automated Bidding</FeatureTitle>
          <FeatureDescription>Automate your bidding process with AI.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Collaborative Tools</FeatureTitle>
          <FeatureDescription>Collaborate with your team seamlessly.</FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
