import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: var(--color-grey-);
    padding:1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-gray-100);
`

function Header() {
    return (
        <StyledHeader>
            <p>I am a header</p>
        </StyledHeader>
    )
}

export default Header