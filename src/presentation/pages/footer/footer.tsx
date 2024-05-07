import React from 'react';
import { Container, Connected, StyledInput, StyledButton, StyledImage, InputButton, LogoContainer, Logo, FooterText, CopyRightContainer, FooterTextContainer, SecondTextFooter, ButtonContainer, Button, arrow, twitterIcon, youtubeIcon, tiktokIcon, instagram } from './footer-styled';

const Footer: React.FC = () => {
  const handleClick = () => {
    console.log('Botão clicado');
  };

  return (
    <Container>
      <InputButton>
        <Connected>Share your email for exclusive updates!</Connected>
        <StyledInput type="text" placeholder="Enter your email" />
        <StyledButton onClick={handleClick}><StyledImage src={arrow} alt="arrow" /></StyledButton>
      </InputButton>
      <hr />
      <LogoContainer>
        <Logo>TIISDE</Logo>
        <SecondTextFooter>We specialize in transforming concepts into captivating experiences. Our adept team of developers pioneers innovative solutions tailored to your business, ensuring unparalleled quality and user satisfaction.
          <ButtonContainer>
            <Button onClick={handleClick}><StyledImage src={twitterIcon} alt="Twitter" /></Button>
            <Button onClick={handleClick}><StyledImage src={youtubeIcon} alt="Youtube" /></Button>
            <Button onClick={handleClick}><StyledImage src={tiktokIcon} alt="TikTok" /></Button>
            <Button onClick={handleClick}><StyledImage src={instagram} alt="Instagram" /></Button>
          </ButtonContainer>
        </SecondTextFooter>
      </LogoContainer>
      <hr />
      <CopyRightContainer>
        <FooterText>© 2024 All Rights Reserved by TIISDE</FooterText>
        <FooterTextContainer>
          <FooterText>Terms Of Service</FooterText>
          <FooterText>Privacy Policy</FooterText>
        </FooterTextContainer>
      </CopyRightContainer>
    </Container>
  );
}

export { Footer };
