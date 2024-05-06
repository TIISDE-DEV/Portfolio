import React from 'react';
import { Container, Connected, StyledInput, StyledButton, InputButton, LogoContainer, Logo, FooterText, CopyRightContainer, FooterTextContainer, SecondTextFooter, ButtonContainer, Button } from './footer-styled';

const Footer: React.FC = () => {
  const handleClick = () => {
    console.log('Botão clicado');
  };

  return (
    <Container>
      <InputButton>
        <Connected>Share your email for exclusive updates!</Connected>
        <StyledInput type="text" placeholder="Enter your email" />
        <StyledButton onClick={handleClick}>Send</StyledButton>
      </InputButton>
      <hr />
      <LogoContainer>
        <Logo>TIISDE</Logo>
        <SecondTextFooter>At TIISDE, we specialize in transforming concepts into captivating experiences. Our adept team of developers pioneers innovative solutions tailored to your business, ensuring unparalleled quality and user satisfaction.
          <ButtonContainer>
            <Button onClick={handleClick}>Icon</Button>
            <Button onClick={handleClick}>Icon</Button>
            <Button onClick={handleClick}>Icon</Button>
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
