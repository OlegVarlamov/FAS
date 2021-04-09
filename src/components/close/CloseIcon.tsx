import React from "react";
import styled from "styled-components";

const StyledCloseIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

const CloseIcon: React.FC = () => {
  return (
    <StyledCloseIcon
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2" />
      <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2" />
    </StyledCloseIcon>
  );
};

export default CloseIcon;
