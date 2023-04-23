const links = document.querySelectorAll(".nav-item .nav-link");

const sections = document.querySelectorAll(".section");

const workLis = document.querySelectorAll(".work .work-list li");

const workCols = document.querySelectorAll(".work .row .col-lg-4");

const burgerIcon = document.querySelector(".burger-icon");

const ul = document.querySelector(".navbar .container .navbar-nav");

window.onscroll = () => {
  document.querySelector(".navbar").classList.add("active");
};

function addActiveClass() {
  let currentPosition = window.scrollY;
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    // console.log(currentPosition);
    // console.log(sectionTop); // btgeb kol eltol el fo2 el section
    // console.log(sectionHeight); // btgeb tol el section
    if (
      currentPosition >= sectionTop &&
      currentPosition < sectionTop + sectionHeight
    ) {
      links.forEach((navLink) => {
        if (navLink.getAttribute("href") === `#${section.id}`) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", addActiveClass);

links.forEach((li) => {
  li.addEventListener("click", (e) => {
    links.forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");
    document.querySelector("." + e.target.dataset.sec).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const goUpBtn = document.querySelector(".go-up");
window.addEventListener("scroll", () => {
  window.scrollY >= 200
    ? goUpBtn.classList.add("active")
    : goUpBtn.classList.remove("active");
});

goUpBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

workLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    const liDataSet = e.target.dataset.filter;
    workLis.forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");
    workCols.forEach((col) => {
      const colDataSet = col.className.includes(liDataSet);
      col.classList.add("none");
      colDataSet
        ? col.classList.remove("none")
        : liDataSet === "all"
        ? col.classList.remove("none")
        : "";
    });
  });
});

burgerIcon.onclick = () => {
  ul.classList.toggle("active");
  links.forEach((a) => {
    a.style.animation = `come-from-right 2s ease`;
    a.style.opacity = `1`;
  });
};

let moodStatus;
const modeIcon = document.querySelector(".mode .fa-solid");

modeIcon.onclick = () => {
  const className = modeIcon.className.split(" ")[1];
  if (className === "fa-cloud-sun") {
    modeIcon.classList.replace("fa-cloud-sun", "fa-moon");
  } else {
    modeIcon.classList.replace("fa-moon", "fa-cloud-sun");
  }
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    moodStatus = "dark";
  } else {
    moodStatus = "light";
  }
  localStorage.setItem("moodStyle", moodStatus);
};

if (localStorage.getItem("moodStyle") === "dark") {
  document.body.classList.add("dark");
  modeIcon.classList.replace("fa-cloud-sun", "fa-moon");
}

document.addEventListener("click", (e) => {
  links.forEach((a) => {
    if (e.target === a && ul.classList.contains("active")) {
      a.parentElement.parentElement.classList.remove("active");
    }
  });
});

const sendEmail = () => {
  Email.send({
    SecureToken: "7d6c18bc-0b07-4102-b16e-d8e72acc80c2",
    To: "supersanko2002@gmail.com",
    From: "supersanko2002@gmail.com",
    Subject: "My portfolio messages",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("subject").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Your message sent successfully"));
};
