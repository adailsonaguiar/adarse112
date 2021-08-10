var menuNavs = [
  { label: "Ofertas", link: "#section-ofertas" },
  { label: "Onde Estamos", link: "#onde-estamos" },
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
