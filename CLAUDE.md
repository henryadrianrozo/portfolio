# Portfolio

Adrian Rozo's personal portfolio and the case-study site for the XUs apps.
Live at **https://www.adrianrozo.com**, hosted on Vercel (project `portfolio`),
deployed from GitHub `henryadrianrozo/portfolio` on push to `main`.

Static site, no build step: `index.html` plus `styles.css`, `lightbox.js` and
`spotify.js`. One case-study folder per app (`xusmemories/`, `xuscurrency/`,
`xuscalendar/`, `xuspomodoro/`, `xusnotes/`, `xusdemocracy/`). They all share
one template: header and screenshots on the left, an overview, six highlights
and a one-line "built with" note on the right, sized to fit one screen. The
styles live under "case study template" in `styles.css`.

`xusmemories/XUsMemories_Handoff/` is the app's original design spec, kept
locally and gitignored. It is not site content.

`.env.local` holds the Spotify credentials and is untracked. Do not commit it.

<!-- STATUS:BEGIN -->
**Updated:** 2026-09-16 · `e06650c`  
**State:** Live at adrianrozo.com. The case-study site for the XUs apps.  
**Last shipped:** Portfolio refresh: XUsMemories (first) and XUsCalendar added with case studies, every case study cut to one screen (overview plus six highlights), fresh screenshots of all four web apps, "Visit" links in bold underline, LinkedIn moved under Experience & Education.  
**Missing:** Case studies for XUsContacts and XUsPhotos, which stay off the site until they ship.  
**Next:** Add XUsContacts to the homepage and give it a case study once it is approved on the App Store.
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
