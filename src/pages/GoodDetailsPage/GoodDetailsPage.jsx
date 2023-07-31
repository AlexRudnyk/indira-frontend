import { GoodDetailsItem } from 'components/GoodDetailsItem';
import { useAuth } from 'hooks';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodDetailsPageSection,
  GoodDetailsContainer,
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
      <GoodDetailsContainer>
        <GoodDetailsItem />
      </GoodDetailsContainer>
    </GoodDetailsPageSection>
  );
};
