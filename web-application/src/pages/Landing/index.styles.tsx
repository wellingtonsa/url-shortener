import styled from 'styled-components';
import { ImagesPath } from 'constants/path';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height:500px;
  background-image:  url(${ImagesPath.BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    position: absolute;
    width: 180px;
    height: 120px;
    top: 2%;
    left: 4%;

    @media(max-width: 650px){
      top: 0.15%;
      left: 0.5%;
      width: 140px;
      height: 100px;
    }
  }

 a {
  position: absolute;
  top: 10%;
  right: 4%;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  border: 0;
  background: #f6435d;
  transition: filter 0.2s;
  padding: 10px 20px;

    :hover {
      filter:brightness(90%)
    }
  

    @media(max-width: 650px){
      top: 2%;
      left: 0.5%;
    }
 }

  .form {
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 48px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    span {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 80px;
    }
  }
`;


export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  * {
    color: #605c5c;
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 50px 0;
  }

  .links-top-5 {
    width: 50%;

    .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      width: 100%;
      border-bottom: 1px solid #fff0f2;
      padding: 0 10px;
      
      span {
        font-size: 20px;
      }

      a {
        font-size: 18px;
        text-decoration: none;
      }
    }

    h2 {
      text-align: center;
    }

    @media(max-width: 800px){
      width: 100%;
      padding:0 40px;
    }
  }

`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  span {
    display: flex;
    font-size: 16px;
    align-items: center;
    color: #605c5c;
  }
  img { 
      margin: 0 5px;
      width: 24px;
      height: 24px;
      cursor: pointer;
  }
`;
