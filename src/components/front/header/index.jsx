import React from "react";
import { StyledHeader, StyledI, StyledInput, StyledLink, StyledNav, StyledSignup, StyledUl } from "./styles";


const Header = () => {
    return (
        <StyledHeader>
            <div>
                <h1>
                    <a to="/" ><StyledLink>Loja Astro Dev</StyledLink></a>
                </h1>
            </div>
            <StyledNav>
                <StyledUl>
                    <StyledInput type="text" placeholder="Search"/>
                    <li><a to="/signup"><StyledSignup>Signup</StyledSignup></a></li>
                    <li><a to="/cart"></a><StyledI className="fas fa-cart-plus"></StyledI></li>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    )
}



export default Header;