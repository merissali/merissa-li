import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import ExperienceCard from "../ExperienceCard";
import rbc from "../../img/rbc.jpg";
import trulioo from "../../img/trulioo.png";
import smartsweets from "../../img/smartsweets.png";

function Work() {
  // data
  const experiences = [
    {
      image: rbc,
      link: "https://jobs.rbc.com/ca/en/amplify",
      company: "RBC Amplify Program (Capital Markets)",
      position: "Software Developer",
      description:
        "Ideated, designed, and developed patent-pending product to transform application resource management for developers across RBC Capital Markets.",
      tools: "Figma, ReactJS, NodeJS, Express, OpenShift, Docker",
    },
    {
      image: trulioo,
      link: "https://www.trulioo.com",
      company: "Trulioo",
      position: "Business Analyst (Data Science)",
      description:
        "Conducted data cleansing and analysis on client transactions and clearly communicated analysis results to clients.",
      tools: "SQL, Python, Jira, Microsoft Excel",
    },
    {
      image: smartsweets,
      link: "https://smartsweets.ca/",
      company: "SmartSweets",
      position: "Operations Intern",
      description:
        "Managed inventory, spearheaded HQ office move, and projected volume of demand in a fast-paced startup environment.",
      tools: "Trello, Excel, Oracle (NetSuite)",
    },
  ];

  // render items
  const experiencesJSX = experiences.map((e) => {
    return (
      <StyledGridItem item xs={12}>
        <ExperienceCard
          image={e.image}
          link={e.link}
          company={e.company}
          position={e.position}
          description={e.description}
          tools={e.tools}
        />
      </StyledGridItem>
    );
  });

  return (
    <>
      <WorkExperience>WORK EXPERIENCE</WorkExperience>
      <StyledPaper>
        <StyledGridItem container spacing={1}>
          {experiencesJSX}
        </StyledGridItem>
      </StyledPaper>
    </>
  );
}

export default Work;

// styles
const WorkExperience = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  text-align: left;
  padding: 1rem 0 0 0;
  margin-bottom: 4rem;
  margin-left: 4rem;
`;
const StyledPaper = styled.div`
  padding: 0 2rem 0 3rem;
  box-shadow: none;
`;

const StyledGridItem = styled(Grid)`
  box-shadow: none;
`;
