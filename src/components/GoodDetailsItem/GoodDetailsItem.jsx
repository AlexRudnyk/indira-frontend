import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  GoodDetailsContainer,
  GoodDetailsWrapper,
  GoodDetailsImg,
  GoodDetailsTitle,
  GoodDetailsText,
  GoodDetailsBtn,
} from './GoodDetailsItem.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { toast } from 'react-toastify';

export const GoodDetailsItem = () => {
  const { id } = useParams();
  const [good, setGood] = useState({});
  const dispatch = useDispatch();
  const { user, isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    async function getGood() {
      try {
        const { data } = await axios.get(
          `http://localhost:3030/api/goods/id/${id}`
        );
        setGood(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getGood();
  }, [id]);

  const handleAddCartClick = () => {
    if (isLoggedIn) {
      dispatch(addToCart(id));
    } else {
      toast.error('please login');
    }
  };

  return (
    good &&
    !isRefreshing && (
      <GoodDetailsContainer>
        <GoodDetailsWrapper>
          <div>
            <GoodDetailsImg src={good.photoURL} alt="good" />
          </div>
          <div>
            <GoodDetailsTitle>{good.title}</GoodDetailsTitle>
            <GoodDetailsText>{good.text}</GoodDetailsText>
            <GoodDetailsText>{good.description}</GoodDetailsText>
            <GoodDetailsText>Price: {good.price} UAH</GoodDetailsText>
            {user.role !== 'admin' && (
              <GoodDetailsBtn type="button" onClick={handleAddCartClick}>
                Add to Cart
              </GoodDetailsBtn>
            )}
          </div>
        </GoodDetailsWrapper>
      </GoodDetailsContainer>
    )
  );
};
