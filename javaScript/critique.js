// Get the query string to identify the artwork
const params = new URLSearchParams(window.location.search);
const artId = params.get('art');

// Load artwork and critiques
const loadArtwork = () => {
  // Simulated artwork data
  const artworks = {
    1: { title: "Art Title 1", image: "the.jpeg" },
    2: { title: "Art Title 2", image: "th.jpeg" }
  };

  const artwork = artworks[artId];
  if (artwork) {
    document.getElementById('art-image').src = artwork.image;
    document.getElementById('art-title').textContent = `Title: ${artwork.title}`;
  }
};

const loadCritiques = () => {
  // Simulate loading critiques (can be replaced with an API call)
  const critiques = [
    { artId: "1", text: "Beautiful use of colors!" },
    { artId: "2", text: "Amazing detail in the background!" }
  ];

  const filteredCritiques = critiques.filter(c => c.artId === artId);
  const critiqueList = document.getElementById('critique-list');

  filteredCritiques.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c.text;
    critiqueList.appendChild(li);
  });
};

// Submit a new critique
const submitCritique = () => {
  const critiqueInput = document.getElementById('new-critique');
  const critiqueText = critiqueInput.value;

  if (critiqueText.trim()) {
    const li = document.createElement('li');
    li.textContent = critiqueText;
    document.getElementById('critique-list').appendChild(li);
    critiqueInput.value = ""; // Clear the input
  }
};

// Initialize
document.getElementById('submit-critique').addEventListener('click', submitCritique);
loadArtwork();
loadCritiques();
