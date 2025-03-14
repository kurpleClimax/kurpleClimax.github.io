/**
 * External dependencies
 */
import { CHECKOUT_URL } from '@woocommerce/block-settings';
import Button from '@woocommerce/base-components/button';
import clsx from 'clsx';
import { useStyleProps } from '@woocommerce/base-hooks';
import { useCartEventsContext } from '@woocommerce/base-context';
import { isErrorResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { defaultCheckoutButtonLabel } from './constants';
import { getVariant } from '../utils';

type MiniCartCheckoutButtonBlockProps = {
	checkoutButtonLabel?: string;
	className?: string;
	style?: string;
};

const Block = ( {
	className,
	checkoutButtonLabel,
	style,
}: MiniCartCheckoutButtonBlockProps ): JSX.Element | null => {
	const styleProps = useStyleProps( { style } );
	const { dispatchOnProceedToCheckout } = useCartEventsContext();

	if ( ! CHECKOUT_URL ) {
		return null;
	}

	return (
		<Button
			className={ clsx(
				className,
				styleProps.className,
				'wc-block-mini-cart__footer-checkout'
			) }
			variant={ getVariant( className, 'contained' ) }
			style={ styleProps.style }
			href={ CHECKOUT_URL }
			onClick={ ( e ) => {
				dispatchOnProceedToCheckout().then( ( observerResponses ) => {
					if ( observerResponses.some( isErrorResponse ) ) {
						e.preventDefault();
					}
				} );
			} }
		>
			{ checkoutButtonLabel || defaultCheckoutButtonLabel }
		</Button>
	);
};

export default Block;
