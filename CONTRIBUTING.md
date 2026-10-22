---
title: How to contribute
nav_order: 5
---

# How to contribute

Thank you for helping preserve Dr. Kurien's story. Everything comes in through **pull requests** (PRs), which maintainers review before publishing.

## What you can add

| Contribution | Where |
|---|---|
| A memory or anecdote | `memories/` using [the memory template](memories/_TEMPLATE.md) |
| A photo or scanned document | `media/photos/` or `media/documents/` + a catalogue entry |
| A video | `media/videos/` — a catalogue entry with a link |
| A correction or new fact | Edit the relevant file in `report/` and add a source |
| A source | `report/11-sources.md` |
| An answer to an open question | `report/12-open-questions.md` and the relevant chapter |

## The easy way (no software needed)

1. Sign in to GitHub (free account).
2. **To edit a page:** click "Suggest an edit to this page" at the bottom of any page on the website, or the ✏️ pencil icon on GitHub. Make your change and click **Propose changes** → **Create pull request**.
3. **To add a memory:** open the `memories` folder on GitHub → **Add file → Create new file**. Paste the template, fill it in, name the file `YYYY-your-name-short-title.md`, then **Propose new file → Create pull request**.
4. **To add a photo:** open `media/photos` → **Add file → Upload files**. Then create its catalogue `.md` file the same way.

GitHub automatically makes a copy (a "fork") for you — that's normal.

## The developer way

```bash
git clone https://github.com/<you>/drverghesekurien.git
git checkout -b add-memory-yourname
# add files
git commit -m "Add memory: IRMA fieldwork 1988"
git push origin add-memory-yourname
# open a PR
```

Preview the site locally with Jekyll if you like (`bundle exec jekyll serve`), but it's not required.

## Standards

1. **Source every fact** in `report/`. A link, book with page number, or document in `media/`.
2. **Memories are first-hand** unless clearly labelled as retold.
3. **Rights first.** Upload only what you own or have permission to share. Link to copyrighted material instead.
4. **Consent.** Don't publish private details about living people without consent.
5. **Fair and respectful.** Critical accounts are welcome; personal attacks are not.
6. **No fabrication**, including AI-generated "photos" or invented quotes. AI-assisted writing is fine if you have checked every fact.
7. **Any language is welcome.** An English summary helps.

## Review

Maintainers check sources, consent, rights and tone. They may ask questions in the PR or make small edits. Most PRs are reviewed within two weeks.

## Removing content

If you are a rights holder, family member or the subject of a memory and want something changed or removed, open an issue or email the maintainers. We act quickly.

## Code of Conduct

By contributing you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
