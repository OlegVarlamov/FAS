import React from "react";
import styled from "styled-components";
import CloseIcon from "components/close/CloseIcon";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 30px;
  border-bottom: 1px solid #e4e4e4;
  height: 60px;
`;

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.006em;
`;

const Header: React.FC = () => (
  <StyledHeader>
    <StyledTitle>Receive status</StyledTitle>
    <CloseIcon />
  </StyledHeader>
);

export default Header;
