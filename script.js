/* =========================================
   YUE JING PORTFOLIO
========================================= */


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================
   NAVIGATION ACTIVE STATE
========================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }


        const id =
          entry.target.getAttribute(
            "id"
          );


        navLinks.forEach(link => {

          const href =
            link.getAttribute(
              "href"
            );


          if (
            href === `#${id}`
          ) {

            link.classList.add(
              "is-active"
            );

          } else {

            link.classList.remove(
              "is-active"
            );

          }

        });

      });

    },

    {
      rootMargin:
        "-35% 0px -55% 0px",

      threshold:
        0
    }

  );


sections.forEach(section => {

  observer.observe(section);

});