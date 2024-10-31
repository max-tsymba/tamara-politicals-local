import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const LandingNavbarStyled = styled(Box)(() => ({
  backgroundColor: 'transparent',
  height: 70,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}));

const LandingNavbarInner = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const LandingLogoStyled = styled(Box)(() => ({
  color: palette.secondary,
  fontSize: 24,
  fontWeight: 700,
}));

export { LandingNavbarInner, LandingLogoStyled };
export default LandingNavbarStyled;
