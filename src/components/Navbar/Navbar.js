import React, { useState,useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavItemBtn
} from "./Navbar.element";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button,setButton]= useState(true);

  const handleClick = () => setClick(!click);

  const showButton =()=>{
      if(window.innerWidth <=960){
          setButton(false);
      }else{
          setButton(true);
      }
  };

  useEffect(() => {
      showButton();
  },[] );
      

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              ULTIMA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/products">products</NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fonTBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
