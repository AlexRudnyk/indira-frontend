import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const CartItemLine = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 5px;
  background-color: #fff;

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const ChosenGoodWrapper = styled.div`
  display: flex;
  width: 700px;
  margin-right: 50px;
`;

export const CartItemTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CartItemText = styled.p`
  margin-bottom: 10px;
`;

export const CartItemImg = styled.img`
  width: 100px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const CartItemQuantityBtn = styled.button`
  width: 30px;
  padding: 5px;
  cursor: pointer;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  text-align: center;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartItemQuantity = styled.div`
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

export const CartItemSum = styled.div`
  width: 100px;
  margin-right: 20px;
  text-align: center;
`;

export const CartItemDelBtn = styled.button`
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
