var menuNavs = [
  { label: "Cultos", link: "#cultos" },
  { label: "Onde Estamos", link: "#onde-estamos" },
  { label: "Ofertas", link: "#section-ofertas" },
];

var menuNav = document.querySelectorAll('[data-js="menu-nav"]');
menuNav.forEach(function (nav) {
  menuNavs.map(function (item) {
    var link = document.createElement("a");
    link.append(item.label);
    link.href = item.link;
    nav.appendChild(link);
  });
});
