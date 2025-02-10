// Date & Time For Dashboard

function showDateTime() {
  const dateNow = new Date();
  let hours = dateNow.getHours();
  let minutes = dateNow.getMinutes();
  let seconds = dateNow.getSeconds();
  let year = dateNow.getFullYear();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();
  const daysText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = daysText[dateNow.getDay()];

  // تحديد AM أو PM وتحويل الساعة إلى نظام 12 ساعة
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // تحويل 0 إلى 12 صباحًا

  // تنسيق الأرقام بحيث تظهر بصيغة 01 بدلاً من 1
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");
  day = day.toString().padStart(2, "0");

  // تحديث العناصر دفعة واحدة لتحسين الأداء
  document.querySelector(".dash-title-box").innerHTML = `
        <div class="box-time">
            <div class="clock">
              <div class="time-icon">
                  <i class="fa-regular fa-clock fa-fw"></i>
                  <span class="des">Time</span>
              </div><span class="dot"> : </span>
              <span class="hours">${hours}</span>
              <span class="dot"> : </span>
              <span class="minutes">${minutes}</span>
              <span class="dot"> : </span>
              <span class="seconds">${seconds}</span>
              <span class="period">${period}</span>
            </div>
            <div class="date">
              <div class="date-icon">
               <i class="fa-regular fa-calendar-days fa-fw"></i>
               <span class="des">Date :</span>
              </div>
              <span class="tod-text">${today}</span> -
              <span class="year">${day}</span> /
              <span class="month">${month}</span> /
              <span class="today">${year}</span>
            </div>
        </div>
            <div class="box-manage">
            <button class="manage">Manage</button>
            <button class="add-customer">Add Customer</button>
            </div>
    `;
}

// تشغيل الوظيفة عند تحميل الصفحة وتحديثها كل ثانية
window.addEventListener("load", () => {
  showDateTime(); // تشغيلها فورًا حتى لا يكون هناك تأخير
  setInterval(showDateTime, 1000);
});

// ============================================================================== //

// Function Strat Counter From Zero To Target
let isCounting = false;

function startCounter(numbersCount) {
  if (isCounting) return; // If counting is in progress, do nothing

  isCounting = true; // Start counting
  numbersCount.forEach((n) => {
    let startCount = 0;
    let endCount = parseInt(n.dataset.number); // Get the target count from data-number

    let counter = setInterval(() => {
      if (startCount < endCount) {
        startCount += Math.ceil((endCount - startCount) / 10); // Adjust the speed of counting
        n.textContent = startCount.toLocaleString();
      } else {
        n.textContent = endCount.toLocaleString();
        clearInterval(counter); // Stop counting once reached the target
      }
    }, 50); // Adjust the interval for smoother animation
  });
}

let numberStats = document.querySelectorAll(".dash-stats-box .info .number");
let arrayOfNumbersStats = Array.from(numberStats);

window.addEventListener("load", () => {
  startCounter(arrayOfNumbersStats);
});

// ============================================================================== //

// Refresh Data Of Website Visitors

let exportBtn = document.querySelector(".dash-website-visitors .export");
let ContentWebVis = document.querySelector(".dash-website-visitors .load");
let percentageNumber = document.querySelectorAll(
  ".dash-website-visitors .percentage > span"
);
let percentageNumberArray = Array.from(percentageNumber);

exportBtn.addEventListener("click", () => {
  ContentWebVis.classList.toggle("refresh");
  percentageNumberArray.forEach((num) => {
    num.textContent = "0%"; // ابدأ من 0%
    let counter = setInterval(() => {
      let currentValue = parseInt(num.textContent); // القيمة الحالية
      let targetValue = parseInt(num.dataset.number); // القيمة المستهدفة من data-number
      if (currentValue < targetValue) {
        num.textContent = currentValue + 1 + "%"; // زيادة القيمة تدريجياً
      } else {
        clearInterval(counter); // التوقف عند الوصول إلى القيمة المستهدفة
      }
    }, 3500 / num.dataset.number); // تحديد السرعة بناءً على الرقم المستهدف
  });
});

// ============================================================================== //

// Animation Chart
let exportChartBtn = document.querySelector(".dash-user-statistics .export");
let chart = document.querySelector(".dash-user-statistics .chart");

exportChartBtn.addEventListener("click", () => {
  chart.classList.toggle("active");
});

// ============================================================================== //

// Start Latest Tasks

const tasks = Array.from(document.querySelectorAll(".task"));
const progressSpan = document.getElementById("tasks-progress");
const uncheckTaskBtns = Array.from(
  document.querySelectorAll(".task .uncheck-btn")
);
const checkTaskBtns = Array.from(document.querySelectorAll(".task .check-btn"));
const deleteTaskBtns = Array.from(
  document.querySelectorAll(".task .delete-btn")
);

function taskIcons() {
  tasks.map((task) => {
    if (task.classList.contains("done")) {
      task.children[1].style.display = "inline-block";
      task.children[2].style.display = "none";
    } else {
      task.children[1].style.display = "none";
      task.children[2].style.display = "inline-block";
    }
  });
}

function updateDoneTasksNumber() {
  progressSpan.innerHTML = `${
    Array.from(document.querySelectorAll(".task.done")).length
  }/${Array.from(document.querySelectorAll(".task")).length} Completed`;

  if (
    Array.from(document.querySelectorAll(".task.done")).length ===
    Array.from(document.querySelectorAll(".task")).length
  ) {
    progressSpan.classList.add("good");
  } else {
    if (progressSpan.classList.contains("good"))
      progressSpan.classList.remove("good");
  }
}

taskIcons();
updateDoneTasksNumber();

uncheckTaskBtns.map((uncheckBtn) => {
  uncheckBtn.addEventListener("click", () => {
    uncheckBtn.parentElement.classList.remove("done");
    taskIcons();
    updateDoneTasksNumber();
  });
});

checkTaskBtns.map((checkBtn) => {
  checkBtn.addEventListener("click", () => {
    checkBtn.parentElement.classList.add("done");
    taskIcons();
    updateDoneTasksNumber();
  });
});

deleteTaskBtns.map((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
        deleteBtn.parentElement.remove();
        updateDoneTasksNumber();
      }
    });
  });
});

// End Latest Tasks
