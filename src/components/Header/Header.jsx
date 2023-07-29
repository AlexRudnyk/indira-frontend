import { UserNav } from 'components/UserNav';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import Mandala from 'images/mandala.png';
import {
  HeaderSection,
  Container,
  HeaderWrapper,
  NavWrapper,
  Logo,
  LogoImg,
} from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <Logo to="/">Indira</Logo>
          <NavWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</NavWrapper>
          <LogoImg src={Mandala} alt="mandala" />
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
