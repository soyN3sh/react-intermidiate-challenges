import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdSearch, MdClear } from "react-icons/md";
import {
  SearchInputContainer,
  SearchInputWrapper,
  SearchInputBase,
  SearchButton,
} from "./SearchInput.styles";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";

const SearchInput = () => {
  const { pathname } = useLocation();

  const { dispatch } = useContext(GlobalContext);

  const [search, setSearch] = useState("");

  const searchNotes = () => {
    if (search) {
      if (pathname === "/notes") {
        dispatch({ type: actions.filterNotes, payload: search });
      } else {
        dispatch({ type: actions.filterArchivedNotes, payload: search });
      }
    }
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchNotes();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    searchNotes();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch("");
    dispatch({ type: actions.removeFilter });
  };

  return (
    <SearchInputContainer>
      <SearchInputWrapper>
        <SearchButton onClick={handleClick}>
          <MdSearch color="grey" size={24} />
        </SearchButton>
        <SearchInputBase
          type="text"
          placeholder={
            pathname === "/notes" ? "Search notes..." : "Search archived notes"
          }
          name="search"
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          value={search.toString()}
        />
        <SearchButton onClick={handleClear}>
          <MdClear color="grey" size={24} />
        </SearchButton>
      </SearchInputWrapper>
    </SearchInputContainer>
  );
};

export default SearchInput;
