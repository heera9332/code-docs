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

- **Pending Payment**: Order received but awaiting payment.
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

## Managing Shipping

### Shipping Classes

Definition: Shipping classes allow you to group similar types of products to apply specific shipping rules. They are particularly useful when some products have unique shipping requirements (e.g., bulky items, lightweight items, or fragile products).

**Use Case:**

Charge a higher shipping rate for large or heavy items.
Offer free shipping for lightweight or promotional items.

Example:

Shipping Class: Heavy Items
Products: Furniture, Appliances
Rate: $20 per item.
Shipping Class: Lightweight Items
Products: Books, Clothing
Rate: $5 per item.
How to Add Shipping Classes:

Go to WooCommerce > Settings > Shipping > Shipping Classes.
Add a new class (e.g., "Bulky Items").
Assign the shipping class to specific products under the product settings.

In WooCommerce, Shipping Classes and Shipping Zones are key features for managing shipping rates and areas. Here's an explanation of both:

**Shipping Classes**

Definition: Shipping classes allow you to group similar types of products to apply specific shipping rules. They are particularly useful when some products have unique shipping requirements (e.g., bulky items, lightweight items, or fragile products).

**Use Case:**

Charge a higher shipping rate for large or heavy items.
Offer free shipping for lightweight or promotional items.
Example:

- Shipping Class: Heavy Items
- Products: Furniture, Appliances
- Rate: $20 per item.
- Shipping Class: Lightweight Items
- Products: Books, Clothing
- Rate: $5 per item.

**How to Add Shipping Classes:**

Go to WooCommerce > Settings > Shipping > Shipping Classes.
Add a new class (e.g., "Bulky Items").
Assign the shipping class to specific products under the product settings.

### Shipping Zones

**Definition**: Shipping zones define geographical regions where specific shipping methods and rates apply. Each zone contains regions (countries, states, or zip codes) and corresponding shipping methods.

**Use Case:**

Provide flat-rate shipping to customers in your city.
Offer free shipping for customers within a specific country.
Disable shipping to certain regions.

Example:

**Shipping Zone:** United States
**Region:** All US states.
**Methods:** Free Shipping, Flat Rate.
**Shipping Zone:** Europe
**Region:** Specific EU countries.
**Methods:** Flat Rate, Express Shipping.
How to Set Up

**Shipping Zones:**

Go to `WooCommerce > Settings > Shipping > Shipping Zones.`
Add a new zone (e.g., "Local Area").
Specify the region (e.g., specific zip codes).
Add shipping methods for the zone (e.g., Flat Rate, Free Shipping).

## Woocommerce Programming Related Information

### Product Methods

These methods are used to interact with WooCommerce products.

```php
$product = wc_get_product( $product_id );
```

**Product Properties**

- **$product->get_name():** Gets the product name.
- **$product->get_price():** Gets the product price.
- **$product->get_regular_price():** Gets the regular price.
- **$product->get_sale_price():** Gets the sale price.
- **$product->get_sku():** Gets the product SKU.
- **$product->get_stock_quantity():** Gets the stock quantity.
- **$product->get_categories():** Gets product categories.
- **$product->get_image_id():** Gets the product's main image ID.
- **$product->get_permalink():** Gets the product URL.

**Product Stock**

- **$product->is_in_stock():** Checks if the product is in stock.
- **$product->get_stock_status():** Gets stock status.
- **$product->is_on_sale():** Checks if the product is on sale.

### Cart Methods

These methods allow manipulation and interaction with the WooCommerce cart.

**Access the Cart**

$cart = WC()->cart;: Access the cart object.

**Cart Operations**

$cart->add_to_cart( $product_id, $quantity = 1, $variation_id = 0, $variation = [], $cart_item_data = [] ): Adds a product to the cart.

- _$cart->remove_cart_item(_ $cart_item_key ): Removes an item from the cart.
- _$cart->empty_cart():_ Empties the cart.
- _$cart->get_cart_contents_count():_ Gets the total number of items in the cart.
- _$cart->get_cart():_ Retrieves all cart items as an array.

**Cart Item Properties**

- $cart_item['product_id']: The product ID of the item.
- $cart_item['quantity']: Quantity of the item in the cart.
- $cart_item['line_total']: Total price of the cart line item.

**Cart Totals**

- _$cart->get_cart_subtotal():_ Gets the cart subtotal.
- _$cart->get_total():_ Gets the total cart price.
- _$cart->get_shipping_total():_ Gets the shipping total.
- _$cart->get_taxes():_ Gets cart taxes.

## Order Methods

These methods are used to create, retrieve, and manage WooCommerce orders.

### Create and Retrieve Orders

$order = wc_create_order(): Creates a new order programmatically.
$order = wc_get_order( $order_id ): Retrieves an order object by ID.

**Order Properties**

