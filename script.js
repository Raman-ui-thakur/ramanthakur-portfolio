document.addEventListener("DOMContentLoaded", function () {

    console.log("script.js loaded");


    /* =========================================
       MOBILE NAVIGATION TOGGLE
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    /* =========================================
       SLICK SKILLS SLIDER
       Only run if .skills_logos exists
    ========================================= */

    if (typeof jQuery !== "undefined" && $(".skills_logos").length) {

        $(".skills_logos").slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            cssEase: "linear",
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            swipe: false,
            touchMove: false,
            draggable: false,

            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

    }


    /* =========================================
       TYPED.JS
       Only run if #Web_developer exists
    ========================================= */

    const typedElement = document.getElementById("Web_developer");

    if (
        typedElement &&
        typeof Typed !== "undefined"
    ) {

        new Typed("#Web_developer", {
            strings: [
                "Web Designer",
                "Web Developer"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            fadeOut: true,
            loop: true
        });

    }


    /* =========================================
       HIRE ME MODAL
       Only run if modal exists
    ========================================= */

    const hireModal = document.getElementById("hireModal");
    const hireOpen = document.getElementById("hireOpen");
    const hireClose = document.getElementById("hireClose");
    const hireOverlay = document.querySelector(".hire-modal-overlay");


    if (
        hireModal &&
        hireOpen &&
        hireClose &&
        hireOverlay
    ) {

        hireOpen.addEventListener("click", function (e) {

            e.preventDefault();

            hireModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });


        function closeHireModal() {

            hireModal.classList.remove("active");

            document.body.style.overflow = "";

        }


        hireClose.addEventListener(
            "click",
            closeHireModal
        );


        hireOverlay.addEventListener(
            "click",
            closeHireModal
        );


        document.addEventListener("keydown", function (e) {

            if (e.key === "Escape") {

                closeHireModal();

            }

        });

    }

});