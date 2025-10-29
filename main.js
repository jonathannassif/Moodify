document.addEventListener("DOMContentLoaded", function () {
  const calmBtn = document.getElementById("calmBtn");
  const quote = document.getElementById("quote");

  // Quotes for different emotions
  const quotes = {
    angry: [
      "Peace begins with a deep breath.",
      "Let go. You deserve calm.",
      "You can't calm the storm, so stop trying. Calm yourself, the storm will pass.",
      "Anger is a signal, not a solution.",
      "Take a step back and breathe. Your peace is worth it.",
    ],
    anxious: [
      "Anxiety is like a rocking chair. It gives you something to do, but it doesn't get you very far.",
      "You are stronger than your anxiety.",
      "Breathe in peace, breathe out worry.",
      "This too shall pass.",
      "One breath at a time.",
    ],
    happy: [
      "Happiness is not something ready made. It comes from your own actions.",
      "The purpose of life is to rediscover your gift. The meaning of life is to give it away.",
      "Joy is the simplest form of gratitude.",
      "Happiness is when what you think, what you say, and what you do are in harmony.",
      "Spread your happiness like confetti!",
    ],
    lost: [
      "Not all those who wander are lost.",
      "Sometimes the best way to find yourself is to lose yourself in the service of others.",
      "The journey of a thousand miles begins with a single step.",
      "You are exactly where you need to be right now.",
      "Trust the process.",
    ],
    sad: [
      "Tears come from the heart and not from the brain.",
      "The way sadness works is one of the strange riddles of the world.",
      "It's okay to not be okay.",
      "Sadness flies away on the wings of time.",
      "Healing takes time, and that's okay.",
    ],
    stressed: [
      "The greatest weapon against stress is our ability to choose one thought over another.",
      "Stress is like spice - in the right proportion it enhances the flavor of a dish. Too little, it's bland. Too much, it's inedible.",
      "You must learn to let go. Release the stress. You were never in control anyway.",
      "Calmness is the cradle of power.",
      "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
    ],
  };

  // Determine current page based on URL or body class
  let currentEmotion = "angry"; // default
  const path = window.location.pathname;
  if (path.includes("anxious")) currentEmotion = "anxious";
  else if (path.includes("happy")) currentEmotion = "happy";
  else if (path.includes("lost")) currentEmotion = "lost";
  else if (path.includes("sad")) currentEmotion = "sad";
  else if (path.includes("stressed")) currentEmotion = "stressed";

  if (calmBtn && quote) {
    calmBtn.addEventListener("click", () => {
      const emotionQuotes = quotes[currentEmotion] || quotes.angry;
      const randomQuote =
        emotionQuotes[Math.floor(Math.random() * emotionQuotes.length)];
      quote.textContent = randomQuote;
      quote.style.display = "block";
      // Optional: Add a subtle animation
      quote.style.opacity = "0";
      setTimeout(() => {
        quote.style.transition = "opacity 0.5s";
        quote.style.opacity = "1";
      }, 10);
    });
  }

  // Mood Journal functionality (basic implementation)
  const journalEntries = JSON.parse(
    localStorage.getItem("moodJournal") || "[]"
  );

  // Function to save mood entry
  window.saveMoodEntry = function (mood, note) {
    const entry = {
      date: new Date().toISOString(),
      mood: mood,
      note: note || "",
    };
    journalEntries.push(entry);
    localStorage.setItem("moodJournal", JSON.stringify(journalEntries));
  };

  // Function to get mood history
  window.getMoodHistory = function () {
    return journalEntries;
  };

  // Journal functionality for index.html
  const moodForm = document.getElementById("moodForm");
  const entriesList = document.getElementById("entriesList");

  if (moodForm) {
    moodForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const mood = document.getElementById("moodSelect").value;
      const note = document.getElementById("moodNote").value;

      if (mood) {
        saveMoodEntry(mood, note);
        displayEntries();
        moodForm.reset();
        alert("Mood entry saved!");
      }
    });
  }

  function displayEntries() {
    if (!entriesList) return;

    const entries = getMoodHistory();
    if (entries.length === 0) {
      entriesList.innerHTML =
        '<p class="text-muted">No entries yet. Start logging your moods!</p>';
      return;
    }

    entriesList.innerHTML = "";
    entries
      .slice(-5)
      .reverse()
      .forEach((entry) => {
        const date = new Date(entry.date).toLocaleDateString();
        const entryDiv = document.createElement("div");
        entryDiv.className = "journal-entry";
        entryDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <strong>${
              entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)
            }</strong>
            <small class="text-muted d-block">${date}</small>
            ${entry.note ? `<p class="mb-0 mt-1">${entry.note}</p>` : ""}
          </div>
        </div>
      `;
        entriesList.appendChild(entryDiv);
      });
  }

  // Display entries on page load
  if (entriesList) {
    displayEntries();
  }

  // Chart functionality
  let moodChart = null;

  function createMoodChart() {
    const entries = getMoodHistory();
    if (entries.length === 0) return;

    const ctx = document.getElementById("moodChart");
    if (!ctx) return;

    // Prepare data for chart (last 14 days)
    const last14Days = entries.slice(-14);
    const moodCounts = {};
    const dates = [];

    last14Days.forEach((entry) => {
      const date = new Date(entry.date).toLocaleDateString();
      if (!dates.includes(date)) {
        dates.push(date);
      }
      moodCounts[date] = moodCounts[date] || {};
      moodCounts[date][entry.mood] = (moodCounts[date][entry.mood] || 0) + 1;
    });

    // Create datasets for each mood
    const moods = ["happy", "sad", "angry", "anxious", "stressed", "lost"];
    const datasets = moods.map((mood) => {
      const data = dates.map((date) => moodCounts[date]?.[mood] || 0);
      return {
        label: mood.charAt(0).toUpperCase() + mood.slice(1),
        data: data,
        backgroundColor: getMoodColor(mood),
        borderColor: getMoodColor(mood),
        borderWidth: 1,
        fill: false,
        tension: 0.1,
      };
    });

    if (moodChart) {
      moodChart.destroy();
    }

    moodChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Mood Trends (Last 14 Days)",
          },
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    });
  }

  function getMoodColor(mood) {
    const colors = {
      happy: "#ffe066",
      sad: "#a5d8ff",
      angry: "#ffa8a8",
      anxious: "#d0bfff",
      stressed: "#ffd8a8",
      lost: "#dee2e6",
    };
    return colors[mood] || "#ccc";
  }

  // Update chart when entries change
  function updateChart() {
    if (document.getElementById("moodChart")) {
      createMoodChart();
    }
  }

  // Override displayEntries to also update chart
  const originalDisplayEntries = displayEntries;
  displayEntries = function () {
    originalDisplayEntries();
    updateChart();
  };

  // Initial chart creation
  if (document.getElementById("moodChart")) {
    createMoodChart();
  }
});
