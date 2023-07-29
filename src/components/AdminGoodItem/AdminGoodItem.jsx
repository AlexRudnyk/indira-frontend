import { useDispatch } from 'react-redux';

import {
  AdminGoodItemWrapper,
  AdminGoodItemImg,
  AdminGoodItemLine,
  AdminGoodItemText,
  AdminGoodItemPrice,
  AdminGoodItemBtn,
  AdminTextWrapper,
} from './AdminGoodItem.styled';
import { deleteGood, editGood } from 'redux/goods/operations';
import { useState } from 'react';
import { ModalEditGood } from 'components/ModalEditGood';

export const AdminGoodItem = ({ good }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditGoodClick = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditModalSubmit = values => {
    dispatch(editGood(values));
  };

  const handleDeleteGoodClick = () => {
    dispatch(deleteGood(good._id));
  };

  return (
    <AdminGoodItemLine>
      <AdminGoodItemWrapper>
        <AdminGoodItemImg src={good.photoURL} alt="good" />
        <AdminTextWrapper>
          <AdminGoodItemText>{good.title}</AdminGoodItemText>
          <AdminGoodItemPrice>{good.price} UAH</AdminGoodItemPrice>
        </AdminTextWrapper>
        <AdminGoodItemBtn type="button" onClick={handleEditGoodClick}>
          Edit
        </AdminGoodItemBtn>
        <AdminGoodItemBtn type="button" onClick={handleDeleteGoodClick}>
          Delete
        </AdminGoodItemBtn>
        {isEditModalOpen && (
          <ModalEditGood
            onClose={handleEditModalClose}
            onSubmit={handleEditModalSubmit}
            good={good}
          />
        )}
      </AdminGoodItemWrapper>
    </AdminGoodItemLine>
  );
};
