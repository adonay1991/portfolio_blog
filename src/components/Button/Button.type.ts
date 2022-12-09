import type { JSXElement } from "solid-js";

/**
 * `ButtonProps` is an object that has an optional isDisabled property of type boolean, an optional
 * children property of type JSXElement, an optional type property of type 'submit' | 'reset', and an
 * optional id property of type string.
 * `isDisabled` - A boolean that determines whether the button is disabled or not.
 * `children` - The content of the button.
 * `type` - The type of button.
 * `id` - The id of the button.
 */
export type ButtonProps = {
	isDisabled?: boolean;
	children?: JSXElement;
	type?: 'submit' | 'reset';
	id?: string;
};
