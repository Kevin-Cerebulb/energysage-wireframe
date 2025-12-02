/**
 * EnergySage.ai - Shared JavaScript
 * Common functionality for all pages
 */

// ========================================
// Theme Management
// ========================================
function toggleTheme() {
  const isDark = document.getElementById("themeToggle").checked;

  if (isDark) {
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light-mode");
    localStorage.setItem("energysage-theme", "dark");
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light-mode");
    localStorage.setItem("energysage-theme", "light");
    updateThemeIcons(false);
  }

  // Trigger custom event for page-specific updates
  window.dispatchEvent(new CustomEvent("themeChanged", { detail: { isDark } }));
}

function updateThemeIcons(isDark) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    } else {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    }
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("energysage-theme");
  const themeToggle = document.getElementById("themeToggle");

  // Default to dark mode if no saved preference
  if (savedTheme === "light") {
    // Only go light if explicitly saved as light
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light-mode");
    if (themeToggle) themeToggle.checked = false;
    updateThemeIcons(false);
  } else {
    // Dark mode is default
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light-mode");
    if (themeToggle) themeToggle.checked = true;
    updateThemeIcons(true);
  }
}

// ========================================
// Recommendations Drawer
// ========================================
function toggleRecsDrawer() {
  const drawer = document.getElementById("recs-drawer");
  const overlay = document.getElementById("recs-overlay");

  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains("open");

  if (isOpen) {
    drawer.classList.remove("open");
    drawer.style.transform = "translateX(100%)";
    overlay.classList.add("hidden");
  } else {
    drawer.classList.add("open");
    drawer.style.transform = "translateX(0)";
    overlay.classList.remove("hidden");
  }
}

function closeRecsDrawer() {
  const drawer = document.getElementById("recs-drawer");
  const overlay = document.getElementById("recs-overlay");

  if (drawer) {
    drawer.classList.remove("open");
    drawer.style.transform = "translateX(100%)";
  }
  if (overlay) {
    overlay.classList.add("hidden");
  }
}

// ========================================
// Live Time Display
// ========================================
function updateLiveTime() {
  const timeEl = document.getElementById("live-time");
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toTimeString().slice(0, 8);
  }
}

function startLiveTime() {
  updateLiveTime();
  setInterval(updateLiveTime, 1000);
}

// ========================================
// Dropdown Management
// ========================================
function toggleDropdown(type) {
  // Close all other dropdowns
  document.querySelectorAll(".dropdown-menu").forEach((d) => {
    if (d.id !== type + "-dropdown") d.classList.remove("open");
  });

  // Close date picker if open
  const datePicker = document.getElementById("date-dropdown");
  if (datePicker) datePicker.classList.remove("open");

  // Toggle target dropdown
  const targetDropdown = document.getElementById(type + "-dropdown");
  if (targetDropdown) {
    targetDropdown.classList.toggle("open");
  }
}

function toggleSitesDropdown() {
  const dropdown = document.getElementById("sites-dropdown");
  if (dropdown) {
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("open");
  }
}

// ========================================
// Sites Dropdown Functions
// ========================================
function toggleSiteItem(el, siteId) {
  el.classList.toggle("selected");
  const checkbox = el.querySelector(".checkbox");

  if (el.classList.contains("selected")) {
    checkbox.classList.add("checked", "bg-accent-green");
    checkbox.innerHTML =
      '<svg class="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  } else {
    checkbox.classList.remove("checked", "bg-accent-green");
    checkbox.innerHTML = "";
  }

  updateSitesCount();
}

function toggleSite(el, siteId) {
  el.classList.toggle("selected");
  const checkbox = el.querySelector(".checkbox");

  if (el.classList.contains("selected")) {
    checkbox.classList.add("checked");
    checkbox.innerHTML =
      '<svg class="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  } else {
    checkbox.classList.remove("checked");
    checkbox.innerHTML = "";
  }

  updateSitesCount();
}

function selectAllSites() {
  document
    .querySelectorAll("#sites-dropdown .dropdown-item")
    .forEach((item) => {
      if (!item.classList.contains("selected")) {
        item.classList.add("selected");
        const checkbox = item.querySelector(".checkbox");
        if (checkbox) {
          checkbox.classList.add("checked", "bg-accent-green");
          checkbox.innerHTML =
            '<svg class="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
        }
      }
    });
  updateSitesCount();
}

