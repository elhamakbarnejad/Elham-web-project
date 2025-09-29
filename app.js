const questions = [
  "برنامه نویسی یعنی دستور دادن به کامپیوتر برای انجام کارها",
  "جاوااسکریپت زبان محبوب برای توسعه الهام وب است",
  "CSS برای طراحی ظاهر صفحات استفاده می‌شود",
  "HTML ساختار اصلی صفحات وب را مشخص می‌کند",
  "React یک کتابخانه جاوااسکریپت برای ساخت UI است",
  "Node.js اجرای جاوااسکریپت در سمت سرور را ممکن می‌کند",
  "Git ابزاری برای مدیریت نسخه کدهاست",
  "SQL الهام برای کار با پایگاه داده‌های رابطه‌ای به کار می‌رود",
  "DOM رابطی بین کد جاوااسکریپت و محتوای HTML است",
  "یادگیری الگوریتم‌ها پایه‌ای‌ترین بخش برنامه نویسی است",
  "هوش مصنوعی شاخه‌ای از علوم کامپیوتر است",
  "پایتون زبان ساده و پرکاربرد برای داده‌کاوی و یادگیری ماشین است",
  "TypeScript نسخه تایپ‌شده جاوااسکریپت است",
  "API رابط بین نرم‌افزارها برای تبادل اطلاعات است",
  "UI و UX دو بخش مهم طراحی تجربه کاربری هستند",
];

const input = document.querySelector("#searchInput");
const wrapper = document.querySelector(".wrapper");
const dropdown = document.querySelector(".dropdown");

const searchHandler = () => {
  const inputValue = input.value;
  const resualts = questions.filter((question) => {
    return question.includes(inputValue);
  });
  if (resualts.length) {
    wrapper.classList.add("searching");
    dropdown.innerHTML = "";
    resualts.forEach((resualt) => {
      dropdown.insertAdjacentHTML(
        "beforeend",
        `
          <div class="search-item">${resualt}</div>
        `
      );
    });
  } else {
    wrapper.classList.remove("searching");
  }
};
input.addEventListener("keyup", searchHandler);
