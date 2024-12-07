# WooCommerce

WooCommerce is a versatile WordPress plugin that transforms websites into fully functional e-commerce platforms, enabling the sale of products online. It leverages WordPress's custom post types to manage products, each with specific properties and attributes stored in MySQL database tables.

## WooCommerce Product Types

WooCommerce supports various product types to cater to different selling needs:

- Simple Product: A standalone item without variations.
- Variable Product: A product with multiple variations, each having distinct attributes, prices, and stock levels.
- Grouped Product: A collection of related products that can be purchased individually.

## Cart

The cart is where customers accumulate products they intend to purchase. It can contain multiple products and is also referred to as a basket or bucket.

## Order

An order is created when a customer completes the checkout process. Each order has a status indicating its current state:

- Pending Payment: Order received but awaiting payment.
- On Hold: Awaiting payment confirmation; stock is reduced but requires manual payment verification.
- Processing: Payment received, stock reduced; order is awaiting fulfillment.
- Completed: Order fulfilled and requires no further action.
- Failed: Payment failed or was declined; no payment received.
- Draft: Created when customers start the checkout process using the block version; visible only in the "Draft" sub-tab of the Orders overview page.
- Canceled: Order canceled by an admin or the customer; stock is returned to inventory.
- Refunded: Order fully refunded after payment.

For a visual representation of order status flow, refer to WooCommerce's Order Statuses Documentation.

## Payment Gateways

Payment gateways facilitate transactions between customers and the store. WooCommerce supports various types:

- Direct: Customers enter payment details directly on the checkout page; requires SSL certificates and may necessitate PCI compliance.
- Redirect (Form-Based): Customers are redirected to the payment processor's site to complete payment, then returned to the store.
- iFrame-Based: The payment system loads within an iframe on the store's site.
- Offline: Payments made outside the online system, such as bank transfers or checks.
