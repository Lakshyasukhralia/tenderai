import { useState } from 'react';
import styled from 'styled-components';
import CustomDropdown from '../components/CustomDropdown';

// Sample items with title and date for sorting
const itemsData = [
  { title: 'Tender 1', description: 'Description for Tender 1', date: '2024-09-28' },
  { title: 'Tender 2', description: 'Description for Tender 2', date: '2024-09-25' },
  { title: 'Tender 3', description: 'Description for Tender 3', date: '2024-09-30' },
  { title: 'Tender 4', description: 'Description for Tender 4', date: '2024-09-22' },
  { title: 'Tender 5', description: 'Description for Tender 5', date: '2024-09-27' },
  { title: 'Tender 6', description: 'Description for Tender 6', date: '2024-09-28' },
  { title: 'Tender 7', description: 'Description for Tender 7', date: '2024-09-29' },
  { title: 'Tender 8', description: 'Description for Tender 8', date: '2024-09-30' }
];

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

// Custom styled select with a new arrow and improved design
const FilterSelect = styled.select`
  appearance: none; /* Remove default dropdown arrow */
  padding: 12px 20px; /* Padding for a comfortable clickable area */
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzMzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDE1LjA1bDYtNkg2bDYgNnoiLz48L3N2Zz4=');
  background-repeat: no-repeat;
  background-position: right 15px center; /* Adjust arrow position */
  background-size: 18px; /* Make the arrow slightly larger */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: #1a73e8;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  &:hover {
    border-color: #1a73e8;
  }
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

  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState(''); // State to track sorting type

  // Filter items based on search term
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
      <h1>Search Tenders</h1>
      {/* Search input field */}
      <SearchInput
        type="text"
        placeholder="Search for a tender..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sorting options */}
      <FilterContainer>
        <FilterLabel>Sort By:</FilterLabel>
        <CustomDropdown handleSelect={function (option: string): void {
          setSortType(option)
        } } />
      </FilterContainer>
      {/* Displaying filtered and sorted items */}
      <ItemList>
        {filteredItems.map((item, index) => (
          <ListItem key={index}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ListItem>
        ))}
      </ItemList>
    </SearchContainer>
  );
};

export default SearchPage;
