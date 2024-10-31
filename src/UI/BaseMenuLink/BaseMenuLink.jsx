import BaseMenuLinkStyled from './BaseMenuLink.styled';

const BaseMenuLink = ({ label, href }) => {
  return <BaseMenuLinkStyled to={href}>{label}</BaseMenuLinkStyled>;
};

export default BaseMenuLink;
