import { Field, Form } from 'formik';
import styled from 'styled-components';

export const LoginPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);
  height: 100vh;
`;

export const LoginPageContainer = styled.div`
  padding-top: 130px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginPageTitle = styled.h2`
  margin-bottom: 50px;
`;

export const LoginPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginPageInput = styled(Field)`
  width: 300px;
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const LoginPageBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
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

export const LoginFormWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;
