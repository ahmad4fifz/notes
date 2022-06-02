# Chisel

## Installation

```bash
curl https://i.jpillora.com/chisel! | bash
```

## Configuration

### Public Server

```bash
nano /etc/systemd/system/chisel-server.service
```

Paste and save the file:

```
[Unit]
Description=chisel-server
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=5s
ExecStart=/usr/local/bin/chisel server --port 8443 --reverse

[Install]
WantedBy=multi-user.target
```

Apply the configurations:

```bash
systemctl daemon-reload
systemctl enable chisel-server # enable start on boot
systemctl start chisel-server # start the service
systemctl status chisel-server # view the status & log
```

### Internal Server

> Example for SSH

```bash
nano /etc/systemd/system/chisel-tunnel-22.service
```

Paste, replace the `<public server ip/domain>` and save the file:

```
[Unit]
Description=chisel-tunnel-22
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=5s
ExecStart=/usr/local/bin/chisel client <public-server-ip/domain>:8443 R:50022:127.0.0.1:22

[Install]
WantedBy=multi-user.target
```

Apply the configurations:

```bash
systemctl daemon-reload
systemctl enable chisel-tunnel-22 # enable start on boot
systemctl start chisel-tunnel-22 # start the service
systemctl status chisel-tunnel-22 # view the status & log
```
