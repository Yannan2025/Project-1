// Dynamically apply RTL mode based on document language or user change

function applyRTL() {
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];
  const lang = document.documentElement.lang || navigator.language || '';
  const isRTL = rtlLangs.some(code => lang.startsWith(code));
  document.body.classList.toggle('rtl', isRTL);
  document.documentElement.classList.toggle('rtl', isRTL);
}

// Initial check
applyRTL();

// Listen for language attribute changes (e.g., via JS or SPA navigation)
const observer = new MutationObserver(() => {
  applyRTL();
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

// Optional: expose for manual trigger
window.applyRTL = applyRTL;
