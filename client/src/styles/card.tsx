import styled from "styled-components";
import { LineLimit } from "./shared";

export const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1.618/1;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const CardTitle = styled(LineLimit).attrs({ as: "h2" })`
  font-size: 20px;
  color: #000;
`;

export const CardDirector = styled.p`
  font-size: 14px;
  margin-top: 8px;
  color: #555;
`;

export const CardDescription = styled(LineLimit)`
  font-size: 16px;
  color: #555;
`;

export const CardYear = styled.p`
  font-size: 14px;
  margin-top: 8px;
  color: #888;
`;
