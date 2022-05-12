import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		 <NavMenu> 
		<NavLink to='/home' >
			Home
		</NavLink>
		<NavLink to='/About' >
			About
		</NavLink>
		<NavLink to='/Contact' >
			Contact Us
		</NavLink>
		<NavLink to='/Data' >
			Data
		</NavLink>
		<NavLink to='/register' >
			Register
		</NavLink>
		<NavLink to='/test' >
			Test
		</NavLink>
		 </NavMenu> 
		<NavBtn>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn> 
	</Nav>
	</>
);
};

export default Navbar;