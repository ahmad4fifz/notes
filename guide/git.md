---
title: Git
layout: default
nav_order: 1
parent: Guide
---

# Git

## Remove a submodule

### From .git/config

```
git submodule deinit -f path/to/submodule
```

### From the superproject’s .git/modules directory 

```
rm -rf .git/modules/path/to/submodule
```

### From .gitmodules and submodule directory 

```
git rm -f path/to/submodule
```