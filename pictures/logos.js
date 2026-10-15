// Hand-drawn look-alikes of each airline's symbol (not the official artwork), as 100×100 SVG strings.
// LOGO_TILE(code, size) wraps one in a white rounded tile for badges.
(function () {
  const heart = "M50 90 C20 68 6 52 6 33 C6 18 18 8 31 8 C40 8 47 13 50 21 C53 13 60 8 69 8 C82 8 94 18 94 33 C94 52 80 68 50 90 Z";
  window.LOGO = {
    // Delta: the two-tone red "widget" triangle
    DL: `<svg viewBox="0 0 100 100"><path d="M50 10 L92 86 L50 68 Z" fill="#9B1631"/><path d="M50 10 L8 86 L50 68 Z" fill="#E3132C"/><path d="M8 86 L50 68 L92 86 Z" fill="#C01933"/></svg>`,
    // United: blue globe with white latitude bands
    UA: `<svg viewBox="0 0 100 100"><defs><clipPath id="uaC"><circle cx="50" cy="50" r="44"/></clipPath></defs><circle cx="50" cy="50" r="44" fill="#0A3BA0"/><g clip-path="url(#uaC)" fill="none" stroke="#fff" stroke-linecap="round"><path d="M-4 30 Q46 8 104 26" stroke-width="5"/><path d="M-4 46 Q50 22 104 42" stroke-width="6"/><path d="M-4 62 Q54 36 104 58" stroke-width="7"/><path d="M-4 78 Q58 52 104 74" stroke-width="7"/><path d="M14 104 Q60 66 104 92" stroke-width="6"/></g></svg>`,
    // Southwest: the tricolor heart
    WN: `<svg viewBox="0 0 100 100"><defs><clipPath id="wnC"><path d="${heart}"/></clipPath></defs><g clip-path="url(#wnC)"><rect width="100" height="100" fill="#E21836"/><path d="M50 0 H100 V60 Z" fill="#F9B612"/><path d="M0 0 H50 L60 100 H0 Z" fill="#304CB2"/><path d="M50 0 L60 100" stroke="#fff" stroke-width="3"/><path d="M50 0 L100 60" stroke="#fff" stroke-width="3"/></g></svg>`,
    // Alaska: navy script wordmark with a teal swoosh
    AS: `<svg viewBox="0 0 100 100"><text x="50" y="58" text-anchor="middle" font-family="Lobster, 'Brush Script MT', cursive" font-size="32" fill="#01426A">Alaska</text><path d="M14 70 Q50 82 88 66" fill="none" stroke="#48A9C5" stroke-width="5" stroke-linecap="round"/></svg>`,
    // Frontier: green lowercase wordmark
    F9: `<svg viewBox="0 0 100 100"><rect x="4" y="20" width="92" height="60" rx="12" fill="#248168"/><text x="50" y="58" text-anchor="middle" font-family="Rubik, 'Arial Rounded MT Bold', sans-serif" font-weight="800" font-size="23" fill="#fff">frontier</text></svg>`,
    // American: red-and-blue flight symbol
    AA: `<svg viewBox="0 0 100 100"><path d="M12 78 L48 18 L60 18 L30 78 Z" fill="#0078D2"/><path d="M40 78 L70 30 L92 30 L58 78 Z" fill="#C30019"/><path d="M48 18 L60 18 L66 30 L54 30 Z" fill="#9DA6AB"/></svg>`,
  };
  window.LOGO_TILE = (code, size = 40, extra = "") =>
    `<span class="logo" style="display:inline-grid;place-items:center;width:${size}px;height:${size}px;border-radius:${Math.round(size * .24)}px;background:#fff;box-shadow:0 0 0 1.5px rgba(0,0,0,.12);flex:none;position:relative;vertical-align:middle;${extra}"><span style="width:84%;height:84%;display:block">${window.LOGO[code].replace("<svg ", '<svg width="100%" height="100%" ')}</span></span>`;
})();
