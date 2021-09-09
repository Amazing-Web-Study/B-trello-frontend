import React from 'react';
import styled from "styled-components";
import './LoginForm.css';


const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
    width: 50%;
    height: 216px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
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

const Button = styled.button`
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
    top: calc(50% - 158px);
    transform: translate(-50%, -50%);
`

function LoginForm() {
    
    //submit event handler
    const handleSubmit = () => {
        fetch('http://localhost:8000/api/user/sign-in', {
            method: "POST",
            body: JSON.stringify({
                id: "",
                password: "",
            })
        }).then(res => console.log(res));
    }

    return (
        <div>
            <Logo className ="trello-logo" src="/img/trello-logo-blue.png" />
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input id="id" name="id" type="email" placeholder="Enter email" />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                    />
                    <Button type="submit">Login</Button>
                    
                </form>
            </Container>

        </div>
            

    );
}

export default LoginForm;
