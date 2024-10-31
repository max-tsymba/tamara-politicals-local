import BaseContainerStyled from './BaseContainer.styled';

const BaseContainer = ({ children }) => {
  return <BaseContainerStyled>{children}</BaseContainerStyled>;
};

export default BaseContainer;
