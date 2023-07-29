import styled from 'styled-components';

export const GoodDetailsContainer = styled.div`
  padding-top: 130px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoodDetailsWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const GoodDetailsImg = styled.img`
  width: 400px;
  margin-right: 50px;
  border-radius: 20px;
`;

export const GoodDetailsTitle = styled.h1`
  margin-bottom: 30px;
`;

export const GoodDetailsText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const GoodDetailsBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;
