import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.black};
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const Connected = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  margin-right: auto; 
`

const InputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column; 
    align-items: stretch;
  }
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  width: 20%;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    margin-bottom: 10px;
  }
`

const StyledButton = styled.button`
  border: none;
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  &:active {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`

const Logo = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 26px;
  margin-bottom: 10px;
`

const SecondTextFooter = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`

const FooterText = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  margin-left: 10px; 
  word-wrap: break-word; 
  -webkit-line-clamp: 8; 
  -webkit-box-orient: vertical; 
  overflow: hidden; 
`

const TermsOfServiceLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`

const PrivacyPolicyLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`

const CopyRightContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

const FooterTextContainer = styled(FooterText)`
  display: flex;
  align-items: center;
  margin-left: auto; 
  padding: 10px;
`

const ButtonContainer = styled.div`
  display: flex; 
  align-items: center; 
`

const Button = styled(StyledButton)`
  margin: 10px;
  border-radius: 50%;
  width: 50px; 
  height: 50px; 
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  &:active {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`

export { Container, Connected, InputButton, StyledInput, StyledButton, StyledImage, LogoContainer, Logo, FooterText, TermsOfServiceLink, PrivacyPolicyLink, CopyRightContainer, FooterTextContainer, SecondTextFooter, Button, ButtonContainer }
