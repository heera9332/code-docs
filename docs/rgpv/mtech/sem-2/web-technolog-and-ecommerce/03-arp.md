# Address Resolution Protocol

ARP (Address Resolution Protocol) is a network protocol used to map a known IP address to a MAC address (Media Access Control address) on a local network. It plays a crucial role in Ethernet networks where devices communicate over a Layer 2 (Data Link) network using MAC addresses, while IP addresses are used for Layer 3 (Network) communication.

## How ARP Works:

When a device wants to communicate with another device on a local network, it needs to know the MAC address of the destination device. If the sending device only knows the IP address of the destination, it will use ARP to find out the corresponding MAC address.

### Request Phase:

- The device (let’s call it Host A) sends a broadcast ARP request packet to all devices on the local network.

- The ARP request contains the IP address of the device Host A is trying to communicate with (let’s call this Host B).

- The ARP request is broadcast because Host A does not yet know the MAC address associated with the IP address.

## Response Phase:

- Host B, upon receiving the ARP request, checks if the IP address in the request matches its own IP address.

- If the IP addresses match, Host B sends an ARP reply directly back to Host A. The ARP reply contains the MAC address of Host B.

**Storing the Mapping:**

- Host A receives the ARP reply and now knows the MAC address associated with Host B’s IP address.

This mapping between the IP address and the MAC address is stored in a local cache, called the ARP cache or ARP table. This allows Host A to send future data packets to Host B directly, using the MAC address.

## Communication:

Host A can now use Host B’s MAC address to send Ethernet frames to Host B over the local network.

## ARP Packet Structure:

An ARP packet typically consists of the following fields:

**Hardware Type:** Specifies the hardware type (Ethernet is commonly used).

**Protocol Type:** Specifies the protocol being used (usually IPv4).

**Hardware Address Length:** Length of the MAC address (6 bytes for Ethernet).

**Protocol Address Length:** Length of the IP address (4 bytes for IPv4).

**Operation:** Specifies whether it's a request (1) or a reply (2).

**Sender MAC Address:** The MAC address of the device sending the ARP request or reply.

**Sender IP Address:** The IP address of the device sending the ARP request or reply.

**Target MAC Address:** The MAC address of the device being queried or responding (in a request, it's set to 0).

**Target IP Address:** The IP address of the device being queried or responding.

## ARP Caching:

After a successful ARP request/response, devices store the IP-to-MAC mapping in their ARP cache for a period of time (typically 2 to 4 hours). This avoids the need to repeatedly send ARP requests for the same IP address.

ARP Cache Example:
Here’s an example of an ARP cache entry on a device:

IP Address	MAC Address
192.168.1.10	00:14:22:01:23:45
192.168.1.20	00:24:68:01:54:78

In this table, 192.168.1.10 has the MAC address 00:14:22:01:23:45.

## Types of ARP:

### ARP Request:

Sent to all devices on a local network (broadcast).

Contains an IP address, and the sender wants to know the corresponding MAC address.

### ARP Reply:

Sent directly to the requesting device (unicast).

Contains the MAC address for the IP address queried in the ARP request.

### Gratuitous ARP:

This is an ARP request that a device sends to announce or update its IP-MAC mapping on the local network.

This can be used when a device changes its IP address or when it joins the network for the first time.

It can also be used to prevent IP address conflicts by checking if another device is using the same IP.

## ARP Cache Poisoning (ARP Spoofing/ARP Spoofing Attack):

ARP is a stateless protocol, which means it does not authenticate the source of the ARP request or reply. This makes ARP susceptible to attacks like ARP spoofing or ARP poisoning, where an attacker sends malicious ARP replies to corrupt the ARP cache.

In an ARP spoofing attack:

An attacker can send fake ARP replies to a device, associating their own MAC address with another device’s IP address.

This can allow the attacker to intercept, alter, or redirect network traffic, potentially leading to Man-in-the-Middle (MITM) attacks.

## Preventing ARP Spoofing:

Static ARP Entries: You can manually assign IP-MAC mappings in the ARP table, making it resistant to ARP spoofing, though it’s impractical for large networks.

ARP Inspection: Dynamic ARP Inspection (DAI) on network switches can help protect against ARP spoofing attacks by ensuring only legitimate ARP packets are forwarded.

VPNs and Encryption: By using encryption (like in SSL/TLS or IPsec), the data can still be secured even if ARP spoofing occurs.

