import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    justify-content: center;
    height: auto;
    background-color : skyblue;

`

const Title = styled.h1`
    font-size: 30px;
    color : white;
`

function Header() {
    return(
        <header>
            <Container>
                <Title>
                    Todo-List
                </Title>
            </Container>
        </header>
    )
}

export default Header
