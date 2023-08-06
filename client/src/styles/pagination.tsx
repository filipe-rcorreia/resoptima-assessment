import styled from "styled-components";
import { PaginationEl } from "./shared";

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-inline: auto;
  list-style: none;
`;

export const PaginationItem = styled.li`
  margin: 0 4px;
  padding: 8px;
`;

export const PaginationBtn = styled(PaginationEl).attrs({ as: "button" })`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: unset;

  &:disabled {
    cursor: default;
    background-color: unset;
  }
`;

export const PaginationEllipsis = styled(PaginationEl).attrs({ as: "span" })`
  cursor: default;
`;
