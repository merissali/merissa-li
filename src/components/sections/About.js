import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import headshot from "../../img/headshot.jpg";

function About() {
  // data
  const technicalSkills = [
    "JavaScript/ReactJS",
    "Java",
    "SQL",
    "HTML + CSS",
    "NodeJS",
    "Python",
    "Git",
    "RESTful APIs",
  ];

  // render items
  const technicalSkillsJSX = technicalSkills.map((skill) => {
    return <li>{skill}</li>;
  });
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <HeadshotWrapper>
          <Headshot src={headshot} />
        </HeadshotWrapper>
      </Grid>
      <Grid item xs={5}>
        <AboutMe>ABOUT ME</AboutMe>
        <AboutText>
          Hi! My name is Merissa and I am currently a 4th year student studying
          a combined major in Business & Computer Science at the University of
          British Columbia.
        </AboutText>
        <AboutText>
          I’ve always loved solving problems creatively, especially using
          technology, which leads me to my interest in product management today.
        </AboutText>
        <AboutText>
          I value human connection, empathy, and continual personal &
          professional growth.
        </AboutText>
        <h1>TECHNICAL SKILLS</h1>
        <SkillsList>{technicalSkillsJSX}</SkillsList>
      </Grid>
    </Grid>
  );
}

export default About;

// styles
const HeadshotWrapper = styled.div`
  position: relative;
  max-width: 50%;
  margin-right: 0;
`;
const Headshot = styled.img`
  position: absolute;
  margin: 6rem 4rem 4rem 4rem;
`;

const AboutMe = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-align: left;
  padding: 1rem 0 0 0;
  margin-left: 0;
`;
const AboutText = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  padding: 1rem 0 1rem 0;
  position: relative;
  margin-left: 0;
`;

const SkillsList = styled.ul`
  columns: 2;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 1.5rem;
  position: relative;
  column-gap: 10%;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;
