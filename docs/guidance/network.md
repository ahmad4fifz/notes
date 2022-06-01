# Network

## Disable IPv6

1. Add this in `/etc/sysctl.conf`:

   ```
   net.ipv6.conf.all.disable_ipv6 = 1
   net.ipv6.conf.default.disable_ipv6 = 1
   net.ipv6.conf.lo.disable_ipv6 = 1*
   ```

2. Save and exit. Run `sysctl -p` to update.

## Find duplicate IPs in network

=== "Windows"

    ```
    arp -a [suspected duplicate IP]
    ```

=== "Linux / MacOS"

    ```bash
    arp [suspected duplicate IP]
    ```

## Set static IP

1. Add this in `/etc/netplan/<interface_name>.conf`

   ```
   network:
     ethernets:
       ens160:
         dhcp4: false
         addresses: [192.168.x.x/24]
         nameservers:
           addresses: [1.1.1.1,1.0.0.1]
         routes:
           - to: default
             via: 192.168.x.x
     version: 2
   ```

2. Modify the following:

   - interface name - `ens160`
   - ip address - `192.168.x.x`
   - default route - `192.168.x.x`

3. Save and exit. Run `sudo netplan apply` to update.