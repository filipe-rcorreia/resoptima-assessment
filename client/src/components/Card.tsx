import { IMovie } from "../types";
import styled from "styled-components";
import { CardContainer, CardImage, CardText, CardTitle, CardDirector, CardDescription, CardYear } from "../styles";

export const Card = (props: IMovie) => {
  const { id, title, director, description, year, coverImage } = props;
  return (
    <CardContainer>
      <CardImage src={coverImage} alt={title}></CardImage>
      <CardText>
        <CardTitle $limit={2}>{title}</CardTitle>
        <CardDirector>Director: {director}</CardDirector>
        <CardDescription $limit={3}>{description}</CardDescription>
        <CardYear>Year: {year}</CardYear>
      </CardText>
    </CardContainer>
  );
};
