import React from 'react'

import { Button, ButtonContainer, Container, Link, Logo, NavContainer } from './header-styled'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>TIISDE</Logo>
      <NavContainer>
        <Link href="#teste">Home</Link>
        <Link href="#teste">About</Link>
        <Link href="#teste">Services</Link>
        <Link href="#teste">Portfolio</Link>
        <Link href="#teste">Resources</Link>
        <ButtonContainer>
          <Button>Lets Talk</Button>
        </ButtonContainer>
      </NavContainer>
    </Container>
  )
}

export { Header }
