/* =========================================
   PROJECT LINKS
   This file controls clicks on project cards
   on index.html
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       PROJECT NAME → URL
    ========================================= */
  
    const projectLinks = {
  
      "Memory Archive":
        "memory-archive",
  
      "tone+":
        "tone-plus",
  
      "Time's Correlation with Sound and Memory":
        "times-correlation",
  
      "Wedding Traditions":
        "wedding-traditions",
  
      "NoBS Wellness":
        "nobs-wellness",
  
      "Poster 42":
        "poster-42",
  
      "Tone+":
        "tone-branding",
  
      "Nord Branding":
        "nord-branding",
  
      "TAOTAO":
        "taotao",
  
      "Typeface Design":
        "typeface-design",
  
      "beneath touch":
        "beneath-touch",
  
      "Bark(s)":
        "barks",
  
      "How Time Redefines":
        "how-time-redefines",
  
      "SEE":
        "see",
  
      "Where I AM held":
        "where-i-am-held",
  
      "skymap":
        "skymap",
  
      "Studio / Lecturer Collection":
        "studio-lecturer"
  
    };
  
  
    /* =========================================
       FIND ALL PROJECT CARDS
    ========================================= */
  
    const projectCards =
      document.querySelectorAll(
        ".project-grid .project"
      );
  
  
    /* =========================================
       CONNECT EACH PROJECT
    ========================================= */
  
    projectCards.forEach((project) => {
  
  
      const titleElement =
        project.querySelector(
          ".project-info h3"
        );
  
  
      if (!titleElement) {
        return;
      }
  
  
      const title =
        titleElement.textContent.trim();
  
  
      const slug =
        projectLinks[title];
  
  
      /*
        If a project is not in the map,
        leave it untouched.
      */
  
      if (!slug) {
        return;
      }
  
  
      /* =======================================
         REMOVE DEADWOOD
         In case an older HTML version still
         contains it.
      ======================================= */
  
      if (
        title.toLowerCase() ===
        "deadwood"
      ) {
  
        project.remove();
  
        return;
      }
  
  
      /* =======================================
         VISUAL FEEDBACK
      ======================================= */
  
      project.style.cursor =
        "pointer";
  
  
      /* =======================================
         CLICK
      ======================================= */
  
      project.addEventListener(
        "click",
        (event) => {
  
          /*
            Don't interfere with an existing
            link inside the card.
          */
  
          const clickedLink =
            event.target.closest("a");
  
          if (clickedLink) {
            return;
          }
  
  
          window.location.href =
            `project.html?project=${slug}`;
  
        }
      );
  
  
      /* =======================================
         KEYBOARD ACCESS
      ======================================= */
  
      project.setAttribute(
        "role",
        "link"
      );
  
  
      project.setAttribute(
        "tabindex",
        "0"
      );
  
  
      project.setAttribute(
        "aria-label",
        `View ${title} project`
      );
  
  
      project.addEventListener(
        "keydown",
        (event) => {
  
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
  
            event.preventDefault();
  
            window.location.href =
              `project.html?project=${slug}`;
  
          }
  
        }
      );
  
    });
  
  });