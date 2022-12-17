import type { Component } from "solid-js";
import Navbar from '@components/Nav/Navbar';
import HamburguerNavbar from '@components/HamburguerNavbar/HamburguerNavbar';
import './header.css'

export const Header: Component = () => {
	return (
		<>
			<div class="header-desktop">
				<Navbar />
			</div>
			<div class="header-mobile">
				<HamburguerNavbar />
			</div>
		</>
	)
}

export default Header