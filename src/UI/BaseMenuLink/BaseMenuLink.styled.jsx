import { NavLink } from 'react-router-dom';
import { alpha, styled } from '@mui/material';
import palette from 'theme/palette';

const BaseMenuLinkStyled = styled(NavLink)(() => ({
  color: alpha(palette.secondary, 0.8),
  fontWeight: 500,
  fontSize: 15,

  '&:hover': {
    color: palette.secondary,
  },
}));

export default BaseMenuLinkStyled;
