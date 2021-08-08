import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

function ExperienceCard({
  image,
  link,
  company,
  position,
  description,
  tools,
}) {
  return (
    <StyledCard>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ActionArea>
            <Logo
              component='img'
              alt='Company Logo'
              src={image}
              title='Company Logo'
              onClick={() => window.open(link, "_blank")}
            />
          </ActionArea>
        </Grid>
        <Grid item xs={7}>
          <Content>
            <Company href={link} target='_blank'>
              {company}
            </Company>
            <Position>{position}</Position>
            <Description>{description}</Description>
            <Tools>TOOLS USED: {tools}</Tools>
          </Content>
        </Grid>
      </Grid>
    </StyledCard>
  );
}

export default ExperienceCard;

const StyledCard = styled.div`
  border: none;
  box-shadow: none;
  outline: none;
  margin: 1rem 0 2rem 3rem;
`;
const ActionArea = styled.button`
  width: 100px;
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  background: #fff;
`;

const Logo = styled.img`
  margin: 1rem 0 0 5rem;
  height: 230px;
  justify-self: center;
`;

const Content = styled.div`
  margin-left: 3rem;
`;

const Company = styled.a`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #91accd;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 0 0.25rem 0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Position = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

const Description = styled.p`
  line-height: 23px;
  letter-spacing: 0em;
  margin-bottom: 2rem;
`;

const Tools = styled.p`
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0em;
  font-weight: 650;
`;
