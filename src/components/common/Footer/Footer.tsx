import styled from 'styled-components';

const Container = styled.div`
    background-color: #0079bf;
    width: 100%;
    height: 100%;
`


function Footer() {
    return(
        <Container>
            <footer>
                <h2>This is Footer</h2>
            </footer>
        </Container>
        
    )
}
export default Footer;
