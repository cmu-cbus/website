# CMU CBUS Website
Source code for the Carnegie Mellon Computational Biology Undergraduate Society website. Built with Astro and Tailwind CSS.

## Adding content

Content is in `src/content/`.

**Events** — `.toml` file in `src/content/events/`
```toml
title = "Genomics Speaker Series"
date = 2026-10-14
time = "6:00 PM"
location = "GHC 4303"
locationDetails = "Fourth floor of Gates Hillman Center"
description = "A talk on..."
rsvpNote = "Please RSVP so we can plan refreshments."

[[highlights]]
title = "Discussion"
description = "Meet the speaker after the talk."

[[links]]
text = "RSVP"
url = "https://..."
```
`locationDetails`, `rsvpNote`, `highlights`, and `links` are optional. Keep event fields before the `[[highlights]]` and `[[links]]` blocks.

**Board** — `.toml` file in `src/content/board/`
```toml
name = "Jane Doe"
role = "President"
image = "/board/jane.jpg"
bio = "Jane is a junior studying..."
priority = 10
coffeeChat = "[https://calendly.com/](https://calendly.com/)..."
```
`priority` sorts highest first. `email`, `linkedin`, `github`, `website` are all optional. Images for board members should be placed in `public/board/`.

**Resources** — `.md` file in `src/content/resources/`
```markdown
---
title: "Course Planning Guide"
section: "Academics"
priority: 5
url: "https://..."
description: "How to plan your CB course sequence."
---
```
`section` groups items on the page. Skip `url` if the page content itself is the resource.

## Contributing

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages (e.g., `feat: add new board member`, `fix: update event date`).

To maintain a linear history, do not use `git merge` when updating your local branch or pulling target changes. Always use `git rebase` (or `git pull --rebase`). We only accept **Squash and merge** or **Rebase and merge** when closing pull requests into the main branch. 

Each commit should also be atomic, meaning it represents a single, isolated logical change. Avoid mixing unrelated refactoring, bug fixes, and new features into one commit so changes stay easy to review, test, debug, and revert if necessary.

## Missing something?

Open a PR, or ask a board member.
