# SSH

## Changing the default SSH port

> SSH server by default uses port 22 to create connections and everyone knows about it. Therefore using port 22 for SSH server makes your server, in theory, more vulnerable to hackers.

1. Open the `/etc/ssh/sshd_config` file.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Change the SSH port and save the file.

   ```
   Port 5333
   ```

3. Restart the SSH server to apply new configuration.

   ```bash
   sudo systemctl restart sshd
   ```

4. Logout of your server and re-login using port 5333.

   ```bash
   ssh <user>@<ip_addr> -p 5333
   ```

   > Specify `-i` if you use key to login.

## Using public/private key pair instead of password

> Using a public/private key pair to access an SSH server is more secure than using password based authentication. A password protected SSH server is more vulnerable to the brute force attacks.

1. Open the `/etc/ssh/sshd_config` file.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Set the `PasswordAuthentication` option to `no`.

   ```
   PasswordAuthentication no
   ```

3. Restart the SSH server to apply changes.

   ```bash
   sudo systemctl restart sshd
   ```

## Allow a single IP to login

> The default configuration of the SSH server allows the SSH server to accept connection from any IP address. Restrict your SSH server to accept the connections from your trusted IP addresses only.

```bash
sudo ufw allow from 192.168.0.200 to any port 22
```

## Setting up idle timeout

> The ssh daemon closes the connection from the server-side if the client goes silent. To prevent connection loss, instruct the ssh client to send a sign-of-life signal to the server once in a while.

1. Open the SSH configuration file.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Set the value of `TCPKeepAlive`, `ClientAliveInterval` and `ClientAliveCountMax` options.

   ```
   TCPKeepAlive yes
   ClientAliveInterval 60
   ClientAliveCountMax 3
   ```

## Setting up limited password retries

> Setting up limited password tries is a good way to prevent your SSH server from brute force attacks., in addition to fail2ban which does this automaticaly for SSH The SSH server provides configuration to set the number of authentication attempts permitted per connection.

1. Open the SSH configuration file.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Set the value of the `MaxAuthTries` option.

   ```
   MaxAuthTries 3
   ```

The SSH server will allow only 3 login attempts per connection.

## Disable root login

> Using the root user to access the SSH server is not a good practice. Always access the SSH server using non privileged user accounts.

1. Open the configuration file.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Disable the root login using the `PermitRootLogin` option.

   ```
   PermitRootLogin no
   ```

Now the root login is disabled and the SSH server can only be accessible by a non root user.