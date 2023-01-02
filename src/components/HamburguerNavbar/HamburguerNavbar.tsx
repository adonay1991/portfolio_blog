import { Component, createEffect, createSignal, onCleanup, Show } from "solid-js";
import './hamburger-icon.css'
import './hamburguer-navbar.css'

declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			clickOutside: () => any;
		}
	}
}

export const HamburguerNavbar: Component = () => {

	const [show, setShow] = createSignal(false);

	function clickOutside(el: HTMLElement, accessor: () => any) {
		const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
		document.body.addEventListener("click", onClick);
		onCleanup(() => document.body.removeEventListener("click", onClick));
	}

	return (
		<div class='hamburger-navbar'>
			<a href="/">
				<div class='monogram'> AR </div>
			</a>
			<Show when={show()}
				fallback={
					<button
						aria-label="main menu"
						aria-haspopup={true}
						aria-controls="navigation"
						class={`hamburger hamburger--squeeze ${show() ? 'is-active' : ''}`}
						onClick={() => setShow(true)}>
						<span class='hamburger-box'>
							<span
								class='hamburger-inner'
								title="menú"
							/>
						</span>
					</button>}
			>
				<button
					aria-label="main menu"
					aria-haspopup={true}
					aria-controls="navigation"
					class={`hamburger hamburger--squeeze ${show() ? 'is-active' : ''}`}
					onClick={() => setShow(false)}>
					<span class='hamburger-box'>
						<span
							class='hamburger-inner'
							title="menú"
						/>
					</span>
				</button>
				<nav
					use:clickOutside={() => setShow(false)}
					aria-label="main menu"
					data-show={show()}
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
			</Show>
		</div>
	)
}

export default HamburguerNavbar
