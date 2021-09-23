import React, {useState} from 'react';
import styled from "styled-components";
import './LoginForm.css';
import {Link} from "react-router-dom";


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

function LoginForm(history:any) {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const changeId = (value: any) => {
        setId(value.target.value)
    }
    const changePw = (value: any) => {
        setPw(value.target.value)
    }
    
    //submit event handler
    const handleSubmit = (e: any) => {
        e.preventDefault() // submit 함수 실행시 페이지가 새로고침 되는걸 막기 위한 코드
        fetch('http://localhost:8000/api/user/sign-in', {
            credentials: 'include', // 동일 도메인 에서만 전송가능한 쿠키를 다른 도메인도 허용해줍니다
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' //content type을 json 형식으로 보내주기 위함입니다.
            },
            body: JSON.stringify({
                id: id,
                pw: pw,
            })
        }).then((res: any) => {
            if(res.status === 201) {
                history.history.push('/')
            }
        });
    }

    return (
        <div>
            <Logo className ="trello-logo" src="/img/trello-logo-blue.png" />
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input
                        id="id"
                        name="id"
                        type="text"
                        onChange={changeId}
                        value={id}
                        placeholder="Enter email" />
                    <Input
                        id="password"
                        name="pw"
                        type="password"
                        onChange={changePw}
                        value={pw}
                        placeholder="Enter password"
                    />
                    아이디가 없으신가요? <Link to='/register'>회원가입</Link>
                    <Button type="submit">Login</Button>
                </form>
            </Container>

        </div>
            

    );
}

export default LoginForm;
