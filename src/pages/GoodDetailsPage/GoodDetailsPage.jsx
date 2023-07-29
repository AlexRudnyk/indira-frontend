import { GoodDetailsItem } from 'components/GoodDetailsItem';
import { useAuth } from 'hooks';
import { GoodDetailsPageSection } from './GoodDetailsPage.styled';

export const GoodDetailsPage = () => {
  const { isRefreshing } = useAuth();
  return (
    !isRefreshing && (
      <GoodDetailsPageSection>
        <GoodDetailsItem />
      </GoodDetailsPageSection>
    )
  );
};
