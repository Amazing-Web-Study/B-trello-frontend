import React from 'react';
import Header from "../Header/Header"
import styled from 'styled-components';

const Main = styled.main`
    margin-top: 2rem;
    background-color : #0079bf;
`
function Layout(props: {
    children : React.ReactNode
}) {
    return(
        <div>
            <Header />
            <Main>
                {props.children}
            </Main>
        </div>
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
