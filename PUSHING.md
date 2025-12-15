# Pushing this fork to GitHub

Use the commands below from the repository root to push the current branch.

1. Confirm your working tree is clean and you are on the branch you expect:
   ```bash
   git status -sb
   ```
2. Add the remote to your fork (only once):
   ```bash
   git remote add origin https://github.com/enterausernameagain/documenso.git
   ```
3. Verify the remote is configured:
   ```bash
   git remote -v
   ```
4. Push the branch and set upstream (assuming you are on `work`):
   ```bash
   git push -u origin work
   ```
5. For later updates on the same branch, just run:
   ```bash
   git push
   ```

Authentication tips (avoid 403 errors):
- Ensure your GitHub credentials or PAT are available in this environment.
- If prompted, enter your GitHub username and a personal access token with `repo` scope.
- To cache credentials for this session, you can run `git config credential.helper store` before pushing.

Run checks before pushing when possible:

- `npm run lint`
- `npm run build`
