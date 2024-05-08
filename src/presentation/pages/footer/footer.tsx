import React from 'react';
import { Container, Connected, StyledInput, StyledButton, StyledImage, InputButton, LogoContainer, Logo, CopyRightContainer, FooterTextContainer, SecondTextFooter, ButtonContainer, Button, TermsOfServiceLink, PrivacyPolicyLink, FooterText } from './footer-styled';

const Footer: React.FC = () => {
  const handleClick = () => {
    console.log('Botão clicado');
  };

  return (
    <Container>
      <InputButton>
        <Connected>Share your email for exclusive updates!</Connected>
        <StyledInput type="text" placeholder="Enter your email" />
        <StyledButton onClick={handleClick}>GO</StyledButton>
      </InputButton>
      <hr />
      <LogoContainer>
        <Logo>TIISDE</Logo>
        <SecondTextFooter>We specialize in transforming concepts into captivating experiences. Our adept team of developers pioneers innovative solutions tailored to your business, ensuring unparalleled quality and user satisfaction.
          <ButtonContainer>
            <Button onClick={handleClick}>Twitter</Button>
            <Button onClick={handleClick}>Youtube</Button>
            <Button onClick={handleClick}>TikTok</Button>
            <Button onClick={handleClick}>Instagram</Button>
          </ButtonContainer>
        </SecondTextFooter>
      </LogoContainer>
      <hr />
      <CopyRightContainer>
        <FooterText>© 2024 All Rights Reserved by TIISDE</FooterText>
        <FooterTextContainer>
          <TermsOfServiceLink href="#">Terms Of Service</TermsOfServiceLink>
          <PrivacyPolicyLink href="#">Privacy Policy</PrivacyPolicyLink>
        </FooterTextContainer>
      </CopyRightContainer>
    </Container>
  );
}

export { Footer };
