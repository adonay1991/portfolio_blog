import { Component, mergeProps } from "solid-js";
import type { BlogProps } from "./BlogPreview.types";
import './blogreview.css'

export const BlogPreview: Component<BlogProps> = (userProps: BlogProps) => {

	const props = mergeProps(userProps)

	return (
		<div class={'card'}>
			<div class={'titleCard'} style={`background-image:url(${props.img})`}>
				<h1 class={'title'}>{props.title}</h1>
			</div>
			<div class={'pa3'}>
				<p class={'desc mt0 mb2'}>{props.description}</p>
				<span>{props.date}</span>
				<div class={'tags'}>
					Tagged:
					{props.tags.map((tag: any) => (
						<div class={'tag'}>
							{tag}
						</div>
					))}
				</div>
				<a class={'link'} href={props.url}>
					<span class={'linkInner'}>
						View
					</span>
				</a>
			</div>
		</div>
	)
}

export default BlogPreview
