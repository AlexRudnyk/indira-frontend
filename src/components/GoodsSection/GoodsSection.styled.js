import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoodsSectionContainer = styled.section`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const GoodsItem = styled.li`
  position: relative;
  border-radius: 20px;
  flex-basis: calc((100% - 2 * 30px) / 3);
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const GoodsItemLink = styled(Link)`
  color: inherit;
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #b36c40, white);
`;
