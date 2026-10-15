// Airline logos. Delta, Southwest, Alaska, Frontier and American use the official SVGs from
// Wikimedia Commons (public domain, saved in logos-official/). United has no current logo on
// Commons, so it's a drawn globe + wordmark in the same spirit.
// LOGO_PILL(code, h, w) returns a white rounded badge with the logo fitted inside.
(function () {
  window.LOGO_BASE = window.LOGO_BASE || "logos-official/";
  const united = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 70"><defs><clipPath id="uaG"><circle cx="35" cy="35" r="30"/></clipPath></defs><circle cx="35" cy="35" r="30" fill="#0A3BA0"/><g clip-path="url(#uaG)" fill="none" stroke="#fff" stroke-linecap="round"><path d="M0 20 Q32 6 70 18" stroke-width="3.5"/><path d="M0 31 Q35 15 70 28" stroke-width="4"/><path d="M0 42 Q38 24 70 39" stroke-width="4.5"/><path d="M0 53 Q40 35 70 50" stroke-width="4.5"/><path d="M10 72 Q42 46 70 62" stroke-width="4"/></g><text x="80" y="50" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="40" letter-spacing="4" fill="#0B2265">UNITED</text></svg>`;
  window.LOGO_SRC = {
    DL: () => LOGO_BASE + "DL.svg",
    WN: () => LOGO_BASE + "WN.svg",
    AS: () => LOGO_BASE + "AS.svg",
    F9: () => LOGO_BASE + "F9.svg",
    AA: () => LOGO_BASE + "AA.svg",
    UA: () => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(united),
  };
  window.LOGO_PILL = (code, h = 40, w = 128, extra = "") =>
    `<span class="logo" style="display:inline-grid;place-items:center;width:${w}px;height:${h}px;border-radius:${Math.round(h * .3)}px;background:#fff;box-shadow:0 0 0 1.5px rgba(0,0,0,.1);flex:none;position:relative;vertical-align:middle;padding:${Math.round(h * .16)}px ${Math.round(h * .22)}px;box-sizing:border-box;${extra}"><img src="${LOGO_SRC[code]()}" alt="${code}" style="max-width:100%;max-height:100%;display:block"></span>`;
})();
