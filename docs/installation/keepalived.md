# Keepalived

Keepalived is a routing software written in C. The main goal of this project is to provide simple and robust facilities for loadbalancing and high-availability to Linux system and Linux based infrastructures. Loadbalancing framework relies on well-known and widely used Linux Virtual Server (IPVS) kernel module providing Layer4 loadbalancing. Keepalived implements a set of checkers to dynamically and adaptively maintain and manage loadbalanced server pool according their health. On the other hand high-availability is achieved by VRRP protocol. VRRP is a fundamental brick for router failover. In addition, Keepalived implements a set of hooks to the VRRP finite state machine providing low-level and high-speed protocol interactions. In order to offer fastest network failure detection, Keepalived implements BFD protocol. VRRP state transition can take into account BFD hint to drive fast state transition. Keepalived frameworks can be used independently or all together to provide resilient infrastructures.

Keepalived implementation is based on an I/O multiplexer to handle a strong multi-threading framework. All the events process use this I/O multiplexer.

## Prerequisite

- Linux servers (MASTER & BACKUP)
- Service installed on both servers.

## Installing Keepalived

=== "Ubuntu"

    ```bash
    sudo apt install update
    sudo apt install keepalived libipset13 -y
    ```

## Configuring Keepalived

1.  Paste this in file `/etc/keepalived/keepalived.conf`:

    === "MASTER"

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

    === "BACKUP"

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
