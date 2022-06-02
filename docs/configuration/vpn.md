# VPN

## Running VPN on Linux as a Service

1. Download the `.ovpn` file.
2. Copy `.ovpn` file into directory `/etc/openvpn/client`
3. Rename `.ovpn` file to suitable `.conf` naming. Example: `client01.ovpn` → `client01.conf`
4. Run the VPN config:

### Start the service

```bash
systemctl start openvpn-client@client01
```

### Check for Status

```bash
systemctl status openvpn-client@client01.conf
```

### Stop the service"

```bash
systemctl stop openvpn-client@client01.conf
```

### Enable start on boot

```bash
systemctl enable openvpn-client@client01.conf
```
