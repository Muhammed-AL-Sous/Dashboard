// Select Elements

let themeCheckBox = document.querySelector(".sidebar-check .toggle-checkbox");

// ===================================================================================== //

// Switch Dark And Light Mode

/*
The matchMedia interface is used to detect the user's preference for the Dark Mode
appearance of the system,
update a specific Attribute on the body element 
and store the setting in localStorage
*/

window.addEventListener("load", () => {
  if (window.localStorage.theme) {
    if (window.localStorage.theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      themeCheckBox.checked = true;
    } else {
      document.body.setAttribute("data-theme", "light");
      themeCheckBox.checked = false;
    }
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.setAttribute("data-theme", "dark");
      themeCheckBox.checked = true;
      window.localStorage.theme = "dark";
    } else {
      document.body.setAttribute("data-theme", "light");
      themeCheckBox.checked = false;
      window.localStorage.theme = "light";
    }
  }
});

themeCheckBox.addEventListener("change", (e) => {
  document.body.setAttribute("data-theme", e.target.checked ? "dark" : "light");
  e.target.checked
    ? (window.localStorage.theme = "dark")
    : (window.localStorage.theme = "light");
});

// ===================================================================================== //

// Show - Hide Notifications & Messages & Profile Details

let notificationsBtn = document.querySelector(".noti-btn");
let notificationsList = document.querySelector(".noti-list");

notificationsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  notificationsList.classList.toggle("show-noti");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".noti-btn") && !notificationsList.contains(e.target)) {
    if (notificationsList.classList.contains("show-noti")) {
      notificationsList.classList.remove("show-noti");
    }
  }
});
