# Fail2ban

Fail2ban is a log-parsing tool that looks for signs of an automated attack on your server in your system logs. Fail2ban adds a new rule to iptables to block the attacker's IP address, either for a given length of time or permanently, when an attempted breach is detected using the defined parameters.

## Installing Fail2ban

=== "CentOS"

    ```bash
    ## Ensure your system is up to date and install the EPEL repository
    yum update && yum install epel-release

    ## Install Fail2Ban:
    yum install fail2ban

    ## Start and enable Fail2ban
    systemctl start fail2ban
    systemctl enable fail2ban
    ```

    !!! attention
        If you encounter the error that there is no directory `/var/run/fail2ban` to contain the socket file `/var/run/fail2ban/fail2ban.sock`, create the directory manually:

        ```
        mkdir /var/run/fail2ban
        ```

=== "Debian"

    ```bash
    ## Ensure your system is up to date
    apt update && apt upgrade -y

    ## Install Fail2ban
    apt install fail2ban -y
    ```

=== "Fedora"

    ```bash
    ## Update your system
    dnf update

    ## Install Fail2ban
    dnf install fail2ban

    # Start and enable Fail2ban
    systemctl start fail2ban
    systemctl enable fail2ban
    ```

=== "Ubuntu"

    ```bash
    ## Ensure your system is up to date
    apt update && apt upgrade -y

    ## Install Fail2ban
    apt install fail2ban -y
    ```

## Configuring Fail2ban

> to-be-continue