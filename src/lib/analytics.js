export function trackContactClick(method) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', `${method}_click`);
}
