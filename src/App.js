.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* App.css */
body {
  background-color: #f8f9fa;
}

h1 {
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
  color: #343a40;
}

.card {
  margin-bottom: 20px;
}
.historical-balance-box {
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 5px;
  max-width: 100%; /* Ensures it stays within bounds */
  box-sizing: border-box;
}

.flex-grow-1 {
  flex-basis: 0; /* Ensures that the element grows as necessary */
  min-width: 150px; /* Ensures that the date pickers are at least wide enough */
}

.me-2 {
  margin-right: 10px; /* Adds space between the date pickers and button */
}

button {
  min-width: 100px; /* Ensures the button has a minimum width */
}

