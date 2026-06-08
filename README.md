<!-- Created by Artur Ilyasov -->

# Availy Legal Pages

Static GitHub Pages site for Availy App Store metadata.

Canonical pages:

- English support: `/en/support/`
- English privacy policy: `/en/privacy-policy/`
- Russian support: `/ru/support/`
- Russian privacy policy: `/ru/privacy-policy/`

After publishing, the App Store Connect URLs will look like:

```text
https://<github-user>.github.io/availy-legal/en/support/
https://<github-user>.github.io/availy-legal/en/privacy-policy/
https://<github-user>.github.io/availy-legal/ru/support/
https://<github-user>.github.io/availy-legal/ru/privacy-policy/
```

## Support Email

The support email is configured in `assets/contact-config.js`.

## Languages

Language dropdown links are written directly in each HTML page header so they
work without JavaScript. When adding a new language, add its folder at the repo
root and add a matching option to each `.language-menu`.

## Theme

The site follows the user's system light/dark preference by default through
`prefers-color-scheme`. The header theme toggle stores a manual override in
`localStorage`.

## Publish With GitHub CLI

Log in first:

```bash
gh auth login
```

Create the public GitHub repository and push this local repo:

```bash
gh repo create availy-legal --public --source=. --remote=origin --push
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
