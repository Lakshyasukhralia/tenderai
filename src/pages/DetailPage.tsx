import { useParams } from 'react-router-dom'; // Assuming you are using React Router for navigation
import styled from 'styled-components';
import Header from '../components/Header';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f3f4;
  min-height: 100vh;
  margin-top: 50px;
  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding on mobile */
    margin-top: 70px;
  }
`;

const DetailCard = styled.div`
display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  width:100%;
  max-width: 1200px;
  min-height: 80vh;
  margin-bottom: 40px;
  border-radius: 10px;
  height: auto; /* Allow the height to adjust to content */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding on mobile */
    min-width: auto; /* Remove the fixed width on mobile */
    width: 100%; /* Take the full width on mobile */
    margin-bottom: 20px;
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

const ApplyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1a73e8;
  color: white;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: auto; /* This pushes the button to the bottom */
  align-self: center;

  &:hover {
    background-color: #1558c4;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 1rem;
  }
`;

const PropertyItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;  // Remove border for last item
  }
`;

const PropertyName = styled.span`
  font-weight: bold;
  color: #333;
  text-transform: capitalize;
`;

const PropertyValue = styled.span`
  color: #666;
  max-width: 400px; /* To avoid text overflowing */
  word-wrap: break-word; /* Handle long text in description */
`;

const item = {
  id: "1",
  title: 'Tender 1',
  description: 'Lorem ipsum dolor sit amet',
  description1: 'Lorem ipsum dolor sit amet',
  description2: 'Lorem ipsum dolor sit amet',
  description3: 'Lorem ipsum dolor sit amet',
  description4: 'Lorem ipsum dolor sit amet',
  description5: 'Lorem ipsum dolor sit amet',
  description6: 'Lorem ipsum dolor sit amet',
  description7: 'Lorem ipsum dolor sit amet',
  description8: 'Lorem ipsum dolor sit amet'
}

const DetailPage = () => {
  const { tenderId } = useParams<{ tenderId: string }>(); // Type parameter for useParams

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
    <Header></Header>
    <DetailContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <DetailCard>
        {Object.entries(item).map(([key, value], index) => (
          <PropertyItem key={index}>
            <PropertyName>{key}</PropertyName>
            <PropertyValue>{value}</PropertyValue>
          </PropertyItem>
        ))}
        <ApplyButton>Apply</ApplyButton>
      </DetailCard>
    </DetailContainer>
    </>
  );
};

export default DetailPage;
