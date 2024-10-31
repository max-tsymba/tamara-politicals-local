import BaseMenuLinkStyled from './BaseMenuLink.styled';

const BaseMenuLink = ({ label, href, hover }) => {
  return (
    <BaseMenuLinkStyled to={href} hover={hover ? 1 : 0}>
      {label}
    </BaseMenuLinkStyled>
  );
};

export default BaseMenuLink;
