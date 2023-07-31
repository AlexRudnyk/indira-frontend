import { GoodDetailsItem } from 'components/GoodDetailsItem';
import { useAuth } from 'hooks';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodDetailsPageSection,
  LoaderContainer,
} from './GoodDetailsPage.styled';

export const GoodDetailsPage = () => {
  const { isRefreshing } = useAuth();
  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <GoodDetailsPageSection>
      <GoodDetailsItem />
    </GoodDetailsPageSection>
  );
};
