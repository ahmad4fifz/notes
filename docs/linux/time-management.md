# Time Management

## Set or Change Timezone

### Using `timedatectl` command

**Command**:

```bash
sudo timedatectl set-timezone <your_time_zone>
```

> Change `your_time_zone` according to your location's timezone. `timedatectl list-timezones` can be use to list the available timezones
>
> **Command:**
>
> ```bash
> timedatectl list-timezones
> ```
>
> **Output:**
>
> ```bash
> ...
> Europe/Oslo
> Europe/Paris
> Europe/Podgorica
> Europe/Prague
> Europe/Riga
> Europe/Rome
> Europe/Samara
> ...
> ```

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
