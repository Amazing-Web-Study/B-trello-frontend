import React from 'react';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


function Layout(props: {
    children : React.ReactNode
}) {
    return(
        <div>
            <Header />
            <main>
                {props.children}
            </main>
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
