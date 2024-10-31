import { BaseContainer, BaseMenuLink } from 'UI';
import LandingNavbarStyled, {
  LandingLogoStyled,
  LandingMenuStyled,
  LandingNavbarInner,
} from './LandingNavbar.styled';

const LandingNavbar = () => {
  return (
    <LandingNavbarStyled>
      <BaseContainer>
        <LandingNavbarInner>
          <LandingLogoStyled>Logo.</LandingLogoStyled>

          <LandingMenuStyled>
            <BaseMenuLink label="About Us" href="/about-us" hover />
          </LandingMenuStyled>
        </LandingNavbarInner>
      </BaseContainer>
    </LandingNavbarStyled>
  );
};

export default LandingNavbar;
