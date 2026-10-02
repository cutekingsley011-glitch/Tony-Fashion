/**
 * Client-side & server disk media persistence for user's real uploaded photos & logo.
 * Allows instant, untouched original photography to display on mobile and desktop without AI alteration.
 */

const STORAGE_KEY = 'tony_fashion_custom_media_v1';

export interface CustomMediaMap {
  logo?: string;
  atelierRack?: string;      // Look 1: Model with lion & mannequin vest
  oliveMonogram?: string;    // Look 2: Olive cowl neck & TF monogram (portrait)
  oliveSilhouette?: string;  // Look 3: Olive cowl neck & wide black trousers (full look)
  tweedPortrait?: string;    // Look 4: Cropped tweed jacket & tote (portrait)
  tweedWideTrousers?: string;// Look 5: Cropped tweed jacket & puddle trousers (full look)
  academyHero?: string;      // Academy feature image
  [key: string]: string | undefined;
}

export function loadSavedMedia(): CustomMediaMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to load saved media', e);
  }
  return {};
}

export function saveMediaItem(key: string, base64Data: string) {
  try {
    const current = loadSavedMedia();
    current[key] = base64Data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('tony-media-updated', { detail: current }));

    // Send to server disk in background so it persists permanently for all viewers
    fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotKey: key, base64: base64Data }),
    }).catch(() => {
      // Offline or network error - local storage still keeps it safe
    });
  } catch (e) {
    console.error('Failed to save media item', e);
  }
}

export function clearCustomMedia() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('tony-media-updated', { detail: {} }));
  } catch (e) {}
}
