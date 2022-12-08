import type { Component } from "solid-js";
import './footer.css'

export const Footer: Component = () => {
	return (
		<footer class={'footer'}>
			&copy; {new Date().getFullYear()} Adonay Rodriguez
			<small class={'byline'}>🚀 Built by Astro</small>
		</footer>
	)
}

export default Footer