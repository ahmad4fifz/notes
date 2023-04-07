---
title: VPN
layout: default
nav_order: 1
parent: Configuration
---

# VPN

## Running VPN connection as a Service 

1. Download the `.ovpn` file.
2. Copy `.ovpn` file into directory `/etc/openvpn/client`
3. Rename `.ovpn` file to suitable `.conf` naming. 
    - Example: `client01.ovpn` → `client01.conf`
4. Run the VPN config:

### Start the service

```
systemctl start openvpn-client@client01
```

### Check for Status 

```
systemctl status openvpn-client@client01.conf
```

### Stop the service

```
systemctl stop openvpn-client@client01.conf
```

### Enable start on boot 

```
systemctl enable openvpn-client@client01.conf
```