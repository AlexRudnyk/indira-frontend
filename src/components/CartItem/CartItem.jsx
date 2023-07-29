import { useGoods } from 'hooks';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  CounterWrapper,
  CartItemLine,
  ChosenGoodWrapper,
  CartItemTitle,
  CartItemText,
  CartItemImg,
  CartItemQuantityBtn,
  CartItemQuantity,
  CartItemSum,
  CartItemDelBtn,
} from './CartItem.styled';

export const CartItem = ({ goodId, getTotalSum, getOrder }) => {
  const [good, setGood] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { goods } = useGoods();
  const { isRefreshing } = useAuth();

  const sum = good.price * quantity;

  useEffect(() => {
    const { _id, title, text, description, photoURL, price } = goods.find(
      item => item._id === goodId
    );
    setGood({ _id, title, text, description, photoURL, price });
    getTotalSum(sum);
    getOrder({ title, price, quantity });
  }, [getOrder, getTotalSum, goodId, goods, quantity, sum]);

  const handlePlusClick = () => {
    setQuantity(state => (state += 1));
  };

  const handleMinusClick = () => {
    setQuantity(state => (state -= 1));
  };

  const handleDeleteClick = () => {
    dispatch(deleteFromCart(goodId));
  };

  return (
    !isRefreshing && (
      <CartItemLine>
        <ChosenGoodWrapper>
          <div>
            <CartItemImg src={good.photoURL} alt="good in cart" width="100px" />
          </div>
          <div>
            <CartItemTitle>{good.title}</CartItemTitle>
            <CartItemText>{good.text}</CartItemText>
          </div>
        </ChosenGoodWrapper>
        <CounterWrapper>
          <CartItemQuantityBtn
            type="button"
            onClick={handleMinusClick}
            disabled={quantity <= 1}
          >
            -
          </CartItemQuantityBtn>
          <CartItemQuantity>{quantity}</CartItemQuantity>
          <CartItemQuantityBtn type="button" onClick={handlePlusClick}>
            +
          </CartItemQuantityBtn>
        </CounterWrapper>
        <CartItemSum>{sum} UAH</CartItemSum>
        <div>
          <CartItemDelBtn type="button" onClick={handleDeleteClick}>
            Delete
          </CartItemDelBtn>
        </div>
      </CartItemLine>
    )
  );
};
