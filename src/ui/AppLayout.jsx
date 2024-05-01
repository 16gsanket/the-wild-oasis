import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: #f8f8f8;
  padding: 1.5rem 3rem 6rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap:1.5rem ;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
