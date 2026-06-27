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

3. Update the branch register in `README.md` with the new branch name, purpose, source branch, merge target, and status.
4. Make and test the change.
5. Commit and push the feature branch:

```powershell
git add .
git commit -m "Describe the change"
git push -u origin feature/my-change
```

6. Merge or pull-request the feature branch into `development`.
7. Update the branch register status when the branch is merged, closed, or released.
8. Test `development`.
9. Merge `development` into `main` only when the app is ready for consumers.
10. Create release tags from `main`, for example `builder-v0.2.6`.

## Branch Register Rule

The README is the human-facing branch register. Every new branch should have a row in `README.md` before the branch is pushed. This keeps local users, GitHub visitors, and future Codex sessions aligned on what each branch is for.

## Release Rule

Do not make app changes directly on `main`. `main` should move only after `development` has collected and verified the changes.

## Current Practice

For Codex-assisted work, new app changes should be made on a `feature/...` branch unless the user explicitly says the work is a hotfix or release operation.
