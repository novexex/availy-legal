<!-- Created by Artur Ilyasov -->

# Availy Legal Pages

Static GitHub Pages site for Availy App Store metadata.

Pages:

- Support: `/support/`
- Privacy Policy: `/privacy-policy/`

After publishing, the App Store Connect URLs will look like:

```text
https://<github-user>.github.io/Availy-Legal/support/
https://<github-user>.github.io/Availy-Legal/privacy-policy/
```

## Publish With GitHub CLI

Log in first:

```bash
gh auth login
```

Create the public GitHub repository and push this local repo:

```bash
gh repo create Availy-Legal --public --source=. --remote=origin --push
```

Enable GitHub Pages from the `main` branch root:

```bash
gh api repos/{owner}/{repo}/pages \
  --method POST \
  --field 'source[branch]=main' \
  --field 'source[path]=/'
```

If GitHub says Pages already exists, update the source instead:

```bash
gh api repos/{owner}/{repo}/pages \
  --method PUT \
  --field 'source[branch]=main' \
  --field 'source[path]=/'
```

Then check the Pages status:

```bash
gh api repos/{owner}/{repo}/pages --jq '.html_url'
```

