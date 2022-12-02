/*--------------------------------------------
    page loader
--------------------------------------------*/
window.addEventListener("load", () => {
    document.querySelector(".js-page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-page-loader").style.display = "none";
    }, 600);
});

/*--------------------------------------------
    Moment
--------------------------------------------*/
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function () {
    $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
});

$closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});



/*--------------------------------------------
    header menu
--------------------------------------------*/
function headerMenu() {
    const menu = document.querySelector(".js-header-menu"),
        backdrop = document.querySelector(".js-header-backdrop"),
        menuCollapseBreakpoint = 991;

    function toggleMenu() {
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
        item.addEventListener("click", toggleMenu);
    });

    backdrop.addEventListener("click", toggleMenu);

    function collapse() {
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    menu.addEventListener("click", (event) => {
        const { target } = event;

        if (target.classList.contains("js-toggle-sub-menu") &&
            window.innerWidth <= menuCollapseBreakpoint) {
            event.preventDefault();

            if (target.parentElement.classList.contains("active")) {
                collapse();
                return;
            }

            if (menu.querySelector(".active")) {
                collapse();
            }

            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
        }
    });

    window.addEventListener("resize", function () {
        if (this.innerWidth > menuCollapseBreakpoint && menu.clasList.contains("open")) {
            toggleMenu();
        }
        if (this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")) {
            collapse();
        }
    });
}

headerMenu();