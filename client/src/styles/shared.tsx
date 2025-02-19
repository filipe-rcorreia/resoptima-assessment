import styled from "styled-components";

export const LineLimit = styled.span<{ $limit?: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.$limit || 3};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PaginationEl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
