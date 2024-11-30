// Countdown Timer Functionality
function startCountdown(endDate, element) {
    const countdownElement = document.querySelector(element);
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      if (distance < 0) {
        countdownElement.textContent = "Art Piece Released!";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    const interval = setInterval(updateCountdown, 1000);
  }
  
  // Example usage
  const releaseDate = new Date("2024-12-25T00:00:00").getTime();
  startCountdown(releaseDate, ".timer");
  