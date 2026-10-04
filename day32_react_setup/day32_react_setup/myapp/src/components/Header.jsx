import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Navbar color="lilght" light expand="md" className="mb-4">
      <Container>
        <NavbarBrand tag={Link} to="/">
          MyApp
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            {auth.isAuthenticated && (
              <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                  <img src={auth.user.image} />
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={handleLogOut}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
