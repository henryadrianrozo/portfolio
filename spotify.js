// The play button in the top-right nav, and the panel it reveals.
//
// Two things this deliberately does NOT do:
//   1. Load anything from Spotify on page load. The iframe is built the first
//      time someone presses play, so a visitor who ignores the button never
//      makes contact with Spotify and never gets its cookies.
//   2. Pretend it can survive navigation. A Spotify iframe dies with the page,
//      and there is no way to read or restore its position from outside, which
//      is exactly why the panel also offers "open in Spotify".
(function () {
  // ---------------------------------------------------------------------
  // Paste the playlist ID here. Get it from Spotify: right-click the playlist,
  // Share, Copy link to playlist. The link looks like
  //   https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=abc123
  // and the ID is the part between /playlist/ and the ?  ->  37i9dQZF1DXcBWIGoYBM5M
  // The playlist has to be public or the embed renders an error.
  // While this is empty the button stays hidden, so nothing ships broken.
  //
  // Currently: "Eclectic Fusions V4".
  // Note the ?si= parameter on a Spotify share link is a share-session
  // identifier tied to whoever copied it. It is deliberately not carried here.
  var PLAYLIST_ID = '2P2YGCXZq53x0SAi2QyVAY';
  // ---------------------------------------------------------------------

  var toggle = document.getElementById('music-toggle');
  var panel = document.getElementById('music-panel');
  if (!toggle || !panel) return;

  if (!PLAYLIST_ID) {
    // Take the wrapper with them, so no empty flex item is left in the nav.
    var wrap = toggle.closest('.music-wrap');
    if (wrap) wrap.remove();
    else { toggle.remove(); panel.remove(); }
    return;
  }

  document.getElementById('music-open').href =
    'https://open.spotify.com/playlist/' + PLAYLIST_ID;

  var built = false;

  function build() {
    if (built) return;
    built = true;
    var frame = document.createElement('iframe');
    frame.src =
      'https://open.spotify.com/embed/playlist/' + PLAYLIST_ID + '?utm_source=generator';
    frame.width = '100%';
    frame.height = '152';
    frame.frameBorder = '0';
    frame.loading = 'lazy';
    // autoplay is in the permission list because the iframe is only ever
    // created from a real click on the play button, so starting immediately is
    // what someone pressing play expects. Browsers may still require a second
    // press inside the player; that is their policy, not something to fight.
    frame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    frame.setAttribute('allowfullscreen', '');
    frame.style.borderRadius = '12px';
    frame.title = 'Spotify playlist';
    panel.insertBefore(frame, panel.firstChild);
  }

  function open() {
    build();
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (panel.hidden) open();
    else close();
  });

  document.getElementById('music-close').addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) close();
  });
})();
