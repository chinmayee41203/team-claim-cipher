// Backend URL for the live view.
// "" = same origin (when web/api.py serves this page on localhost:8002).
// On Vercel, set this to the tunnel URL, or open the page with ?api=https://<tunnel> once
// (the choice is remembered in this browser).
window.CC_CONFIG = {
  API_URL: "",
  // Public view: hide the demo-control buttons (Reset, Payer C policy change, Approve)
  // everywhere except localhost, so the deployed site is view-only. A laptop demo still has them.
  HIDE_DEMO_BUTTONS: !["localhost", "127.0.0.1"].includes(location.hostname),
};
if (window.CC_CONFIG.HIDE_DEMO_BUTTONS) document.documentElement.classList.add("public-view");
