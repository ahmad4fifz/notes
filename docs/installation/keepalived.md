# Keepalived

> Keepalived is a routing software written in C. The main goal of this project is to provide simple and robust facilities for loadbalancing and high-availability to Linux system and Linux based infrastructures. 

## Prerequisite

- Linux servers (for **MASTER** & **BACKUP**)

## Installation

```bash
sudo apt install update
sudo apt install keepalived libipset13 -y
```

## Configuration

1.  Paste this in file `/etc/keepalived/keepalived.conf`:

    **MASTER**

    ```
    vrrp_instance VI_01 {
        state MASTER
        interface ens160
        virtual_router_id 55
        priority 150
        advert_int 1
        unicast_src_ip 192.168.1.51
        unicast_peer {
            192.168.1.52
        }
        authentication {
            auth_type PASS
            auth_pass Changeme
        }
        virtual_ipaddress {
            192.168.1.100/24
        }
    }
    ```

    **BACKUP**

    ```
    vrrp_instance VI_01 {
        state BACKUP
        interface ens160
        virtual_router_id 55
        priority 100
        advert_int 1
        unicast_src_ip 192.168.1.52
        unicast_peer {
            192.168.1.51
        }
        authentication {
            auth_type PASS
            auth_pass Changeme
        }
        virtual_ipaddress {
            192.168.1.100/24
        }
    }
    ```

2.  Modify the `unicast_src_ip`, `unicast_peer`, `auth_pass` and `virtual_ipaddress` according to your usage. Then save the file.

3.  Start and enable start on boot.

    ```bash
    sudo systemctl start keepalived
    sudo systemctl enable --now keepalived
    ```

4.  On client side, use the `virtual IP` to access the service.
