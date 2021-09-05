import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    flex-direction: column;
    top: 0px;
    width: 100%;
    justify-content: center;
    height: auto;
    background-color : #026aa7;

`

const Title = styled.h1`
    font-size: 15px;
    color : white;
`

function Header() {
    return(
        <Container>
           <header>
                <Title>
                    Trello
                </Title>
            </header> 
        </Container>
        
    )
}

export default Header
