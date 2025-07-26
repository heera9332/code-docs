# RARP (Reverse Address Resolution Protocol)

RARP (Reverse Address Resolution Protocol) is a network protocol used to map a known MAC address to an IP address. It is essentially the reverse of the more commonly used ARP (Address Resolution Protocol), which maps an IP address to a MAC address.

RARP was used in the early days of networking when devices (like diskless workstations) didn't have a stored IP address but needed to know their IP address in order to communicate over a network. RARP allows these devices to request their IP address from a RARP server using only their MAC address.

## How RARP Works:

The Device (Client) Needs an IP Address:

A diskless workstation or device (without a local IP configuration) sends out a RARP request to the network.

This request is broadcast to all devices on the network, asking, "Who knows the IP address for this MAC address?"

## RARP Request:

The RARP request is sent using the MAC address of the requesting device, and it typically contains the device's MAC address.

The RARP request is broadcast, meaning all devices on the local network will receive it.

## RARP Server Responds:

The RARP server listens for these requests. When it receives a RARP request, it looks up the MAC address in its RARP table.

The server then replies with the corresponding IP address associated with that MAC address.

## Device Receives IP Address:

- The diskless workstation or device receives the RARP reply and configures its network interface with the assigned IP address.
- It can now communicate with other devices on the network using the IP address.

### Example of RARP Process:

- A diskless workstation with MAC address 00:11:22:33:44:55 needs an IP address.
- The workstation broadcasts a RARP request: "What is the IP address for MAC address 00:11:22:33:44:55?"
- The RARP server, which has the MAC-IP mapping stored in its RARP table, replies with an IP address (e.g., 192.168.1.10).
- The workstation assigns itself the IP address 192.168.1.10 and can now communicate on the network.

## RARP Packet Structure:

RARP packets consist of the following fields:

- **Sender MAC Address:** The MAC address of the device making the request.
- **Target MAC Address:** The MAC address of the device that will respond (usually set to FF:FF:FF:FF:FF:FF for broadcast).
- **Operation Code:** Specifies whether it's a request (1) or a reply (2).
- **Sender IP Address:** The IP address of the device sending the request (for a request, this is typically zero).
- **Target IP Address:** The IP address of the device receiving the request (for a reply, this is the IP address being requested).

## Limitations of RARP:

**Limited Functionality:** RARP is a very basic protocol and only works on local networks because it relies on a broadcast mechanism to discover the IP address. It does not work across routers or over wide-area networks.

**Lack of Dynamic Address Allocation:** RARP does not support dynamic IP address allocation (e.g., assigning IP addresses from a pool). It requires a static mapping between MAC addresses and IP addresses.

**Outdated:** RARP has been largely replaced by more advanced and flexible protocols like DHCP (Dynamic Host Configuration Protocol), which can dynamically allocate IP addresses, provide additional configuration information, and support a wider range of devices and network topologies.

## RARP vs. DHCP:

**RARP:** Can only map a MAC address to an IP address and was primarily used for diskless devices. It is now obsolete.

**DHCP:** A more advanced protocol that dynamically assigns IP addresses, and also provides additional configuration settings (like DNS servers, default gateways, and subnet masks). DHCP is widely used in modern networks to assign IP addresses to both wired and wireless devices.

## Function:

Maps MAC address → IP address

Used mainly by diskless machines (no storage) to get their IP address during boot.

**Example Scenario:**

- A diskless client knows its MAC address, but not its IP.
- It sends a RARP Request to a RARP server.
- The server responds with the appropriate IP address.

**Use Case:**

Booting devices with no preconfigured IP (now replaced by BOOTP/DHCP).