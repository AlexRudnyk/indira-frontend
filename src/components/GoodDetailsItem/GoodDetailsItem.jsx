import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodDetailsContainer,
  GoodDetailsWrapper,
  GoodDetailsImgContainer,
  GoodDetailsImg,
  GoodDetailsTitle,
  GoodDetailsText,
  GoodDetailsBtn,
  LoaderContainer,
} from './GoodDetailsItem.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { toast } from 'react-toastify';

export const GoodDetailsItem = () => {
  const { id } = useParams();
  const [good, setGood] = useState({});
  const [status, setStatus] = useState('IDLE');
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    async function getGood() {
      setStatus('PENDING');
      try {
        const { data } = await axios.get(
          `https://indira-backend.vercel.app/api/goods/id/${id}`
        );
        setGood(data);
        setStatus('FULFILLED');
      } catch (error) {
        console.log(error.message);
        setStatus('REJECTED');
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

  return status === 'PENDING' ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    good && status === 'FULFILLED' && (
      <GoodDetailsContainer>
        <GoodDetailsWrapper>
          <GoodDetailsImgContainer>
            <GoodDetailsImg src={good.photoURL} alt="good" />
          </GoodDetailsImgContainer>
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
