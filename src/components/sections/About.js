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
    <Grid container xs={12}>
      <Grid item xs={6} sm={6}>
        <HeadshotWrapper>
          <Headshot src={headshot} />
        </HeadshotWrapper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <AboutMe>ABOUT ME</AboutMe>
        <AboutText>
          Hi! My name is Merissa and I am currently a 4th year student studying
          a double major in Business & Computer Science at the University of
          British Columbia.
        </AboutText>
        <AboutText>
          I’ve always loved solving problems, even - or especially - when
          they're vague. My most recent internship (as part of RBC's Amplify
          Program) involved ideating and creating a product from a vague
          business challenge, which was a process I enjoyed thoroughly and one
          in which I learned a lot about the product development process.
        </AboutText>
        <AboutText>
          With my technical and business-oriented background, I have a strong
          ability to translate business needs into technical requirements,
          communicate technical terms in a simple manner, and proven ability
          collaborating cross-functionally with teams such as UX, Engineering,
          and Marketing.
        </AboutText>
        <AboutText>
          I am seeking to apply my technical expertise and creative energy in a
          Product Management Intern role. I would also love to chat - feel free
          to reach out!
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
  margin: 10rem 4rem 6rem 4rem;
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
