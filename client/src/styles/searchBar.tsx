import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 720px;
  margin-inline: auto;
  background-color: #f0f0f0;
  color: #aaa;
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;

  ::placeholder {
    color: #aaa;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  padding: 8px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;
