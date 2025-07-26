# IP Addressing

IP Addressing refers to the method of identifying devices on a network using a unique numerical label called an IP address. It enables devices on a network to communicate with each other by providing a way to route data from the sender to the receiver.

An IP address is typically written in one of two formats:

**IPv4 (Internet Protocol Version 4):** This is the most widely used format and consists of four sets of numbers, each between 0 and 255, separated by periods (dots). For example, `192.168.1.1.`

**IPv6 (Internet Protocol Version 6):** With IPv4 running out of available addresses, IPv6 was introduced. It consists of eight groups of four hexadecimal digits, separated by colons. For example, `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.


## 2. IPv4 Addressing

**Structure of IPv4:** An IPv4 address is made up of 32 bits, which are divided into four octets (8 bits each). Each octet is written as a decimal number between 0 and 255.

For example: `192.168.0.1` (This represents 11000000.10101000.00000000.00000001 in binary.)

`Subnetting:` IPv4 addresses are often divided into subnets for better organization and more efficient IP management. A subnet mask determines which portion of the IP address refers to the network and which refers to the host.

Example: `255.255.255.0` means that the first three octets (24 bits) are for the network portion, and the last octet (8 bits) is for the host portion.

### Classes of IPv4:

**Class A:** `0.0.0.0` to `127.255.255.255` (Used for large networks, supports over 16 million hosts).

**Class B:** `128.0.0.0` to `191.255.255.255` (Supports up to 65,000 hosts).

**Class C:** `192.0.0.0` to `223.255.255.255` (Supports up to 254 hosts).

**Class D:** `224.0.0.0` to `239.255.255.255` (Reserved for multicast).

**Class E:** `240.0.0.0` to `255.255.255.255` (Reserved for experimental use).


## 3. IPv6 Addressing

IPv6 was introduced to overcome the limitations of IPv4, especially the limited number of addresses. IPv6 addresses are 128-bit long, allowing for a vastly larger number of devices to be assigned unique IP addresses.

**Structure of IPv6:** An IPv6 address is written as eight groups of four hexadecimal digits separated by colons (:).

Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

**Simplification:**

Leading zeros in any block can be omitted. For example, `2001:0db8:0000:0000:0000:0000:0000:0001` becomes `2001:db8::1`

Multiple consecutive blocks of zeros can be replaced by ::, but this can only be done once per address.


## 4. Private and Public IP Addresses

**Private IP Addresses:** These are reserved for use within private networks and cannot be routed on the public internet. The IP ranges for private networks in IPv4 are:

Class A: `10.0.0.0` - `10.255.255.255`

Class B: `172.16.0.0` - `172.31.255.255`

Class C: `192.168.0.0` - `192.168.255.255`

**Public IP Addresses:** These are assigned by Internet Service Providers (ISPs) and can be accessed over the internet. Public IP addresses are globally unique.

## 5. Dynamic vs. Static IP Addresses

**Dynamic IP Addresses:** These are temporarily assigned by a DHCP (Dynamic Host Configuration Protocol) server. When a device connects to the network, it is assigned an available IP address from a pool of addresses. These addresses can change over time.

**Static IP Addresses:** These are manually assigned and do not change over time. They are used for servers and devices that need a fixed address, such as web servers, email servers, and routers.

## 6. IP Addressing in Networking

IP addressing plays a crucial role in networking, facilitating the routing and delivery of data across networks:

**Routing:** Routers use IP addresses to determine the best path for forwarding packets of data from one device to another, across networks.

**Subnetting:** Subnetting divides a large network into smaller, manageable sub-networks, allowing for more efficient IP address allocation.

**Address Resolution Protocol (ARP):** ARP is used to map an IP address to a physical machine address (MAC address) within a local network.

## 7. Network Address Translation (NAT)

NAT is a method used by routers to translate private IP addresses to public IP addresses. This is commonly used in home and business networks where many devices share a single public IP address provided by the ISP.

## 8. IP Address Classes for Networks:

**Class A:** Suitable for very large networks with up to 16 million devices.

**Class B:** Suitable for medium-sized networks with up to 65,000 devices.

**Class C:** Suitable for small networks with up to 254 devices.

## 9. CIDR (Classless Inter-Domain Routing)

CIDR allows for more flexible and efficient allocation of IP addresses. Instead of using traditional classes, CIDR uses a slash notation (/) to specify the network size. For example:

`192.168.0.0/24 `means that the first 24 bits of the address are for the network, leaving the remaining 8 bits for the host portion.

