# Redis

## Overcommit_memory is set to 0

1. Add entry in `/etc/sysctl.conf`:

   ```
   vm.overcommit_memory = 1
   ```

2. Save and exit. Run `sysctl -p` to update.