(function () {
  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  var open = document.querySelector(".contents");
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && open && open.hasAttribute("open")) {
      open.removeAttribute("open");
    }
  });

  var prose = document.querySelector(".prose");
  var rail = document.querySelector(".rail");
  if (prose && rail) {
    var heads = prose.querySelectorAll("h2");
    if (heads.length > 1) {
      var list = document.createElement("ol");
      heads.forEach(function (heading, index) {
        if (!heading.id) heading.id = "section-" + (index + 1);
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent.replace(/\s+/g, " ").trim();
        item.appendChild(link);
        list.appendChild(item);
        heading._railLink = link;
      });
      rail.appendChild(list);
      rail.hidden = false;

      if ("IntersectionObserver" in window) {
        var spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || !entry.target._railLink) return;
            rail.querySelectorAll("a").forEach(function (link) {
              link.removeAttribute("aria-current");
            });
            entry.target._railLink.setAttribute("aria-current", "true");
          });
        }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
        heads.forEach(function (heading) { spy.observe(heading); });
      }
    }
  }

  if (reduce || !("IntersectionObserver" in window)) return;

  var nodes = document.querySelectorAll("[data-reveal], .h-ledger");
  if (!nodes.length) return;
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      seen.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  nodes.forEach(function (node) { seen.observe(node); });
})();
