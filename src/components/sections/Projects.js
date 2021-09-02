import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <>
      <ComingSoon>
        Check out my portfolio{" "}
        <a
          href='https://merissali.notion.site/merissali/Merissa-s-Portfolio-1b3f46e78713456ead16bcb4b42a4b88'
          target='_blank'
        >
          here
        </a>
        !
      </ComingSoon>
    </>
  );
}

export default Projects;

const ComingSoon = styled.h1`
  height: 300px;
  padding-top: 150px;
  color: #91accd;
`;
