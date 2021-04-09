import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "components/header/Header";
import Status from "components/status/Status";
import Address from "components/address/Address";
import Details from "components/details/Details";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Spinner from "components/spinner/Spinner";
import { getOrder } from "./receiveStatusSlice";

const StyledBodyContainer = styled.div`
  max-width: 758px;
  width: 100%;
  min-height: 694px;
  height: auto;
  border-radius: 12px;
  background: #fff;
`;
const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 563px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReceiveStatusPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrder(767));
    const timer = setInterval(() => dispatch(getOrder(767)), 10000);
    return () => clearInterval(timer);
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("order", order);
  }, [order]);

  return (
    <StyledBodyContainer>
      <Header />
      {!order ? (
        <StyledSpinnerContainer>
          <Spinner />
        </StyledSpinnerContainer>
      ) : (
        <>
          <Status />
          <Address />
          <Details />
        </>
      )}
    </StyledBodyContainer>
  );
};

export default ReceiveStatusPage;
