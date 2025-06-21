const links = document.querySelectorAll(".nav-item .nav-link"),
  sections = document.querySelectorAll(".section"),
  workLis = document.querySelectorAll(".work .work-list li"),
  workCols = document.querySelectorAll(".work .row .col-lg-4"),
  burgerIcon = document.querySelector(".burger-icon"),
  ul = document.querySelector(".navbar .container .navbar-nav"),
  modeIcon = document.querySelector(".mode .fa-solid"),
  form = document.querySelector("#form"),
  submitBtn = document.querySelector("#submit-btn"),
  nameInput = document.querySelector("#name"),
  emailInput = document.querySelector("#email"),
  subjectInput = document.querySelector("#subject"),
  messageInput = document.querySelector("#message");
let moodStatus;
function addActiveClass() {
  let e = window.scrollY;
  sections.forEach((s) => {
    let t = s.offsetTop,
      o = s.clientHeight;
    e >= t - 200 && e < t + o
      ? (links.forEach((e) => {
          e.getAttribute("href") === `#${s.id}`
            ? e.classList.add("active")
            : e.classList.remove("active");
        }),
        s.classList.add("active"))
      : s.classList.remove("active");
  });
}
(window.onscroll = () => {
  document.querySelector(".navbar").classList.add("active");
}),
  window.addEventListener("scroll", addActiveClass),
  links.forEach((e) => {
    e.addEventListener("click", (e) => {
      links.forEach((e) => e.classList.remove("active")),
        e.target.classList.add("active"),
        document
          .querySelector("." + e.target.dataset.sec)
          .scrollIntoView({ behavior: "smooth" });
    });
  });
const goUpBtn = document.querySelector(".go-up");
window.addEventListener("scroll", () => {
  window.scrollY >= 200
    ? goUpBtn.classList.add("active")
    : goUpBtn.classList.remove("active");
}),
  (goUpBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  workLis.forEach((e) => {
    e.addEventListener("click", (e) => {
      let s = e.target.dataset.filter;
      workLis.forEach((e) => e.classList.remove("active")),
        e.target.classList.add("active"),
        workCols.forEach((e) => {
          let t = e.className.includes(s);
          e.classList.add("none"),
            t
              ? e.classList.remove("none")
              : "all" === s && e.classList.remove("none");
        });
    });
  }),
  (burgerIcon.onclick = () => {
    ul.classList.toggle("active"),
      links.forEach((e) => {
        (e.style.animation = "come-from-right 2s ease"),
          (e.style.opacity = "1");
      });
  }),
  (modeIcon.onclick = () => {
    let e = modeIcon.className.split(" ")[1];
    "fa-cloud-sun" === e
      ? modeIcon.classList.replace("fa-cloud-sun", "fa-moon")
      : modeIcon.classList.replace("fa-moon", "fa-cloud-sun"),
      document.body.classList.toggle("dark"),
      (moodStatus = document.body.classList.contains("dark")
        ? "dark"
        : "light"),
      localStorage.setItem("moodStyle", moodStatus);
  }),
  "dark" === localStorage.getItem("moodStyle") &&
    (document.body.classList.add("dark"),
    modeIcon.classList.replace("fa-cloud-sun", "fa-moon")),
  document.addEventListener("click", (e) => {
    links.forEach((s) => {
      e.target === s &&
        ul.classList.contains("active") &&
        s.parentElement.parentElement.classList.remove("active");
    });
  });
const public_key = "ORr_THHKAlYSfmWVY";
emailjs.init(public_key);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitBtn.innerHTML = "Sending...";
  submitBtn.style.pointerEvents = "none";
  submitBtn.style.cursor = "not-allowed";
  const serviceID = "service_g7dgr5s";
  const templateID = "contact_form";
  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      submitBtn.innerHTML = "Message Sent Successfully!";
      submitBtn.disabled = true;
      submitBtn.style.cssText = `
        background-color: #6CC070;
        pointer-events: unset;
        cursor: default;
      `;
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
      alert("Sent!");
    },
    () => {
      submitBtn.innerHTML = "Something went wrong!";
      submitBtn.style.backgroundColor = "#ff1a1a";
    }
  );
});
