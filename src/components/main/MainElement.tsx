import { is_visible } from "./MainEvent";
import styled from 'styled-components';

const AddCardPanelStyle = styled.div`
    display : none;
`

// 카드 div 열기 버튼
export const OpenCardPanelBtn = ({ listId }: any) => {
    const element = document.getElementById(listId);
    return (
        <a
            key={listId}
            onClick={() => {
                is_visible(element);
            }}>
            Add a Card
        </a>
    )
}

// 카드 추가
export const AddCard = ({ listId }: any, { content }: any) => {
    return (
        <a
            key={listId}
            onClick={() => {

            }
            }>
            Add card
        </a>
    )
}

// 카드 textarea
export const CardPanel = ({ list }: any) => {
    return (
        <AddCardPanelStyle id={list._id}>
            <form>
                <textarea id={"content_" + list._id}></textarea>
                <AddCard></AddCard>
            </form>
        </AddCardPanelStyle>
    )
}
