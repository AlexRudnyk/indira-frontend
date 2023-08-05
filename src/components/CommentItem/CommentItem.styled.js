import styled from 'styled-components';

export const CommentListItem = styled.li`
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const CommentListItemName = styled.p`
  margin-bottom: 20px;
  color: grey;
`;

export const CommentListItemText = styled.p`
  margin-bottom: 10px;
`;

export const CommentListItemdate = styled.p`
  text-align: end;
  color: lightgrey;
`;
