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
  <label class="label label-primary">
    Who are you?
    <input id="greet-input" class="input input-primary" placeholder="Enter a name..." bind:value={name} />
  </label>
  <p class="flex flex-col items-center justify-center text-center text-base-content max-w-prose px-4">{msg}</p>
  <div class="w-full flex flex-col justify-center items-center px-16 space-y-8">
    <button onclick={yap} class="w-full border border-base-content btn btn-primary rounded-lg hover:cursor-pointer" type="submit">Yap</button>
    <button onclick={inspire} class="w-full border border-base-content btn btn-secondary rounded-lg hover:cursor-pointer" type="submit">Inspire</button>
    <button onclick={inform} class="w-full border border-base-content btn btn-accent rounded-lg hover:cursor-pointer" type="submit">Inform</button>
  </div>
  <div class="dock">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
      <span class="dock-label text-primary">History</span>
    </button>
    <button class="dock-active">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      <span class="dock-label text-primary">Yap</span>
    </button>
    <button>
      <svg class="size-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
      <span class="dock-label text-primary">Settings</span>
    </button>
  </div>
</main>

<style>


</style>
