import React from 'react';


const Layout = (props: {
    children : React.ReactNode
}) => {
    return(
        <div>
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
