import styled from 'styled-components'

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-top: 2px;
    width: 100vw;
    height: 6rem;
    background-color: ${props => props.theme.colors.white};
`

const Logo = styled.h1`
    font: 32px;
    color: black;
    margin-left: 6rem;
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 32rem;
    gap: 1.2rem;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 10rem;
    margin-right: 3rem;
`

const Button = styled.button`
    background-color: ${props => props.theme.colors.white};
    color: black;
    border: 1px solid black;
    border-radius: 16px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
    &:active {
        background-color: gray;
    }
`

const Link = styled.a`
    color: black;
    font: 16px;
    text-decoration: none;
`

export { Container, NavContainer, Link, Logo, Button, ButtonContainer }
