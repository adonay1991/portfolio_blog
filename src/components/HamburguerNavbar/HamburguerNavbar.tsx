import { Component, createEffect, createSignal } from "solid-js";
import './hamburger-icon.css'
import './hamburguer-navbar.css'

export const HamburguerNavbar: Component = () => {
	const [isExpanded, setIsExpanded] = createSignal(false);

	createEffect(() => {
		function handleClick() {
			if (isExpanded())
				setIsExpanded(false);
		}
		document.addEventListener('click', handleClick, true);
		return () => document.removeEventListener('click', handleClick, true);
	}, [isExpanded()]);


	return (
		<div class='hamburger-navbar'>
			<a href="/">
				<div class='monogram'> AR </div>
			</a>
			<button
				aria-label="main menu"
				aria-haspopup={true}
				aria-controls="navigation"
				class={`hamburger hamburger--squeeze ${isExpanded() ? 'is-active' : ''}`}
				onClick={() => setIsExpanded(!isExpanded())}>
				<span class='hamburger-box'>
					<span
						class='hamburger-inner'
						title="menú"
					/>
				</span>
			</button>
			<nav
				aria-label="main menu"
				data-show={isExpanded()}
				class='hamburger-navbar__menu'>
				<ul role="menu" class="hamburger-navbar__list">
					<li role="presentation" class='hamburger-navbar__item'>
						<section class='hamburger-navbar__title-section'>
							<a href="/projects" role="menuitem" class='hamburger-link'>Portfolio</a>
						</section>
					</li>
					<li role="presentation" class='hamburger-navbar__item'>
						<section class='hamburger-navbar__title-section'>
							<a href="/about" role="menuitem" class='hamburger-link'>About me</a>
						</section>
					</li>
					<li role="presentation" class='hamburger-navbar__item'>
						<section class='hamburger-navbar__title-section'>
							<a href="/blog" role="menuitem" class='hamburger-link'>Blog</a>
						</section>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default HamburguerNavbar
