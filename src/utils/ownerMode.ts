/**
 * Helper to control Owner Mode visibility so public visitors cannot tamper with or abuse upload buttons.
 *
 * Owner mode is activated ONLY if:
 * 1. The URL hash is '#owner' or '#admin' (e.g. yoursite.vercel.app/#owner)
 * 2. OR the owner triple-taps the footer copyright to unlock it
 */

const OWNER_KEY = 'tony_fashion_owner_unlocked_v1';

export function isOwnerMode(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.location.hash === '#owner' || window.location.hash === '#admin') {
    return true;
  }
  return localStorage.getItem(OWNER_KEY) === 'true';
}

export function toggleOwnerMode(): boolean {
  const current = isOwnerMode();
  const next = !current;
  if (next) {
    localStorage.setItem(OWNER_KEY, 'true');
  } else {
    localStorage.removeItem(OWNER_KEY);
    if (window.location.hash === '#owner' || window.location.hash === '#admin') {
      window.location.hash = '';
    }
  }
  window.dispatchEvent(new CustomEvent('tony-owner-mode-changed', { detail: next }));
  return next;
}
