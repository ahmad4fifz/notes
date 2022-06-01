# Git

## Remove a submodule

### Remove the submodule entry from .git/config

```bash
git submodule deinit -f path/to/submodule
```

### Remove the submodule directory from the superproject’s .git/modules directory

```bash
rm -rf .git/modules/path/to/submodule
```

### Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule

```bash
git rm -f path/to/submodule
```