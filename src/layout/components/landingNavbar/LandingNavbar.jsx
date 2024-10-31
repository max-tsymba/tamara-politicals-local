import { BaseContainer, BaseMenuLink } from 'UI';
import LandingNavbarStyled, {
  LandingLogoStyled,
  LandingNavbarInner,
} from './LandingNavbar.styled';

const LandingNavbar = () => {
  return (
    <LandingNavbarStyled>
      <BaseContainer>
        <LandingNavbarInner>
          <LandingLogoStyled>Logo.</LandingLogoStyled>
          <BaseMenuLink label="About Us" href="/about-us" />
        </LandingNavbarInner>
      </BaseContainer>
    </LandingNavbarStyled>
  );
};

export default LandingNavbar;
