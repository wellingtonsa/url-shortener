import styled from 'styled-components';

export const Container = styled.div<{ background: string, show: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 25px;
    z-index: 100;
    right: -370px;
    width: 350px;
    padding-bottom: 20px;
    min-height: 100px;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: -1px -4px 40px -9px rgba(117,105,117,0.99);
    animation: ${(props) => (props.show ? '2s show' : '2s hidden')};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    animation-fill-mode: forwards;
    
    * {
        color: #605c5c;
    }

    .type {
        background: ${(props) => props.background};
        width: 100%;
        height: 15px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    p {
        color: '#3C3C3C';
        font-size: 14px;
        margin: 10px 20px;
    }
    
    @keyframes show {
        0% {
            right: -370px;
        }
        100% {
            right: 20px;     
        } 
    }

    @keyframes hidden {
        0% {
            right: 20px;
        }
        100% {
            right: -370px;     
        } 
    }
`;
