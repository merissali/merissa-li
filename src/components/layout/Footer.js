import React from "react";
import styled from "styled-components";

function Footer() {
  // data
  const socialLinks = [
    {
      link: "mailto:merissajli@gmail.com?subject=Hello!",
      label: "E-mail",
      icon: "fas fa-envelope-square",
    },
    {
      link: "https://www.linkedin.com/in/merissali/",
      label: "LinkedIn",
      icon: "fab fa-linkedin",
    },
    {
      link: "https://medium.com/@merissali",
      label: "Medium",
      icon: "fab fa-medium",
    },
    {
      link: "https://github.com/merissali",
      label: "GitHub",
      icon: "fab fa-github-square",
    },
  ];

  // render items
  const socialLinksJSX = socialLinks.map((s) => {
    return (
      <IconLink href={s.link} target='_blank' aria-label={s.label}>
        <i className={s.icon}></i>
      </IconLink>
    );
  });
  return (
    <FooterContainer>
      <SocialMediaSection>
        <SocialMediaWrapper>
          <SocialIcons>{socialLinksJSX}</SocialIcons>
        </SocialMediaWrapper>
      </SocialMediaSection>
      <p>Designed and created by Merissa Li</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #f5f5f5;
  border-top-color: #333;
  border-width: 1px;
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialMediaSection = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 5px auto 5px auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 25px;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 40px;
  &:hover {
    color: #91accd;
  }
`;
