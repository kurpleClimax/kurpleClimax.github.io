/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon, buttons } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import AttributeOptionsEdit from './edit';
import AttributeOptionsSave from './save';
import { shouldBlockifiedAddToCartWithOptionsBeRegistered } from '../../utils';
import './editor.scss';

if ( shouldBlockifiedAddToCartWithOptionsBeRegistered ) {
	registerBlockType( metadata, {
		edit: AttributeOptionsEdit,
		attributes: metadata.attributes,
		icon: {
			src: <Icon icon={ buttons } />,
		},
		save: AttributeOptionsSave,
	} );
}
