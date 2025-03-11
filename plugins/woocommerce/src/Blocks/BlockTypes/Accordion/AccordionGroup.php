<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes\Accordion;

use Automattic\WooCommerce\Blocks\BlockTypes\AbstractBlock;

/**
 * AccordionGroup class.
 */
class AccordionGroup extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'accordion-group';

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		if ( ! $content ) {
			return $content;
		}

		wp_enqueue_script_module( $this->get_full_block_name() );

		$p = new \WP_HTML_Tag_Processor( $content );

		if ( $p->next_tag( array( 'class_name' => 'wp-block-woocommerce-accordion-group' ) ) ) {
			$interactivity_context = array(
				'autoclose' => $attributes['autoclose'],
				'isOpen'    => array(),
			);
			$p->set_attribute( 'data-wp-interactive', 'woocommerce/accordion' );
			$p->set_attribute( 'data-wp-context', wp_json_encode( $interactivity_context, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ) );

			// Only modify content if directives have been set.
			$content = $p->get_updated_html();
		}

		return $content;
	}

	/**
	 * Disable the frontend script for this block type, it's built with script modules.
	 *
	 * @param string $key Data to get, or default to everything.
	 * @return null
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}
}
