import { Field, Form } from 'formik';
import styled from 'styled-components';

export const AdminPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);
`;

export const AdminPageContainer = styled.div`
  width: 1280px;
  padding-top: 130px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const AdminPageWrapper = styled.div`
  display: flex;
`;

export const AdminPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-height: 550px;
  margin-right: 100px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const AdminPageInput = styled(Field)`
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const AdminPageTextArea = styled(AdminPageInput)`
  resize: none;
`;

export const AdminPageImgInput = styled.input`
  margin-bottom: 30px;
`;

export const AdminPageBtn = styled.button`
  width: 70px;
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
