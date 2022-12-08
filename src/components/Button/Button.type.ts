import type { JSXElement } from "solid-js";

export type ButtonProps = {
	isDisabled?: boolean;
	children?: JSXElement;
	type?: 'submit' | 'reset';
	id?: string;
};
