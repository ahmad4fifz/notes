# Ubuntu

## Change from Server to Desktop

=== "KDE Desktop"

      ```bash
      sudo apt update && sudo apt upgrade
      sudo apt install kubuntu-desktop -y
      ```

=== "GNOME Desktop"

      ```bash
      sudo apt update && sudo apt upgrade
      sudo apt install ubuntu-desktop -y
      ```

=== "XFCE Desktop"

      ```bash
      sudo apt update && sudo apt upgrade
      sudo apt install xubuntu-desktop -y
      ```

Reboot server after the process done.

```bash
sudo reboot
```

## Set or Change Timezone

### Using `timedatectl` command

**Command**:

```bash
sudo timedatectl set-timezone <your_time_zone>
```

!!! note
      Change `your_time_zone` according to your location's timezone. `timedatectl list-timezones` can be use to list the available timezones

      **Command:**

      ```bash
      timedatectl list-timezones
      ```

      **Output:**

      ```bash
      ...
      Europe/Oslo
      Europe/Paris
      Europe/Podgorica
      Europe/Prague
      Europe/Riga
      Europe/Rome
      Europe/Samara
      ...
      ```

### Reconfiguring `tzdata`

1. Identify the new timezone that want to configure

2. Replace the timezone name in `/etc/timezone` file:

   ```bash
   echo <your_time_zone> | sudo tee /etc/timezone
   ```

3. Change the system's timezone:

   ```bash
   sudo dpkg-reconfigure --frontend noninteractive tzdata
   ```