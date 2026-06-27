/* ============================================
   CONNEXA — MAIN
   Comportamentos compartilhados por todas as páginas:
   menu mobile, ano do rodapé e renderização de cards.
   ============================================ */

(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Ano automático no rodapé ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Busca: redireciona para Oportunidades ---------- */
  document.querySelectorAll("[data-search-redirect]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      const term = encodeURIComponent(input ? input.value.trim() : "");
      const base = form.getAttribute("data-search-redirect") || "pages/oportunidades.html";
      window.location.href = term ? `${base}?busca=${term}` : base;
    });
  });
})();

/* ============================================
   Helpers de renderização de cards (usados em
   home.js e pages.js)
   ============================================ */

const ConnexaUI = {
  initials(text) {
    return text
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  },

  iconPin() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  },
  iconBriefcase() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
  },
  iconClock() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
  },

  cardVaga(v) {
    return `
      <article class="card-vaga">
        <div class="card-vaga__top">
          <div class="card-vaga__logo" style="background:${v.cor}">${this.initials(v.empresa)}</div>
          <div>
            <h3 class="card-vaga__cargo">${v.cargo}</h3>
            <p class="card-vaga__empresa">${v.empresa}</p>
          </div>
        </div>
        <div class="card-vaga__meta">
          <span>${this.iconBriefcase()} ${v.modalidade}</span>
          <span>${this.iconPin()} ${v.local}</span>
        </div>
        <div class="card-vaga__footer">
          <span class="chip">${v.publicada}</span>
          <a href="#" class="link-arrow">Ver detalhes →</a>
        </div>
      </article>`;
  },

  cardCurso(c) {
    const precoChip = c.preco === "gratuito"
      ? `<span class="chip chip--local">Gratuito</span>`
      : `<span class="chip chip--secondary">Pago</span>`;
    return `
      <article class="card-curso">
        <div class="card-curso__cover" style="background:linear-gradient(135deg, ${c.cor}, ${c.cor}CC)">
          <span class="card-curso__icon">🎓</span>
        </div>
        <div class="card-curso__body">
          <h3 class="card-curso__nome">${c.nome}</h3>
          <p class="card-curso__instituicao">${c.instituicao}</p>
          <div class="card-curso__footer">
            <span>${this.iconClock()} ${c.carga}</span>
            ${precoChip}
          </div>
        </div>
      </article>`;
  },

  cardEvento(e, stack) {
    const [dia, mes] = e.data.split(" ");
    return `
      <article class="card-evento ${stack ? "card-evento--stack" : ""}">
        <div class="card-evento__data" style="background:${e.cor}1A; color:${e.cor}">
          <span class="dia">${dia}</span><span class="mes">${mes}</span>
        </div>
        <div class="card-evento__info">
          <h3 class="card-evento__nome">${e.nome}</h3>
          <p class="card-evento__local">${this.iconPin()} ${e.local}</p>
          ${stack ? `<div class="card-evento__footer"><span class="chip chip--events">${e.tipo}</span><a href="#" class="btn btn--sm btn--ghost">Participar</a></div>` : ""}
        </div>
        ${stack ? "" : `<a href="#" class="btn btn--sm btn--primary">Participar</a>`}
      </article>`;
  },

  cardNegocio(n) {
    return `
      <article class="card-negocio">
        <div class="card-negocio__foto" style="background:${n.cor}">${this.initials(n.nome)}</div>
        <h3 class="card-negocio__nome">${n.nome}</h3>
        <span class="chip chip--local">${n.categoria}</span>
        <p class="card-negocio__desc">${n.desc}</p>
        <a href="#" class="link-arrow">Conhecer negócio →</a>
      </article>`;
  }
};
