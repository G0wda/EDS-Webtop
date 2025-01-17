<script>
	import { fade } from 'svelte/transition';
  </script>
  
  <svelte:head>
	<title>Edwins Dev Space - Cloud Linux Development Environment</title>
	<meta name="description" content="Access Linux development environments directly in your browser" />
  </svelte:head>
  
  <main in:fade>
	<section class="hero">
	  <img src="/edwin.png" alt="logo">
	  <h1>Edwins Dev Space</h1>
	  <p class="tagline">Your Linux Development Environment in the Cloud</p>
	  <div class="cta-buttons">
		<a href="/login" class="button primary">Login</a>
		<a href="/register" class="button secondary">Register</a>
	  </div>
	</section>
  
	<section class="features">
	  <h2>Why Choose Edwins Dev Space?</h2>
	  <div class="feature-grid">
		<div class="feature-card">
		  <h3>Instant Access</h3>
		  <p>Start coding in seconds with pre-configured Linux environments</p>
		</div>
		<div class="feature-card">
		  <h3>Full Linux Power</h3>
		  <p>Access the complete Linux terminal directly in your browser</p>
		</div>
		<div class="feature-card">
		  <h3>Zero Setup</h3>
		  <p>No installation required - everything runs in your browser</p>
		</div>
		<div class="feature-card">
		  <h3>Collaborative</h3>
		  <p>Share your development environment with team members</p>
		</div>
	  </div>
	</section>
  </main>
  
  <style>
	main {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 1rem;
	  box-sizing: border-box;
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  padding: 1rem;
	  width: 100%;
	  max-width: 64rem;
	  margin: 0 auto;
	  box-sizing: border-box;
	}
  
	.hero {
	  text-align: center;
	  padding: 4rem 2rem;
	}
  
	img {
	  width: 100px;
	  height: 100px;
	  border-radius: 50%;
	  margin-bottom: 1rem;
	}
  
	h1 {
	  font-size: 3rem;
	  color: var(--color-theme-1);
	  margin-bottom: 1rem;
	}
  
	.tagline {
	  font-size: 1.5rem;
	  color: var(--color-text);
	  margin-bottom: 2rem;
	}
  
	.cta-buttons {
	  display: flex;
	  gap: 1rem;
	  justify-content: center;
	  flex-wrap: wrap;
	}
  
	.button {
	  padding: 0.8rem 2rem;
	  border-radius: 8px;
	  font-weight: bold;
	  text-decoration: none;
	  transition: transform 0.2s;
	  min-width: 150px;
	  text-align: center;
	}
  
	.button:hover {
	  transform: translateY(-2px);
	}
  
	.primary {
	  background-color: var(--color-theme-1);
	  color: white;
	}
  
	.secondary {
	  background-color: var(--color-theme-2);
	  color: white;
	}
  
	.features {
	  padding: 4rem 2rem;
	}
  
	.features h2 {
	  text-align: center;
	  font-size: 2rem;
	  margin-bottom: 3rem;
	}
  
	.feature-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	  gap: 2rem;
	}
  
	.feature-card {
	  background: rgba(255, 255, 255, 0.8);
	  padding: 2rem;
	  border-radius: 12px;
	  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	  text-align: center;
	}
  
	.feature-card h3 {
	  color: var(--color-theme-1);
	  margin-bottom: 1rem;
	  font-size: 1.2rem;
	}
	.cta-buttons{
    display: flex;

    align-content: center;
	}
  
	@media (max-width: 1024px) {
	  h1 {
		font-size: 2.5rem;
	  }
  
	  .tagline {
		font-size: 1.3rem;
	  }
  
	  .cta-buttons {
		gap: 1rem;
	  }
	}

  
	@media (max-width: 768px) {
	  h1 {
		font-size: 2.2rem;
	  }
  
	  .tagline {
		font-size: 1.1rem;
	  }
  
	  .cta-buttons {
		flex-direction: column;
		gap: 1rem;
	  }
  
	  .button {
		width: 100%;
	  }
  
	  .features {
		padding: 3rem 1rem;
	  }
  
	  .features h2 {
		font-size: 1.5rem;
	  }
	}
  
	@media (max-width: 480px) {
	  h1 {
		font-size: 1.8rem;
	  }
  
	  .tagline {
		font-size: 1rem;
	  }
  
	  .features h2 {
		font-size: 1.2rem;
	  }
  
	  .feature-card h3 {
		font-size: 1rem;
	  }
  
	  img {
		width: 80px;
		height: 80px;
	  }
  
	  .cta-buttons {
		gap: 0.5rem;
	  }
  
	  .button {
		font-size: 1rem;
	  }
	}
	@media (max-width:430px){
		
}
  </style>
  