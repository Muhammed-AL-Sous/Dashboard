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
