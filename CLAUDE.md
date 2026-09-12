# Portfolio

Adrian Rozo's personal portfolio and the case-study site for the XUs apps.
Live at **https://www.adrianrozo.com**, hosted on Vercel (project `portfolio`),
deployed from GitHub `henryadrianrozo/portfolio` on push to `main`.

Static site, no build step: `index.html` plus `styles.css`, `lightbox.js` and
`spotify.js`. One case-study folder per app (`xuscurrency/`, `xusdemocracy/`,
`xusnotes/`, `xuspomodoro/`, `xusmemories/`).

`.env.local` holds the Spotify credentials and is untracked. Do not commit it.

<!-- STATUS:BEGIN -->
**Updated:** 2026-09-12 · `ad80d5f`  
**State:** Live at adrianrozo.com. The case-study site for the XUs apps.  
**Last shipped:** XUsContacts pulled from the homepage while it is still in development, after matching XUsCurrency's wordmark to its real app icon and wiring up its Play Store link.  
**Missing:** Case studies for XUsCalendar, XUsContacts and XUsPhotos. Five exist: XUsCurrency, XUsDemocracy, XUsNotes, XUsPomodoro, XUsMemories.  
**Next:** Add the three missing case studies, and put XUsContacts back on the homepage once it ships.
<!-- STATUS:END -->


## Status block

At the end of a session, and in the same commit as any feature-sized piece of
work, update the `STATUS:BEGIN`/`STATUS:END` block at the top of
`CLAUDE.md`: the date, the current commit hash, and the
State / Blocked / Next lines. Keep it to those few lines; the detail belongs in
the prose below it.

`~/Projects/PROJECT_STATUS.md` is generated from that block, so it is the only
place this project's status needs to be written. Nothing is copied anywhere
else by hand.
