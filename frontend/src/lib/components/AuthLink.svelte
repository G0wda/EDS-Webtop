<script>
  export let text = '';
  export let linkText = '';
  export let href = '';
</script>

<p class="auth-link">
  {text} <a {href}>{linkText}</a>
</p>

<style>
  .auth-link {
    text-align: center;
    margin-top: 1.5rem;
  }

  .auth-link a {
    color: var(--color-theme-1);
    text-decoration: none;
    font-weight: 500;
  }

  .auth-link a:hover {
    text-decoration: underline;
  }
</style>