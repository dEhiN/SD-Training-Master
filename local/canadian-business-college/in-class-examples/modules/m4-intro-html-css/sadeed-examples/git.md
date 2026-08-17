### Connecting to the class code in VC Code

## Create user account in the github

[Signup](https://github.com/)

## Download Git

[Git](https://git-scm.com/downloads)

[Git Windows](https://git-scm.com/downloads/win)

[Download](https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe)

- Open the terminal (windows key + cmd)

```
>git -v
```

## 1. Setup Git

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```



## 2. Clone a Repository (Remote to Local)

```bash
git clone https://github.com/username/repo-name.git
```

> This downloads a copy of the remote repo to your local system.

---

## 3. Check Repository Status

```bash
git status
```

> Shows the status of changes (staged, unstaged, untracked).

---

## 4. Fetch Changes from Remote

```bash
git fetch origin
```

> Downloads changes but does not merge them into your branch.

---

## 5. Pull Changes (Fetch + Merge)

```bash
git pull origin main
```

> Pulls and merges updates from the `main` branch.

---