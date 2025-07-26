# FTP

FTP (File Transfer Protocol) is a standard network protocol used to transfer files between a client and a server over a TCP/IP-based network such as the Internet.

## How FTP Works

**Ports Used:**

Command (control) connection: TCP port 21

Data transfer connection: TCP port 20 (active mode) or dynamic ports (passive mode)

**Modes:**

Active Mode: Server connects back to the client for data.

Passive Mode: Client initiates both control and data connections (commonly used to bypass firewalls/NAT).

**Types:**

Authenticated FTP: Requires a username and password.

Anonymous FTP: Allows users to log in using a generic account, often anonymous with an email as a password (used to distribute public files).



## (a) Why should there be limitations on anonymous FTP? What could an unscrupulous user do?

### Why Limit Anonymous FTP?

Anonymous FTP is convenient for distributing public files like software downloads or documentation without requiring user accounts. But unrestricted access is risky.

### ⚠️ Risks and Threats from Unscrupulous Users:

Potential Misuse	| 🧾 Explanatio
---
**Upload Malicious Files**	If upload is allowed, users could upload viruses, trojans, backdoors, or illegal content.

**Bandwidth Abuse**	Bots or attackers could download large files repeatedly, consuming server bandwidth and causing DoS (Denial of Service).

**Directory Traversal	Poorly** configured FTP servers might allow users to access sensitive directories (../../etc/passwd)

**Harvest Server Info**	Attackers can collect metadata, directory structure, and server configuration details.

**Staging Area for Attacks** Hackers might use your public FTP to host malicious payloads or coordinate attacks.

Credential Stuffing and Brute Force	Even though it’s anonymous, attackers might try to find weak admin credentials or use known exploits.

**Scripted Crawling and Indexing**	Bots could index your server content, even if you didn’t intend for public search engines to see it.

### Best Practices for Anonymous FTP:

- Read-only access only
- Restrict directory visibility (chroot jail)
- Rate limit or throttle downloads
- Log and monitor all access
- Disable upload (unless in a tightly controlled environment)

## Summary:

Anonymous FTP is useful, but should be carefully restricted. Without limitations, it can open your server to malware distribution, illegal content hosting, and resource abuse. Always audit and secure any public-facing FTP service.

Let me know if you want example configurations or a diagram showing FTP modes.

## (b) What is the size of an ARP packet when the protocol is IP and the hardware is Ethernet? What are the differences between ARP and RARP? 

ARP Packet Structure        (for Ethernet + IPv4)
--
Field	                    Size (bytes)
Hardware Type (HTYPE)	    2
Protocol Type (PTYPE)	    2
Hardware Size (HLEN)	    1
Protocol Size (PLEN)	    1
Operation (OP)	            2
Sender MAC Address	        6
Sender IP Address	        4
Target MAC Address	        6
Target IP Address	        4
Total	                    28 bytes

### So, the size of a standard ARP packet over Ethernet/IP is 28 bytes.

**Note:** This is just the ARP payload. In an Ethernet frame, it is wrapped in additional headers (14-byte Ethernet header, etc.), making the total Ethernet frame larger (~42 bytes or more with padding).

### ARP vs RARP (Reverse ARP)

---

| Feature             | ARP (Address Resolution Protocol)      | RARP (Reverse Address Resolution Protocol)      |
|---------------------|-----------------------------------------|--------------------------------------------------|
| Purpose             | Maps IP address → MAC address          | Maps MAC address → IP address                    |
| Used By             | Any device on a LAN                    | Diskless machines during boot                    |
| Common Use Case     | Sending packets to known IPs           | Getting IP when only MAC is known                |
| Broadcasts          | Yes, broadcasts to resolve IP to MAC   | Yes, broadcasts to get IP                        |
| Server Required?    | No                                      | Yes, needs a RARP server                         |
| Protocol Number     | 0x0806 (EtherType)                      | Also 0x8035 in Ethernet                          |
| Status              | Still widely used (IPv4 only)          | Obsolete – replaced by BOOTP/DHCP                |


## Summary

- ARP packet size for Ethernet + IP = 28 bytes
- ARP is used to find MAC addresses from IPs.
- RARP is the reverse: it helps diskless clients find their IP addresses from a known MAC (but is outdated and replaced by DHCP).
