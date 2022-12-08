import { Component, mergeProps } from "solid-js";
import type { CardProps } from "./CardPreview.types";
import './cardpreview.css'

export const CardPreview: Component<CardProps> = (userProps: CardProps) => {

	const props = mergeProps(userProps)

	return (
		<div class='card-blog mb5'>
			<div class='titleCard' style={`background-image:url(${props.img})`}>
				<h1 class='title-blog'>{props.title}</h1>
			</div>
			<div class='pa3'>
				<p class='desc mt0 mb2'>{props.description}</p>
				<span>{props.date}</span>
				<div class='tags'>
					Tagged:
					{props.tags.map((tag: string) => (
						<div class='tag'>
							{tag}
						</div>
					))}
				</div>
				<a class='link-blog' href={props.url}>
					<span class='linkInner'>
						View
					</span>
				</a>
			</div>
		</div>
	)
}

export default CardPreview
