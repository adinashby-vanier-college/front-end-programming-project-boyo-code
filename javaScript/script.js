// JavaScript for ArtVault Critique Hub

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Countdown Timer
  const countdownElements = document.querySelectorAll(".timer");
  countdownElements.forEach(timer => {
    const countdownDate = new Date().getTime() + 86400000; // 24 hours from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        timer.textContent = "Released!";
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  });

  // Form Submission Alert
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for reaching out! We will get back to you soon.");
      contactForm.reset();
    });
  }

  // Header background change on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

  // artist.js

  document.addEventListener("DOMContentLoaded", () => {
      const artworkForm = document.getElementById("artwork-form");
      const artworkList = document.getElementById("artwork-list");
    
      // Handle artwork submission
      artworkForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // Retrieve form data
        const artTitle = document.getElementById("art-title").value;
        const artDescription = document.getElementById("art-description").value;
        const releaseDate = document.getElementById("release-date").value;
        const artFile = document.getElementById("art-file").files[0];
    
        if (!artFile) {
          alert("Please upload an artwork file.");
          return;
        }
    
        // Create a FileReader to preview the image
        const reader = new FileReader();
        reader.onload = function () {
          const imageSrc = reader.result;
          addArtworkToList(artTitle, artDescription, releaseDate, imageSrc);
    
          // Reset the form
          artworkForm.reset();
        };
    
        reader.readAsDataURL(artFile);
      });
    
      // Function to add uploaded artwork to the list
      function addArtworkToList(title, description, releaseDate, imageSrc) {
        const listItem = document.createElement("li");
        listItem.classList.add("art-item");
    
        listItem.innerHTML = `
          <img src="${imageSrc}" alt="${title}" class="art-thumbnail">
          <div class="art-details">
            <h4>${title}</h4>
            <p>${description}</p>
            <p><strong>Release Date:</strong> ${releaseDate}</p>
          </div>
        `;
    
        artworkList.appendChild(listItem);
      }
    });

     // JavaScript to handle critique submissions
  document.getElementById('submit-critique').addEventListener('click', function () {
      const ratings = {
        lightShadow: document.getElementById('light-shadow').value,
        shapeForm: document.getElementById('shape-form').value,
        color: document.getElementById('color').value,
        unityHarmony: document.getElementById('unity-harmony').value,
        intellectualEngagement: document.getElementById('intellectual-engagement').value,
        craftsmanship: document.getElementById('craftsmanship').value,
        storyEmotion: document.getElementById('story-emotion').value,
        culturalContext: document.getElementById('cultural-context').value,
        skill: document.getElementById('skill').value,
      };

      const critiqueText = document.getElementById('new-critique').value.trim();
      if (!critiqueText) {
        alert('Please write your critique before submitting.');
        return;
      }

      const critiqueList = document.getElementById('critique-list');
      const critiqueItem = document.createElement('li');
      critiqueItem.innerHTML = `
        <p><strong>Ratings:</strong></p>
        <ul>
          <li>Light and Shadow: ${ratings.lightShadow}</li>
          <li>Shape and Form: ${ratings.shapeForm}</li>
          <li>Color: ${ratings.color}</li>
          <li>Unity and Harmony: ${ratings.unityHarmony}</li>
          <li>Intellectual Engagement: ${ratings.intellectualEngagement}</li>
          <li>Craftsmanship: ${ratings.craftsmanship}</li>
          <li>Story or Emotion: ${ratings.storyEmotion}</li>
          <li>Cultural or Historical Context: ${ratings.culturalContext}</li>
          <li>Skill: ${ratings.skill}</li>
        </ul>
        <p><strong>Feedback:</strong> ${critiqueText}</p>
      `;

      critiqueList.appendChild(critiqueItem);

      document.querySelectorAll('.critique-ratings input').forEach(input => input.value = '');
      document.getElementById('new-critique').value = '';
    });
