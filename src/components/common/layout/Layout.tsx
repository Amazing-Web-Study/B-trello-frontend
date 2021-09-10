import React from 'react';
import Header from "../Header/Header"
import styled from 'styled-components';

const Main = styled.main`
    height : 100%;
    margin-top: 2rem;
    background-color : #0079bf;
`

const Wrapper = styled.div`
    height : 100%;
`
function Layout(props: {
    children : React.ReactNode
}) {
    return(
        <Wrapper>
            <Header />
            <Main>
                {props.children}
            </Main>
        </Wrapper>
    )
}


/*
function Layout() {
    return (
        <div className="card">
            <div className="container">

            </div>
        </div>
    );
}
*/
export default Layout;
