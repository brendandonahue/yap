<script lang="ts">
  import { onMount } from 'svelte';
  import { btcPrice, btcLoading, btcError, refreshBtcPrice } from '$lib/stores/btcPrice';

  onMount(() => {
    refreshBtcPrice();
    const i = setInterval(refreshBtcPrice, 60000);
    return () => clearInterval(i);
  });
</script>

{#if $btcLoading}Loading...{:else if $btcError}{$btcError}{:else}
    <div class="card w-96 bg-base-100 shadow-sm">
        <div class="card-body">
            <span class="badge badge-xs badge-warning">MONEY</span>
            <div class="flex justify-between">
            <h2 class="text-3xl font-bold">Bitcoin</h2>
                <span class="text-3xl">{$btcPrice ? '$' + $btcPrice.toLocaleString() : '—'}</span>
            </div>
        </div>
    </div>
    <div class="mockup-code w-full">
    </div>
{/if}