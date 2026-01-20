// Highlight project rows on page load
window.onload = function () {
  highlightProjects();  // Always highlight the projects
  showLabsAndProjects(); // Show all labs and projects by default
};

// Handle dropdown selection
function handleSelection() {
  const value = document.getElementById("labSelector").value;

  if (value === "all") {
    showLabsAndProjects(); // Show both labs and projects
  } 
  else if (value === "projects") {
    showProjectsOnly(); // Show only projects
  }
  else {
    const [min, max] = value.split("-").map(Number);
    showLabs(min, max); // Show labs in the specified range
  }
}

// Show both labs and projects (default when 'all' is selected)
function showLabsAndProjects() {
  const labRows = document.querySelectorAll("tr[id^='lab']");
  const projectRows = document.querySelectorAll("tr[id^='project']");

  // Show all labs
  labRows.forEach(row => row.style.display = "");

  // Show all projects (always highlighted)
  projectRows.forEach(row => row.style.display = "");
}

// Show only labs in a numeric range
function showLabs(min, max) {
  const labRows = document.querySelectorAll("tr[id^='lab']");
  const projectRows = document.querySelectorAll("tr[id^='project']");

  // Hide all projects
  projectRows.forEach(row => row.style.display = "none");

  // Hide all labs first
  labRows.forEach(row => row.style.display = "none");

  // Show labs within the selected range
  for (let i = min; i <= max; i++) {
    const row = document.getElementById(`lab${i}`);
    if (row) row.style.display = "";
  }
}

// Show ONLY project rows
function showProjectsOnly() {
  const labRows = document.querySelectorAll("tr[id^='lab']");
  const projectRows = document.querySelectorAll("tr[id^='project']");

  // Hide all labs
  labRows.forEach(row => row.style.display = "none");

  // Show all projects (always highlighted)
  projectRows.forEach(row => row.style.display = "");
}

// Highlight the project rows (1–4) — Always highlighted
function highlightProjects() {
  const projectRows = document.querySelectorAll("tr[id^='project']");

  projectRows.forEach(row => {
    // Apply the highlight (yellow background and bold text)
    row.style.backgroundColor = "yellow";
    row.style.fontWeight = "bold";
  });
}