- **$order->get_id():** Gets the order ID.
- **$order->get_order_number():** Gets the order number.
- **$order->get_status():** Gets the order status.
- **$order->get_total():** Gets the total amount of the order.
- **$order->get_items():** Retrieves all items in the order.
- **$order->get_billing_email():** Gets the billing email.
- **$order->get_billing_address_1():** Gets the billing address.
- **$order->get_shipping_address_1():** Gets the shipping address.

$order->add_product( $product, $quantity ): Adds a product to the order.
$order->remove_item( $item_id ): Removes an item from the order.

**Order Status**
$order->update_status( $status, $note = '', $manual = false ): Updates the order status.
$order->is_paid(): Checks if the order has been paid.

**Order Meta**
$order->get_meta( $key ): Retrieves a custom meta field for the order.
$order->update_meta_data( $key, $value ): Updates a custom meta field for the order.

### Additional Utility Methods

**Checkout**

WC()->checkout: Accesses the checkout object.
WC()->checkout()->process_checkout(): Processes a checkout programmatically.

**Session**

WC()->session: Accesses the WooCommerce session object.
WC()->session->set( $key, $value ): Sets session data.
WC()->session->get( $key ): Gets session data.

**Customer**

WC()->customer: Accesses the current customer object.
WC()->customer->get_billing_country(): Gets the customer's billing country.
WC()->customer->get_shipping_country(): Gets the customer's shipping country.

## WooCommerce Order Lifecycle

### Pending Payment (pending)

Description: This is the initial state when an order is created but payment has not yet been received.
Trigger: Happens when a customer clicks "Place Order" but does not complete the payment process.
Actions:
Awaiting customer payment.
Payment gateways can update the status automatically (e.g., to processing or failed).

### Failed (failed)

Description: Payment was attempted but failed.
Trigger: Occurs when a payment gateway reports that the payment could not be processed.

Actions:

The customer may retry the payment or place a new order.

### Processing (processing)

Description: Payment is successfully received, and the order is being prepared for shipment or fulfillment.
Trigger: Automatically set when payment is completed for non-virtual or non-downloadable products.
Actions:
Store admin begins order fulfillment (e.g., shipping the product or preparing it for pickup).
Additional extensions or manual updates may progress the order.

### On Hold (on-hold)

Description: The order is awaiting further action (e.g., manual payment confirmation or stock issues).
Trigger: Typically used when payment requires manual confirmation, such as bank transfers or checks.
Actions:
Admin verifies payment or resolves issues before moving the order to processing.
Completed (completed)

Description: The order has been fully processed, paid, and delivered to the customer.
Trigger: Manually set by the store admin or automatically updated by extensions after fulfillment.
Actions:
No further actions are required.
Customers can now view the "Completed" order in their account.

### Cancelled (cancelled)

Description: The order has been cancelled, either by the customer or by the system.
Trigger: Automatically occurs if the customer does not complete the payment within a defined timeframe, or the admin cancels the order manually.
Actions:
The order is no longer active, and no further processing is done.

### Refunded (refunded)

Description: The order payment has been refunded (either partially or fully).
Trigger: Set manually by the store admin or automatically by the payment gateway if it supports refunds.
Actions:
The customer receives the refunded amount.
The order status is updated accordingly.
Order Status Transitions

### Automatic Transitions

Orders often move between statuses based on actions by the customer or payment gateway.
Pending → Failed: Payment timeout or failed transaction.
Pending → Processing: Successful payment for physical products.
Pending → Completed: Successful payment for virtual/downloadable products.
Processing → Completed: After fulfillment by the admin or automated systems.

### Manual Transitions

Admins can update order statuses manually to reflect custom workflows:
On Hold → Processing: Once payment is verified manually.
Processing → Completed: When the order is shipped or delivered.
Customizing Order Lifecycle
WooCommerce provides hooks and filters to customize the order lifecycle:

### Custom Order Status:

Developers can create additional statuses using the register_post_status function and integrate them into the WooCommerce workflow.
Hooks:

woocommerce_order_status_changed: Triggered whenever an order's status changes.
woocommerce_order_status_pending_to_processing: Hook for actions when an order moves from pending to processing.
woocommerce_order_status_processing_to_completed: Hook for actions when an order moves from processing to completed.
Extensions:

Plugins like WooCommerce Subscriptions or WooCommerce Bookings may introduce new statuses (e.g., subscription_active or booking_pending).
Typical Order Lifecycle Example
Customer Action:

A customer places an order for physical goods and pays using PayPal.

### Pending Payment:

Order is created with a pending status.
The customer completes the payment.

### Processing:

WooCommerce changes the order status to processing after PayPal confirms payment.
Store admin receives a notification and starts packing the order.

### Completed:

The admin ships the order and manually marks it as completed.
The customer gets a notification that the order is complete.

### Refund (Optional):

If the customer requests a refund, the admin processes it, and the order status changes to refunded.
