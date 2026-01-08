// src/lib/stores/btcPrice.ts
import { writable } from 'svelte/store';
import { fetch as tauriFetch } from '@tauri-apps/plugin-http';

export const btcPrice = writable<number | null>(null);
export const btcLoading = writable(true);
export const btcError = writable<string | null>(null);

export async function refreshBtcPrice() {
  btcLoading.set(true);
  btcError.set(null);

  try {
    const res = await tauriFetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    if (!res.ok) throw new Error('HTTP error');
    const data = await res.json();
    const price = data?.bitcoin?.usd;
    if (typeof price !== 'number') throw new Error('Invalid price');
    
    btcPrice.set(price);
  } catch (err: any) {
    btcError.set(err.message);
  } finally {
    btcLoading.set(false);
  }
}