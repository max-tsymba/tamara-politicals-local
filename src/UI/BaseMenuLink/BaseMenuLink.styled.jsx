import { NavLink } from 'react-router-dom';
import { alpha, styled } from '@mui/material';
import palette from 'theme/palette';

const BaseMenuLinkStyled = styled(NavLink)(({ hover }) => ({
  position: 'relative',
  color: alpha(palette.secondary, 0.75),
  fontWeight: 500,
  fontSize: 15,
  transition: 'all 0.3s',

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 1px)',
    width: 0,
    right: 0,
    height: 2,
  },

  '&:hover': {
    color: palette.secondary,

    '&::before, &::after': {
      width: hover && '100%',
      left: 0,
    },
  },

  '&::before': {
    transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
    background: palette.secondary,
  },

  '&::after': {
    transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
    background: palette.secondary,
  },
}));

export default BaseMenuLinkStyled;
