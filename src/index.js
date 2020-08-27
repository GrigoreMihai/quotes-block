import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'random-quotes/random-quotes', {
	title: __( 'Random quotes card', 'random-quotes' ),
	icon: 'index-card',
	category: 'layout',

	edit() {
		return (
			<div>
				<blockquote class="random-quotes-blockquote"><p>“A new random quote will be displayed here for every visitor (this is an example)”
				</p><cite>Author name</cite></blockquote>
			</div>
		);
	}
} );
