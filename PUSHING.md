# Pushing this fork to GitHub

Use the commands below from the repository root to push the current branch.

1. Add the remote to your fork (only once):
   ```bash
   git remote add origin https://github.com/enterausernameagain/documenso.git
   ```
2. Push the branch and set upstream (assuming you are on `work`):
   ```bash
   git push -u origin work
   ```
3. For later updates on the same branch, just run:
   ```bash
   git push
   ```

Run checks before pushing when possible:

- `npm run lint`
- `npm run build`
