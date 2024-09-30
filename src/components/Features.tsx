import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #202124;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
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
    width: 80%;
    margin-bottom: 20px;
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
