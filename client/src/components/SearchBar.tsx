import { useState } from "react";
import { Input, SearchBarContainer, SearchBtn } from "../styles";
import search from "../assets/search.svg";
import { SearchIcon } from "../styles/searchBar";

export const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Search" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}></Input>
      <SearchBtn type="button" title="Search" onClick={handleSearchClick}>
        <SearchIcon src={search} alt="Search"></SearchIcon>
      </SearchBtn>
    </SearchBarContainer>
  );
};
