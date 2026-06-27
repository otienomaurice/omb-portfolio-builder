# Branching Workflow

This repository uses a protected release-style workflow.

## Branches

- `main` is the consumer branch. It should contain only finished, tested, release-ready code.
- `development` is the integration branch. It collects completed work from feature branches before release.
- `feature/<short-name>` branches are used for individual app changes, experiments, fixes, or UI improvements.

## Normal Change Flow

1. Start from the latest `development`.
2. Create a focused feature branch:

```powershell
git checkout development
git pull origin development
git checkout -b feature/my-change
```

3. Make and test the change.
4. Commit and push the feature branch:

```powershell
git add .
git commit -m "Describe the change"
git push -u origin feature/my-change
```

5. Merge or pull-request the feature branch into `development`.
6. Test `development`.
7. Merge `development` into `main` only when the app is ready for consumers.
8. Create release tags from `main`, for example `builder-v0.2.6`.

## Release Rule

Do not make app changes directly on `main`. `main` should move only after `development` has collected and verified the changes.

## Current Practice

For Codex-assisted work, new app changes should be made on a `feature/...` branch unless the user explicitly says the work is a hotfix or release operation.
