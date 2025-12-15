<script lang="ts">
  import "../app.css"
  import { invoke } from "@tauri-apps/api/core";

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

<main class="flex flex-col items-center justify-center pt-12 h-screen space-y-16 bg-base-300 rounded-lg shadow-xl">
  <h1 class="text-3xl text-base-content text-center">Welcome to <strong class="text-primary">Yap.ai</strong></h1>
  <label class="input">
    <span class="label">Who are you?</span>
    <input id="greet-input" class="input input-primary" placeholder="Enter a name..." bind:value={name} />
  </label>
  <p class="flex flex-col items-center justify-center text-center text-base-content max-w-prose px-4">{msg}</p>
  <div class="w-full flex flex-col justify-center items-center px-16 space-y-8">
    <button onclick={yap} class="w-full border border-base-content btn btn-primary rounded-lg hover:cursor-pointer" type="submit">Yap</button>
    <button onclick={inspire} class="w-full border border-base-content btn btn-secondary rounded-lg hover:cursor-pointer" type="submit">Inspire</button>
    <button onclick={inform} class="w-full border border-base-content btn btn-accent rounded-lg hover:cursor-pointer" type="submit">Inform</button>
  </div>
</main>

<style>
</style>