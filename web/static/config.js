// Backend URL for the live view.
// "" = same origin (when web/api.py serves this page on localhost:8002).
// On Vercel, set this to the tunnel URL, or open the page with ?api=https://<tunnel> once
// (the choice is remembered in this browser).
(function () {
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  window.CC_CONFIG = {
    // Local: same origin (web/api.py on localhost:8002). Public (Vercel): the Render backend.
    API_URL: isLocal ? "" : "https://claim-cipher-api.onrender.com",
    // Public view: hide the demo-control buttons (Reset, Payer C policy change, Approve)
    // everywhere except localhost, so the deployed site is view-only. A laptop demo still has them.
    HIDE_DEMO_BUTTONS: !isLocal,
  };
})();
if (window.CC_CONFIG.HIDE_DEMO_BUTTONS) document.documentElement.classList.add("public-view");
