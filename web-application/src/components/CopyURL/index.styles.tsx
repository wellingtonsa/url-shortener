import styled from 'styled-components';

export const Container = styled.div<{ show: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 25px;
    z-index: 100;
    box-sizing: border-box;
    padding: 10px;
    right: -370px;
    width: 350px;
    min-height: 100px;
    border-radius: 4px;
    background: #001925;
    box-shadow: -1px -4px 40px -9px rgba(117,105,117,0.99);
    animation: ${(props) => (props.show ? '2s show' : '2s hidden')};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    animation-fill-mode: forwards;
    
    * {
        color: #f9f2f2;
    }

    span {
            font-weight: 800;
            margin: 5px 0;
    }

    .copy-box {
        display: flex;
        justify-content: center;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        input {
            display: flex;
            width: 250px;
            background: #00000025;
            box-sizing: border-box;
            padding: 15px 10px;
            color: #f9f2f2;
            font-size: 15px;
            font-weight: 600;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border: 0;
        }

        button {
            background: transparent;
            padding: 10px 5px;
            border: 1px solid #00000025;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            transition: 0.2s;
            :hover {
                background: #FAFAFA;
                color: #001925;
            }

        }
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
