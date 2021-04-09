import React from "react";
import styled from "styled-components";

interface Props {
  isVisible: number;
}

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 30px;
  color: #2550e5;
  background: #f6f6f6;
  border-radius: 6px;
  width: 126px;
  height: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
`;

const RefundButton: ({ isVisible }: Props) => JSX.Element | null = ({
  isVisible,
}: Props) =>
  isVisible ? <StyledButton type="button">Request Refund</StyledButton> : null;

export default RefundButton;
