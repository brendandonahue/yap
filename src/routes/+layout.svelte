<script>
  import "../app.css"
  import Dock from '../lib/Dock.svelte';  // Adjust path if needed
</script>

<slot />  <!-- Renders the current page content -->

<Dock />  <!-- Your persistent dock -->