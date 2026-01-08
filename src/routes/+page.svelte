<script lang="ts">
  import "../app.css"
  import { invoke } from "@tauri-apps/api/core";
  import Price from "$lib/Price.svelte";
  import PriceSkeleton from "$lib/PriceSkeleton.svelte";
  import Action from "$lib/Action.svelte";
  import AI from "$lib/AI.svelte";
  import Game from "$lib/Game.svelte";
  import Sports from "$lib/Sports.svelte";
  import News from "$lib/News.svelte";

  let name = $state("");
  let msg = $state("");

  async function yap(event: Event) {
    event.preventDefault();
    msg = await invoke("yap", { name });
  }
  async function inspire(event: Event) {
    event.preventDefault();
    msg = await invoke("inspire", { name });
  }
  async function inform(event: Event) {
    event.preventDefault();
    msg = await invoke("inform", { name });
  }
</script>

<main class="flex flex-col items-center justify-start pt-12 pb-24 h-full min-h-screen space-y-4 bg-base-300 rounded-lg shadow-xl">
  <h1 class="text-4xl text-base-content text-center"><strong class="text-base-content">Orange AI</strong></h1>
  <!-- <label class="input">
    <span class="label">Who are you?</span>
    <input id="greet-input" class="input input-primary" placeholder="Enter a name..." bind:value={name} />
  </label> -->
  <p class="flex flex-col items-center justify-center text-center text-base-content max-w-prose px-4">{msg}</p>
  <div class="grid md:grid-cols-3 gap-4 grid-cols-1">
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <Price />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <AI />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <Action />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <Game />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <News />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hover-3d">
      <figure class="max-w-100 rounded-2xl">
        <Sports />
      </figure>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  
  <!-- <div class="w-full flex flex-col justify-center items-center px-16 space-y-2">
    <button onclick={yap} class="w-full border border-base-content btn btn-primary rounded-lg hover:cursor-pointer" type="submit">Yap</button>
    <button onclick={inspire} class="w-full border border-base-content btn btn-secondary rounded-lg hover:cursor-pointer" type="submit">Inspire</button>
    <button onclick={inform} class="w-full border border-base-content btn btn-accent rounded-lg hover:cursor-pointer" type="submit">Inform</button>
  </div> -->
</main>

<style>
</style>