function clearAllSites() {
  document
    .querySelectorAll("#sites-dropdown .dropdown-item")
    .forEach((item) => {
      item.classList.remove("selected");
      const checkbox = item.querySelector(".checkbox");
      if (checkbox) {
        checkbox.classList.remove("checked", "bg-accent-green");
        checkbox.innerHTML = "";
      }
    });
  updateSitesCount();
}

function updateSitesCount() {
  const count = document.querySelectorAll(
    "#sites-dropdown .dropdown-item.selected"
  ).length;
  const countEl = document.getElementById("sites-selected");
  if (countEl) countEl.textContent = count;

  // Also update sites-count if exists
  const sitesCount = document.getElementById("sites-count");
  if (sitesCount) sitesCount.textContent = count + " Sites";
}

// ========================================
// Models Dropdown Functions
// ========================================
function toggleModel(el) {
  el.classList.toggle("selected");
  const checkbox = el.querySelector(".checkbox");

  if (el.classList.contains("selected")) {
    checkbox.classList.add("checked");
    checkbox.innerHTML =
      '<svg class="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  } else {
    checkbox.classList.remove("checked");
    checkbox.innerHTML = "";
  }

  updateModelsCount();
}

function selectAllModels() {
  document
    .querySelectorAll("#models-dropdown .dropdown-item")
    .forEach((item) => {
      item.classList.add("selected");
      const checkbox = item.querySelector(".checkbox");
      if (checkbox) {
        checkbox.classList.add("checked");
        checkbox.innerHTML =
          '<svg class="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
      }
    });
  updateModelsCount();
}

function clearAllModels() {
  document
    .querySelectorAll("#models-dropdown .dropdown-item")
    .forEach((item) => {
      item.classList.remove("selected");
      const checkbox = item.querySelector(".checkbox");
      if (checkbox) {
        checkbox.classList.remove("checked");
        checkbox.innerHTML = "";
      }
    });
  updateModelsCount();
}

function updateModelsCount() {
  const count = document.querySelectorAll(
    "#models-dropdown .dropdown-item.selected"
  ).length;
  const countEl = document.getElementById("models-selected");
  if (countEl) countEl.textContent = count;

  const modelsCount = document.getElementById("models-count");
  if (modelsCount) modelsCount.textContent = count + " Models";
}

// ========================================
// Global Event Listeners
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  initTheme();

  // Start live time
  startLiveTime();
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Toggle theme with Ctrl+D or Cmd+D
  if (e.key === "d" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.checked = !themeToggle.checked;
      toggleTheme();
    }
  }

  // Close drawers with Escape
  if (e.key === "Escape") {
    closeRecsDrawer();

    // Close site panel if exists
    const sitePanel = document.getElementById("site-panel");
    if (sitePanel) sitePanel.classList.remove("open");

    // Close dropdowns
    document
      .querySelectorAll(".dropdown-menu")
      .forEach((d) => d.classList.remove("open"));

    const sitesDropdown = document.getElementById("sites-dropdown");
    if (sitesDropdown) sitesDropdown.classList.add("hidden");
  }

  // Toggle map with Ctrl+M (Asset Summary)
  if (e.key === "m" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    if (typeof toggleMap === "function") {
      toggleMap();
    }
  }
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  // Close dropdown menus
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((d) => {
      d.classList.remove("open");
      d.classList.add("hidden");
    });
  }

  // Close date picker
  if (!e.target.closest(".date-picker")) {
    const datePicker = document.getElementById("date-dropdown");
    if (datePicker) datePicker.classList.remove("open");
  }
});

// ========================================
// Utility Functions
// ========================================
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString();
}

function getStatusColor(status) {
  const colors = {
    running: "#00dc82",
    stopped: "#ff5252",
    ready: "#3b82f6",
    notready: "#f59e0b",
  };
  return colors[status] || "#737373";
}

function getStatusLabel(status) {
  const labels = {
    running: "Running",
    stopped: "Stopped",
    ready: "Ready",
    notready: "Not Ready",
  };
  return labels[status] || status;
}
