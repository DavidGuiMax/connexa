/* ============================================
   CONNEXA — HOME (renderização dinâmica)
   ============================================ */

(function () {
  "use strict";

  const vagasRow = document.querySelector("[data-row='vagas']");
  if (vagasRow) {
    vagasRow.innerHTML = CONNEXA_DATA.vagas.slice(0, 6)
      .map((v) => ConnexaUI.cardVaga(v))
      .join("");
  }

  const cursosRow = document.querySelector("[data-row='cursos']");
  if (cursosRow) {
    cursosRow.innerHTML = CONNEXA_DATA.cursos.slice(0, 5)
      .map((c) => ConnexaUI.cardCurso(c))
      .join("");
  }

  const eventosRow = document.querySelector("[data-row='eventos']");
  if (eventosRow) {
    eventosRow.innerHTML = CONNEXA_DATA.eventos.slice(0, 6)
      .map((e) => ConnexaUI.cardEvento(e, false))
      .join("");
  }

  const negociosRow = document.querySelector("[data-row='negocios']");
  if (negociosRow) {
    negociosRow.innerHTML = CONNEXA_DATA.negocios.slice(0, 4)
      .map((n) => ConnexaUI.cardNegocio(n))
      .join("");
  }
})();
