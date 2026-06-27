/* ============================================
   CONNEXA — PÁGINAS DE LISTAGEM
   Busca e filtros client-side sobre os dados mock.
   ============================================ */

(function () {
  "use strict";

  function emptyState(msg) {
    return `<div class="empty-state"><h3>Nenhum resultado encontrado</h3><p>${msg}</p></div>`;
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  function bindCheckGroup(selector, set, onChange) {
    document.querySelectorAll(selector).forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) set.add(input.value);
        else set.delete(input.value);
        onChange();
      });
    });
  }

  function bindChips(selector, onPick) {
    const chips = document.querySelectorAll(selector);
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        onPick(chip.dataset.value || "todos");
      });
    });
  }

  /* ---------- Oportunidades ---------- */
  const vagasGrid = document.querySelector("[data-grid='vagas']");
  if (vagasGrid) {
    const state = { area: new Set(), nivel: new Set(), termo: getParam("busca").toLowerCase() };
    const countEl = document.querySelector("[data-count='vagas']");
    const searchInput = document.querySelector("[data-search='vagas']");
    if (searchInput) searchInput.value = getParam("busca");

    function render() {
      const list = CONNEXA_DATA.vagas.filter((v) => {
        if (state.area.size && !state.area.has(v.area)) return false;
        if (state.nivel.size && !state.nivel.has(v.nivel)) return false;
        if (state.termo && !(v.cargo + " " + v.empresa).toLowerCase().includes(state.termo)) return false;
        return true;
      });
      vagasGrid.innerHTML = list.length
        ? list.map((v) => ConnexaUI.cardVaga(v)).join("")
        : emptyState("Tente remover alguns filtros ou buscar por outro termo.");
      if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> oportunidades encontradas`;
    }

    bindCheckGroup("[data-filter='area']", state.area, render);
    bindCheckGroup("[data-filter='nivel']", state.nivel, render);
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.termo = searchInput.value.toLowerCase();
        render();
      });
    }
    render();
  }

  /* ---------- Cursos ---------- */
  const cursosGrid = document.querySelector("[data-grid='cursos']");
  if (cursosGrid) {
    const state = { area: new Set(), modalidade: new Set(), preco: "todos" };
    const countEl = document.querySelector("[data-count='cursos']");

    function render() {
      const list = CONNEXA_DATA.cursos.filter((c) => {
        if (state.area.size && !state.area.has(c.area)) return false;
        if (state.modalidade.size && !state.modalidade.has(c.modalidade)) return false;
        if (state.preco !== "todos" && c.preco !== state.preco) return false;
        return true;
      });
      cursosGrid.innerHTML = list.length
        ? list.map((c) => ConnexaUI.cardCurso(c)).join("")
        : emptyState("Ajuste os filtros de área, modalidade ou preço.");
      if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> cursos encontrados`;
    }

    bindCheckGroup("[data-filter='area-curso']", state.area, render);
    bindCheckGroup("[data-filter='modalidade-curso']", state.modalidade, render);
    bindChips("[data-chip='preco']", (val) => { state.preco = val; render(); });
    render();
  }

  /* ---------- Eventos ---------- */
  const eventosGrid = document.querySelector("[data-grid='eventos']");
  if (eventosGrid) {
    const state = { tipo: "todos" };
    const countEl = document.querySelector("[data-count='eventos']");

    function render() {
      const list = CONNEXA_DATA.eventos.filter((e) => state.tipo === "todos" || e.tipo === state.tipo);
      eventosGrid.innerHTML = list.length
        ? list.map((e) => ConnexaUI.cardEvento(e, true)).join("")
        : emptyState("Não há eventos para esse filtro no momento.");
      if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> eventos próximos`;
    }

    bindChips("[data-chip='tipo-evento']", (val) => { state.tipo = val; render(); });
    render();
  }

  /* ---------- Negócios ---------- */
  const negociosGrid = document.querySelector("[data-grid='negocios']");
  if (negociosGrid) {
    const state = { categoria: "todos", termo: "" };
    const countEl = document.querySelector("[data-count='negocios']");
    const searchInput = document.querySelector("[data-search='negocios']");

    function render() {
      const list = CONNEXA_DATA.negocios.filter((n) => {
        if (state.categoria !== "todos" && n.categoria !== state.categoria) return false;
        if (state.termo && !n.nome.toLowerCase().includes(state.termo)) return false;
        return true;
      });
      negociosGrid.innerHTML = list.length
        ? list.map((n) => ConnexaUI.cardNegocio(n)).join("")
        : emptyState("Nenhum negócio encontrado para essa busca.");
      if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> negócios locais`;
    }

    bindChips("[data-chip='categoria-negocio']", (val) => { state.categoria = val; render(); });
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.termo = searchInput.value.toLowerCase();
        render();
      });
    }
    render();
  }

  /* ---------- Formulário de contato (feedback simples) ---------- */
  const contactForm = document.querySelector("[data-form='contato']");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const feedback = document.querySelector("[data-feedback='contato']");
      if (feedback) {
        feedback.textContent = "Mensagem enviada! Nossa equipe responde em até 2 dias úteis.";
        feedback.style.display = "block";
      }
      contactForm.reset();
    });
  }

  /* ---------- Toggle de papel no cadastro ---------- */
  const roleInputs = document.querySelectorAll("[data-role-input]");
  const roleFields = document.querySelectorAll("[data-role-field]");
  if (roleInputs.length && roleFields.length) {
    function syncRole() {
      const checked = document.querySelector("[data-role-input]:checked");
      const role = checked ? checked.value : "jovem";
      roleFields.forEach((field) => {
        field.style.display = field.dataset.roleField === role ? "block" : "none";
      });
    }
    roleInputs.forEach((input) => input.addEventListener("change", syncRole));
    syncRole();
  }

  /* ---------- Submit genérico de login/cadastro (demo) ---------- */
  
})();
