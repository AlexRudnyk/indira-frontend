import { GoodsSection } from 'components/GoodsSection';
import { HomePageWrapper, HomePageSection } from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomePageSection>
      <HomePageWrapper>
        <GoodsSection />
      </HomePageWrapper>
    </HomePageSection>
  );
};
