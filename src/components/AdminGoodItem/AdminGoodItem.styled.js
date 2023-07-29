import styled from 'styled-components';

export const AdminGoodItemLine = styled.li`
  width: 700px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const AdminGoodItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AdminGoodItemImg = styled.img`
  width: 100px;
  border-radius: 10px;
  margin-right: 30px;
`;

export const AdminGoodItemText = styled.p`
  width: 200px;
  margin-right: 30px;
`;

export const AdminGoodItemPrice = styled.p`
  margin-right: 30px;
`;

export const AdminGoodItemBtn = styled.button`
  width: 70px;
  padding: 10px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const AdminTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;
