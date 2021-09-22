import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
    width: 50%;
    height: 256px;
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
    background-color: #0079bf;
`;

const Title = styled.h2`
    position: absolute;
    left: 50%;
    top: calc(50% - 168px);
    transform: translate(-50%, -50%);
`

function JoinForm(history: any) {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [pw, setPw] = useState('')

    const changeId = (value: any) => {
        setId(value.target.value)
    }
    const changePw = (value: any) => {
        setPw(value.target.value)
    }
    const changeName = (value: any) => {
        setName(value.target.value)
    }
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/user/sign-up', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' //content type을 json 형식으로 보내주기 위함입니다.
            },
            body: JSON.stringify({
                id: id,
                name: name,
                pw: pw,
            })
        }).then((res: any) => {
            console.log(res)
            if(res.status === 201) {
                history.history.push('/login')
            }
        });
    }
    return(
        <div>
            <Title>Create a Trello Account</Title>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input id="name" name="name" placeholder="Name" value={name} onChange={changeName} />
                    <Input id="id" name="id" type="email" placeholder="email" value={id} onChange={changeId} />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={pw}
                        onChange={changePw}
                    />
                    <Button type="submit">Create New Account</Button>
                </form>
            </Container>  
        </div>
        
    );
}

export default JoinForm;
