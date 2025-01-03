<div class="hero">
    <img class="one" src="edwin.png" alt="logo">
    <div class="text">
        <h1>Edwins Dev Space</h1>
        <p class="tagline">Your Linux Development Environment in the Cloud</p>
    </div>
</div>
<div class="feature-grid">
    <div class="feature-card">
      <h3>Ubuntu</h3>
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
<style>
  .hero {
    display: flex;
    align-items: center; /* Vertically align items */
    justify-content: center; /* Horizontally center the content */
    gap: 2rem; /* Space between image and text */
    text-align: center;
    padding: 2rem; /* Add padding for spacing */
    flex-wrap: wrap; /* Allows the content to wrap on smaller screens */
  }

  .one {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    object-fit: cover; /* Ensures the image fits within the circle */
    margin-bottom: 1rem; /* Adds space below the image */
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 1.2rem;
    color: #777; /* Slightly lighter text color */
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

  /* Media Query for Tablets (max-width: 1024px) */
  @media (max-width: 1024px) {
    .hero {
      flex-direction: column; /* Stack the image and text vertically */
      gap: 1rem; /* Reduce space between image and text */
    }

    .one {
      width: 8rem;
      height: 8rem; /* Smaller size on tablets */
    }

    h1 {
      font-size: 2rem; /* Smaller heading size */
    }

    .tagline {
      font-size: 1rem; /* Smaller tagline size */
    }
  }

  /* Media Query for Mobile Devices (max-width: 768px) */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column; /* Stack vertically */
      gap: 1rem; /* Reduce gap */
    }

    .one {
      width: 7rem;
      height: 7rem; /* Even smaller size on mobile */
    }

    h1 {
      font-size: 1.8rem; /* Even smaller heading size */
    }

    .tagline {
      font-size: 0.9rem; /* Smaller tagline size */
    }
  }

  /* Media Query for Small Mobile Devices (max-width: 480px) */
  @media (max-width: 480px) {
    .hero {
      padding: 1rem; /* Reduce padding on small screens */
    }

    h1 {
      font-size: 1.5rem; /* Very small heading size */
    }

    .tagline {
      font-size: 0.8rem; /* Small tagline size */
    }

    .one {
      width: 6rem;
      height: 6rem; /* Even smaller image */
    }
    
  }
</style>
