import React from "react";
import ReceiveStatusPage from "features/receiveStatus/ReceiveStatusPage";
import styled from "styled-components";
import "fonts/fonts.css";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: #e5e5e5;
  font-family: "Space Grotesk", sans-serif;
`;

const App: React.FC = () => (
  <StyledApp>
    <ReceiveStatusPage />
  </StyledApp>
);

export default App;
