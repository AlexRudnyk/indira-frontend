import {
  CommentListItem,
  CommentListItemName,
  CommentListItemText,
  CommentListItemdate,
} from './CommentItem.styled';

export const CommentItem = ({ comment }) => {
  const date = new Date(comment.createdAt).toLocaleDateString();

  return (
    <CommentListItem>
      <CommentListItemName>{comment.userName}</CommentListItemName>
      <CommentListItemText>{comment.text}</CommentListItemText>
      <CommentListItemdate>{date}</CommentListItemdate>
    </CommentListItem>
  );
};
