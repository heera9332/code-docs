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


## Managing Shipping

### Shipping Classes

Definition: Shipping classes allow you to group similar types of products to apply specific shipping rules. They are particularly useful when some products have unique shipping requirements (e.g., bulky items, lightweight items, or fragile products).

Use Case:

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

Shipping Classes
Definition: Shipping classes allow you to group similar types of products to apply specific shipping rules. They are particularly useful when some products have unique shipping requirements (e.g., bulky items, lightweight items, or fragile products).

Use Case:

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

### Shipping Zones
Definition: Shipping zones define geographical regions where specific shipping methods and rates apply. Each zone contains regions (countries, states, or zip codes) and corresponding shipping methods.

Use Case:

Provide flat-rate shipping to customers in your city.
Offer free shipping for customers within a specific country.
Disable shipping to certain regions.
Example:

Shipping Zone: United States
Region: All US states.
Methods: Free Shipping, Flat Rate.
Shipping Zone: Europe
Region: Specific EU countries.
Methods: Flat Rate, Express Shipping.
How to Set Up Shipping Zones:

Go to WooCommerce > Settings > Shipping > Shipping Zones.
Add a new zone (e.g., "Local Area").
Specify the region (e.g., specific zip codes).
Add shipping methods for the zone (e.g., Flat Rate, Free Shipping).
