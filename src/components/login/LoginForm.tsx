import React from 'react';
import styled from "styled-components";
import './LoginForm.css';

const Layout = styled.div`
    height: 108px;
`

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
    width: 50%;
    height: 176px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Input = styled.input`
    position : relative;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin 0 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #fff;
    box-sizing: border-box;
`

const Button = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 40px;
    margin: 16px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius:0;
    background-color: #07b353;
`;  
    
const Logo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: 108px; //Container 높이/2 + Logo 높이/2
`

function LoginForm() {
    return (
        <div>
            <Logo className ="trello-logo" src="/img/trello-logo-blue.png" />
            <Container>
                <Input id="id" name="id" placeholder="Enter email" />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                />
                <Button>Login</Button>
            </Container>

        </div>
            
            
        /*
        <div className="card">
            <div className="container">

            </div>
        </div>
        */
    );
}

export default LoginForm;
