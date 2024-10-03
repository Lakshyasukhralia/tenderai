import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomDropdown from '../components/CustomDropdown';
import { Link } from 'react-router-dom';

// Define types for the tender items
interface TenderItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

// Styled components for layout
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #f1f1f1;
`;

const Heading = styled.p`
  text-align: left;
  width: 100%;
  max-width: 1200px; /* Same width as SearchInput */
  font-size: 3rem;
  margin-bottom: 20px; /* Add some space between the heading and input */
`;

const SearchInput = styled.input`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1a73e8;
  }

  &:not(:focus) {
    border-color: #ccc;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 1200px;
`;

const ListItem = styled.li`
  padding: 30px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;  /* Stack items vertically */
  align-items: flex-start;  /* Align items to the start (left) */

  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  width: 100%;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  width: 100%;
  margin-bottom: 10px;  /* Add some space between description and date */
`;

const ItemDate = styled.p`
  font-size: 0.7rem;
  color: #666;
  align-self: flex-end;  /* Aligns the date to the right */
`;

const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Specify the type as string
  const [sortType, setSortType] = useState<string>(''); // Specify the type as string
  const [itemsData, setItemsData] = useState<TenderItem[]>([]); // State to store fetched data with type TenderItem[]
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading with boolean type

  // Fetch data from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true); // Set loading state
        const response = await axios.get<TenderItem[]>('https://dummyjson.com/c/2504-65e3-4f57-96e0'); // Replace with your API URL and specify response type
        setItemsData(response.data); // Assuming the API returns data directly in response.data
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false); // Ensure loading is disabled even if there's an error
      }
    };

    fetchItems();
  }, []);

  // Filter and sort the fetched items
  const filteredItems = itemsData
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sorting logic based on the selected sort type
      if (sortType === 'Alphabetical') {
        return a.title.localeCompare(b.title);
      } else if (sortType === 'Date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0; // No sorting
    });

  return (
    <SearchContainer>
      <Heading>Search Tenders.</Heading>
      {/* Search input field */}
      <SearchInput
        type="text"
        placeholder="Enter your search query here.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sorting options */}
      <FilterContainer>
        <FilterLabel>Sort By:</FilterLabel>
        <CustomDropdown
          handleSelect={(option: string) => setSortType(option)}
        />
      </FilterContainer>

      {loading ? (
        <p>Loading...</p> // Show a loading message while fetching data
      ) : (
        <ItemList>
          {filteredItems.map((item) => (
            <Link to={`/tender/${item.id}`}>
              <ListItem key={item.id}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemDate>{item.date}</ItemDate>
              </ListItem>
            </Link>
          ))}
        </ItemList>

      )}
    </SearchContainer>
  );
};

export default ListingPage;
