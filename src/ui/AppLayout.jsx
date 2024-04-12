import { Outlet  } from "react-router-dom";
import Header from "./Header"
import styled from "styled-components"
import Sidebar from "./Sidebar"

const StyledAppLayout = styled.div`
    display: grid;
    height: 100vh;
    
    grid-template-columns:20rem 1fr ;
    grid-template-rows:auto 1fr ;

`

const Main = styled.main`
    background-color: #f8f8f8;
    padding:4rem 4.8 rem 6.4rem ;
`

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <Sidebar />
            <Main>
            <Outlet/>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout
