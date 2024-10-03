import { useState } from 'react';
import styled from 'styled-components';

// Define the type for isOpen prop
interface ArrowIconProps {
  isOpen: boolean;
}

// Styled components for custom dropdown
const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownHeader = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s ease;
  
  &:hover, &:focus {
    border-color: #1a73e8;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
`;

const DropdownListItem = styled.li`
  padding: 12px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// Use the interface for isOpen prop in ArrowIcon
const ArrowIcon = styled.span<ArrowIconProps>`
  display: inline-block;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  transition: transform 0.3s ease;

  ${({ isOpen }) => isOpen && `
    transform: rotate(180deg);
  `}
`;

interface CustomDropdownProps {
  handleSelect: (option: string) => void;  // Function prop accepting a string
}

// Options for the dropdown
const options = ["None", "Alphabetical", "Date"];

const CustomDropdown: React.FC<CustomDropdownProps> = ({ handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSelect(option);  // Pass the selected option to the parent
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption}
        <ArrowIcon isOpen={isOpen} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
