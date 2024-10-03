import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for navigation
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f1f3f4;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding on mobile */
  }
`;

const DetailCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  height: auto; /* Allow the height to adjust to content */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column; /* Flexbox for vertical layout */
  justify-content: space-between; /* Space between content and button */

  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding on mobile */
    min-width: auto; /* Remove the fixed width on mobile */
    width: 100%; /* Take the full width on mobile */
  }
`;

const ItemTitle = styled.h1`
  font-size: 2rem;
  color: #1a73e8; /* Similar to your theme color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduce font size on mobile */
  }
`;

const ItemDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: start;
  margin-bottom: 20px;
  flex-grow: 1; /* Allows the description to grow and push the button down */

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce font size on mobile */
  }
`;

const TenderImage = styled(motion.img)`
  display: block;  /* Ensures the image behaves like a block element */
  margin: 40px auto;  /* Centers the image horizontally */
  max-width: 60%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 20px auto;  /* Smaller margin on mobile */
    max-width: 100%;  /* Full width on mobile */
  }
`;


const ApplyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1a73e8;
  color: white;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 20px;
  align-self: center; /* Align the button in the center horizontally */

  &:hover {
    background-color: #1558c4;
  }

  @media (max-width: 768px) {
    padding: 10px 15px; /* Reduce padding on mobile */
    font-size: 1rem; /* Slightly reduce font size on mobile */
  }
`;

const itemsData = [
  { id: "1", title: 'Tender 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: "2", title: 'Tender 2', description: 'Detailed description for Tender 2' },
  { id: "3", title: 'Tender 3', description: 'Detailed description for Tender 3' },
  // Add more items here...
];

const DetailPage = () => {
  const { tenderId } = useParams<{ tenderId: string }>(); // Type parameter for useParams

  const item = itemsData.find((item) => item.id === tenderId);

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <DetailContainer>
      <DetailCard>
        <ItemTitle>{item.title}</ItemTitle>
        <TenderImage
          src="https://picsum.photos/800/500"
          alt="Tenderai Dashboard Preview"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <ItemDescription>{item.description}</ItemDescription>
      </DetailCard>
      <ApplyButton>Apply</ApplyButton>
    </DetailContainer>
  );
};

export default DetailPage;
