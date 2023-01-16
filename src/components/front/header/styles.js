import styled from "styled-components";



export const StyledHeader = styled.header`
position: sticky;
top: 0;
height: 50px;
min-height: 60px;
width: 90vw;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
background: #141414;
`
export const StyledLink = styled.p`
text-transform: uppercase;
color: white;
padding-left: 40px;
`
export const StyledNav = styled.nav`
display: flex;
`

export const StyledUl = styled.ul`
display: flex;
list-style: none;
font-size: 18px;
color: white;
gap: 20px;
margin-right: 20px;
align-items: center;

`
export const StyledSignup = styled.p`
text-transform: uppercase;
color: white;
:hover {
    color: #fffc3c;
}
`

export const StyledInput = styled.input`
font-size: 15px;
height: 22px;
border: 0;
border-radius: 5px;
`

export const StyledI = styled.i`
:hover {
    color: #fffc3c;
}
`