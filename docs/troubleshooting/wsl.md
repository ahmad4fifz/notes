# WSL

## Ping: Operation not premitted

### Fix

```bash
$ which ping
/usr/bin/ping

$ sudo setcap cap_net_raw+p /usr/bin/ping
```

### Result

```bash
$ ping google.com
PING google.com (172.217.25.206) 56(84) bytes of data.
64 bytes from nrt12s13-in-f14.1e100.net (172.217.25.206): icmp_seq=1 ttl=55 time=86.1 ms
64 bytes from nrt12s13-in-f14.1e100.net (172.217.25.206): icmp_seq=2 ttl=55 time=64.7 ms
64 bytes from nrt12s13-in-f14.1e100.net (172.217.25.206): icmp_seq=3 ttl=55 time=64.0 ms
^C
--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 64.018/71.632/86.144/10.265 ms
```