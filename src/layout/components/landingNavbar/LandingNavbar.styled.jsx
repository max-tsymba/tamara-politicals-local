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
  position: 'relative',
}));

const LandingLogoStyled = styled(Box)(() => ({
  color: palette.secondary,
  fontSize: 24,
  fontWeight: 700,
}));

const LandingMenuStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}));

export { LandingNavbarInner, LandingLogoStyled, LandingMenuStyled };
export default LandingNavbarStyled;
