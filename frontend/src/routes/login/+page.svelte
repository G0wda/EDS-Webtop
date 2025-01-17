<script>
  import { fade } from 'svelte/transition';
  import AuthTitle from '$lib/components/AuthTitle.svelte';
  import AuthLink from '$lib/components/AuthLink.svelte';
  import '$lib/styles/auth.css';

  let username = '';
  let password = '';
  let usernameError = '';
  let passwordError = '';
  
  // Form submission handler
  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Reset error messages
    usernameError = '';
    passwordError = '';

    // Validate username
    if (!username) {
      usernameError = 'Username is required.';
    }

    // Validate password
    if (!password) {
      passwordError = 'Password is required.';
    } else if (password.length < 8) {
      passwordError = 'Password must be at least 8 characters long.';
    }

    // If no errors, proceed with login
    if (!usernameError && !passwordError) {
      try {
        // Send the username and password to the server for validation
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (result.success) {
          // Redirect to the dashboard or home page
          window.location.href = '/home';
        } else {
          passwordError = result.message || 'Invalid username or password';
        }
      } catch (error) {
        console.error('Login error:', error);
        passwordError = 'An error occurred during login. Please try again.';
      }
    }
  };
</script>

<svelte:head>
  <title>Login - Edwins Dev Space</title>
</svelte:head>

<main in:fade>
  <div class="auth-container">
    <AuthTitle title="Welcome" />
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          bind:value={username}
          placeholder="Enter your username"
        />
        {#if usernameError}
          <p class="error-message">{usernameError}</p>
        {/if}
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="Enter your password"
        />
        {#if passwordError}
          <p class="error-message">{passwordError}</p>
        {/if}
      </div>

      <button type="submit" class="submit-button">Login</button>
    </form>

    <AuthLink 
      text="Don't have an account?"
      linkText="Register here"
      href="/register"
    />
  </div>
</main>

<style>
  .error-message {
    color: red;
    font-size: 0.85rem;
    margin-top: 0.2rem;
  }

  .submit-button {
    background-color: #ff3e00;
    color: #fff;
    border: none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #e63600;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
