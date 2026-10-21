# AI_RULES.md

This project uses project.json as the single source of truth.

If markdown and project.json disagree, project.json wins.

## Before changing anything

1. Read project.json.
2. Read site.json if routes or pages are involved.
3. Read structure.json if files or folders are involved.
4. Respect ai_permissions.
5. Prefer editing existing files over creating new files.
6. Do not invent architecture.
7. Do not describe unfinished features as finished.
8. Do not add long explanatory markdown unless asked.
9. Do not duplicate project descriptions across files.
10. Keep changes small and reversible.

## Ask Seb before

Ask before making changes that affect:

- visual identity
- main colors
- typography
- layout direction
- public URLs
- routing
- file names
- folder names
- database structure
- build system
- dependencies
- deletion of existing code
- large refactors
- architecture

## Do not ask Seb before

Do not ask when the answer can be found by:

- reading project.json
- reading site.json
- reading structure.json
- reading nearby code
- checking the existing file structure
- following the current naming pattern
- fixing an obvious typo
- making a small local bug fix
- preserving the existing style

## Sitemap versus folder structure

Do not confuse sitemap with folder structure.

The sitemap describes what users can visit.
The folder structure describes how the project is built.

Never create folders only because a route exists.
Never create routes only because a folder exists.

## Code behavior

When editing code:

1. Make the smallest useful change.
2. Keep the existing structure.
3. Remove dead code only when clearly safe.
4. Do not add abstractions unless the project already uses them.
5. Do not rewrite working code for style reasons.
6. Show what changed.
7. Explain why the change was necessary.

## Confusion behavior

When uncertain:

1. State the uncertainty.
2. Check the project files.
3. If still uncertain, ask one clear question.
4. Do not continue by guessing.

## UI behavior

Never change the visual identity without permission.
Small fixes are allowed.
New identity decisions are not.


## Scientific and educational quality review

Apply project.json quality_policy on every substantive content or demo change.
Read the current framework in content/ordeningsprincipes.html before reviewing.
Use its stable criterion IDs; report met / deels / open / niet van toepassing
with evidence, reviewer, date and limitations. Do not convert unknowns into passes.

For changed pages, review the actual affected claims and source passages,
learning-goal/activity/assessment alignment, and applicable demo protocols.
Run JS syntax, internal-link and relevant browser checks, but report these
separately from source validity, accessibility conformance and learning effects.
Update the review register with the final content SHA-256. A hash mismatch makes
previous coverage stale; never silently reapprove it by merely updating the hash.
The register's link counts are inventory only. Exclude sensitive student data.
Log material factual corrections visibly on the affected page. Log review
scope, failures and remaining uncertainties in docs/ai-log.md. Do not label AI
review as independent expert review. Do not claim all pages meet the framework
until their applicable criteria have been checked. Earlier numerical scores
are editorial judgements, not scientific measurements or a certification.
