<script>
  export let message = '';
</script>

{#if message}
  <p class="error">{message}</p>
{/if}

<style>
  .error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
</style>