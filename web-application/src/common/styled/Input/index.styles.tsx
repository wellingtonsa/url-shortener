import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  border-radius: 4px;

  input {
      width: 80%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;  
      border: 0;
      font-size: 16px;
      padding-left: 20px;
      color: #605c5c;
  }

  button {
      width: 20%;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 0;
      background: #f6435d;
      transition: filter 0.2s;

      :hover {
        filter:brightness(90%)
      }
  }
`;
