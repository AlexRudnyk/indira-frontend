import styled from 'styled-components';

export const CartPageSection = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom right, #b36c40, white);
`;

export const CartPageContainer = styled.div`
  padding-top: 130px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const CartPageTitle = styled.h3`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

export const TotalSumText = styled.p`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const MakeOrderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderBtn = styled.button`
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

export const TotalSumSpan = styled.span`
  display: block;
  font-size: 24px;
  width: 60px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

export const EmptyCartMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const EmptyCartMessage = styled.p`
  font-size: 26px;
`;
