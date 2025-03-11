/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, button } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AddToCartWithOptionsVariationSelectorEdit from './edit';
import AddToCartWithOptionsVariationSelectorSave from './save';
import { shouldBlockifiedAddToCartWithOptionsBeRegistered } from '../utils';
import './style.scss';
import './editor.scss';

if ( shouldBlockifiedAddToCartWithOptionsBeRegistered ) {
	registerBlockType( metadata, {
		edit: AddToCartWithOptionsVariationSelectorEdit,
		attributes: metadata.attributes,
		icon: {
			src: (
				<Icon
					icon={ button }
					className="wc-block-editor-components-block-icon"
				/>
			),
		},
		save: AddToCartWithOptionsVariationSelectorSave,
	} );
}
