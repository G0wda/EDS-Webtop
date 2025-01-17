<script>
// @ts-nocheck

  import { fade } from 'svelte/transition';

  import FormError from '$lib/components/FormError.svelte';
  import AuthTitle from '$lib/components/AuthTitle.svelte';
  import AuthLink from '$lib/components/AuthLink.svelte';
  import '$lib/styles/auth.css';

  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let errors = {};
  let isLoading = false;

  const handleSubmit = async (event) => {
    event.preventDefault();
    errors = validateForm();

    if (Object.keys(errors).length > 0) {
      return; // Don't proceed if there are errors
    }

    isLoading = true;

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        errors = { global: data.error || 'Something went wrong' };
      } else {
        window.location.href = '/login';
      }
    } catch (err) {
      console.error(err);
      errors = { global: 'Failed to register. Please try again later.' };
    } finally {
      isLoading = false;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    return newErrors;
  };
</script>

<svelte:head>
  <title>Register - Edwins Dev Space</title>
</svelte:head>

<main in:fade>
  <div class="auth-container">
    <AuthTitle title="Create Account" />

    {#if errors.global}
      <p class="error-message">{errors.global}</p>
    {/if}

    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          bind:value={username}
          placeholder="Choose a username"
          class:error={errors.username}
        />
        {#if errors.username}
          <FormError message={errors.username} />
        {/if}
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Enter your email"
          class:error={errors.email}
        />
        {#if errors.email}
          <FormError message={errors.email} />
        {/if}
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="Choose a password"
          class:error={errors.password}
        />
        {#if errors.password}
          <FormError message={errors.password} />
        {/if}
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          bind:value={confirmPassword}
          placeholder="Confirm your password"
          class:error={errors.confirmPassword}
        />
        {#if errors.confirmPassword}
          <FormError message={errors.confirmPassword} />
        {/if}
      </div>

      <button type="submit" class="submit-button" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Create Account'}
      </button>
    </form>

    <AuthLink 
      text="Already have an account?"
      linkText="Login here"
      href="/login"
    />
  </div>
</main>

<style>
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-bottom: 1rem;
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

  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
