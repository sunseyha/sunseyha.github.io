function showProject(slug) {
  const list = document.getElementById("project-list");
  const title = document.getElementById("project-title");
  const details = document.querySelectorAll("#project [data-project]");
  const card = [...list.querySelectorAll(".project-card")].find(
    (link) => link.hash === "#project/" + slug
  );
  const detail = card && [...details].find(
    (article) => article.dataset.project === slug
  );

  list.hidden = Boolean(detail);
  details.forEach((article) => {
    article.hidden = article !== detail;
  });
  title.textContent = "Project";
  if (detail) {
    const back = document.createElement("a");
    back.href = "#project";
    back.textContent = "Project";
    const current = document.createElement("span");
    current.setAttribute("aria-current", "page");
    current.textContent = card.querySelector("h3").textContent;
    title.replaceChildren(back, " > ", current);
  }
  list.parentElement.scrollTop = 0;
}
