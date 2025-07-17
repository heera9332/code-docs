# TCP/IP Protocol Suite

The TCP/IP (Transmission Control Protocol / Internet Protocol) suite is the foundation of the modern internet. It is a set of communication protocols used to connect network devices and exchange data over the internet.

## Layered Architecture of TCP/IP

| TCP/IP Layer      | Corresponding OSI Layer(s)         | Example Protocols                  |
| ----------------- | ---------------------------------- | ---------------------------------- |
| 1. Application    | Application, Presentation, Session | HTTP, FTP, SMTP, DNS, SNMP, Telnet |
| 2. Transport      | Transport                          | TCP, UDP                           |
| 3. Internet       | Network                            | IP, ICMP, ARP, RARP                |
| 4. Network Access | Data Link + Physical               | Ethernet, Wi-Fi, PPP, Frame Relay  |

## Diagram: TCP/IP Protocol Stack

+---------------------------+
| Application Layer | ← Web, Email, File Transfer (HTTP, FTP, SMTP)
+---------------------------+
| Transport Layer | ← Reliable/Unreliable Data Delivery (TCP, UDP)
+---------------------------+
| Internet Layer | ← Routing and Addressing (IP, ICMP, ARP)
+---------------------------+
| Network Access Layer | ← Physical network access (Ethernet, Wi-Fi)
+---------------------------+
| Physical Medium | ← Cables, radio waves, fiber optics

🔍 Layer-wise Explanation

1. Application Layer

- Provides services to the user.
- Handles high-level protocols and data formatting.

**Examples:**

- HTTP – web pages
FTP – file transfer
- SMTP – email
- DNS – domain name resolution

## 2. Transport Layer

- Provides end-to-end communication.
- Handles data integrity, flow control, and error recovery.

**Protocols:**

- TCP (Transmission Control Protocol): Reliable, connection-oriented.
- UDP (User Datagram Protocol): Unreliable, connectionless (faster).

## 3. Internet Layer

- Handles logical addressing and routing of data packets.
- Core of internetworking.

**Protocols:**

- IP – delivers packets
- ICMP – error and diagnostic messages (used in ping)
- ARP – IP to MAC resolution
- RARP – MAC to IP resolution (obsolete)

## 4. Network Access Layer

- Manages hardware-level transmission.
- Converts data into frames or bits for the physical network.

**Examples:**

- Ethernet (wired)
- Wi-Fi (wireless)
- DSL, PPP, etc.

## Summary

- TCP/IP is a 4-layer model vs OSI's 7-layer model.
- Each layer serves the one above it and is served by the one below it.
- It is the backbone of all modern networking, including the Internet.
