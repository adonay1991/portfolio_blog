/**
 * @remarks
 * `CardProps` is an object with a bunch of properties, some of which are required and some of which
 * are optional.
 * `url` - The url of the article
 * `img` - The image to be displayed on the card.
 * `title` - The title of the card
 * `author` - The author of the article.
 * `footer` - The footer of the card.
 * `date` - The date the article was published
 * `description` - The description of the card.
 * `tags` - string[];
 */
export type CardProps = {
	url: string;
	img: string;
	title?: string;
	author?: string;
	footer?: string;
	date: string;
	description: string;
	tags: string[];
};
