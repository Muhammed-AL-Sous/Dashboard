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
let notiBtn = document.querySelector(".noti-btn");
let notiList = document.querySelector(".noti-container");
let msgBtn = document.querySelector(".message-btn");
let msgList = document.querySelector(".msg-container");
let quickAcBtn = document.querySelector(".quick-action-btn");
let quickAcList = document.querySelector(".quickAc-container");
let profMenuBtn = document.querySelector(".person-title");
let profMenuList = document.querySelector(".profile-menu-container");

// Function Close All Opened List In Header Before Toggle Another List
function closeAllLists() {
  notiList.classList.remove("show-noti");
  msgList.classList.remove("show-msg");
  quickAcList.classList.remove("show-quickAc");
  profMenuList.classList.remove("show-prof-menu");
}

// Function Toggle Button In Header
function toggleBtn(btn, list, className) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // إذا كانت القائمة مفتوحة بالفعل، أغلقها فقط
    if (list.classList.contains(className)) {
      list.classList.remove(className);
    } else {
      closeAllLists(); // إغلاق جميع القوائم قبل فتح القائمة الجديدة
      list.classList.add(className);
    }
  });
}

// Funtion Close Current List When Click At Any Where
function closeList(btnSelector, list, className) {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(`.${btnSelector}`) && !list.contains(e.target)) {
      list.classList.remove(className);
    }
  });
}

// Trigger Functions Notifications
toggleBtn(notiBtn, notiList, "show-noti");
closeList("noti-btn", notiList, "show-noti");

// Trigger Functions Messages
toggleBtn(msgBtn, msgList, "show-msg");
closeList("message-btn", msgList, "show-msg");

// Trigger Functions Quick Action List
toggleBtn(quickAcBtn, quickAcList, "show-quickAc");
closeList("quick-action-btn", quickAcList, "show-quickAc");

// Trigger Functions Profile List
toggleBtn(profMenuBtn, profMenuList, "show-prof-menu");
closeList("person-title", profMenuList, "show-prof-menu");

// ===================================================================================== //
