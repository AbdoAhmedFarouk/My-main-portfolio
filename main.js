const links=document.querySelectorAll(".nav-item .nav-link"),sections=document.querySelectorAll(".section"),workLis=document.querySelectorAll(".work .work-list li"),workCols=document.querySelectorAll(".work .row .col-lg-4"),burgerIcon=document.querySelector(".burger-icon"),ul=document.querySelector(".navbar .container .navbar-nav"),modeIcon=document.querySelector(".mode .fa-solid");let moodStatus;function addActiveClass(){let e=window.scrollY;sections.forEach(s=>{let t=s.offsetTop,o=s.clientHeight;e>=t&&e<t+o?(links.forEach(e=>{e.getAttribute("href")===`#${s.id}`?e.classList.add("active"):e.classList.remove("active")}),s.classList.add("active")):s.classList.remove("active")})}window.onscroll=()=>{document.querySelector(".navbar").classList.add("active")},window.addEventListener("scroll",addActiveClass),links.forEach(e=>{e.addEventListener("click",e=>{links.forEach(e=>e.classList.remove("active")),e.target.classList.add("active"),document.querySelector("."+e.target.dataset.sec).scrollIntoView({behavior:"smooth"})})});const goUpBtn=document.querySelector(".go-up");window.addEventListener("scroll",()=>{window.scrollY>=200?goUpBtn.classList.add("active"):goUpBtn.classList.remove("active")}),goUpBtn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})},workLis.forEach(e=>{e.addEventListener("click",e=>{let s=e.target.dataset.filter;workLis.forEach(e=>e.classList.remove("active")),e.target.classList.add("active"),workCols.forEach(e=>{let t=e.className.includes(s);e.classList.add("none"),t?e.classList.remove("none"):"all"===s&&e.classList.remove("none")})})}),burgerIcon.onclick=()=>{ul.classList.toggle("active"),links.forEach(e=>{e.style.animation="come-from-right 2s ease",e.style.opacity="1"})},modeIcon.onclick=()=>{let e=modeIcon.className.split(" ")[1];"fa-cloud-sun"===e?modeIcon.classList.replace("fa-cloud-sun","fa-moon"):modeIcon.classList.replace("fa-moon","fa-cloud-sun"),document.body.classList.toggle("dark"),moodStatus=document.body.classList.contains("dark")?"dark":"light",localStorage.setItem("moodStyle",moodStatus)},"dark"===localStorage.getItem("moodStyle")&&(document.body.classList.add("dark"),modeIcon.classList.replace("fa-cloud-sun","fa-moon")),document.addEventListener("click",e=>{links.forEach(s=>{e.target===s&&ul.classList.contains("active")&&s.parentElement.parentElement.classList.remove("active")})});const sendEmail=()=>{Email.send({SecureToken:"7d6c18bc-0b07-4102-b16e-d8e72acc80c2",To:"supersanko2002@gmail.com",From:"supersanko2002@gmail.com",Subject:"My portfolio messages",Body:"Name: "+document.getElementById("name").value+"<br> Email: "+document.getElementById("email").value+"<br> Subject: "+document.getElementById("subject").value+"<br> Message: "+document.getElementById("message").value}).then(e=>alert("Your message sent successfully"))};