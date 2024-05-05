import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useCabins } from "../features/cabins/useCabins";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.3rem 1.6rem;
  border-right: 1px solid var(--color-gray-100);
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function Sidebar() {
  const { isLoading, erorr, cabins } = useCabins();

  console.log(cabins);
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
