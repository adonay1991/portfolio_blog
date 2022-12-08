import { Component, mergeProps } from "solid-js";
import type { ButtonProps } from './Button.type'
import './button.css'

export const Button: Component<ButtonProps> = (userProps: ButtonProps) => {

	const props = mergeProps({
		isDisabled: false,
		id: ''
	}, userProps)

	return (
		<button
			class='button'
			disabled={props.isDisabled}
			id={props.id ? props.id : ''}
		>
			{props.children}
		</button>
	)
}

export default Button