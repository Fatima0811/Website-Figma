// common.js — paste karain (ya <script> tag mein).
// Pages sequence: (aap ne diye they)
const pages = [
  "index.html",
  "content.html",
  "Features.html",
  "Form.html",
  "testimonal.html",
  "Action.html",
  "showcase.html",
  "team.html",
  "contact.html",
  "pricetable.html",
  "footer.html"
];

// Agar last se next pe jana chahte ho to true kar do, warna false (no wrap).
const wrap = false;

function getFilenameFromPath(path) {
  // query/hash remove kar ke filename nikalta hai
  const u = path.split("?")[0].split("#")[0];
  return u.substring(u.lastIndexOf("/") + 1) || "index.html";
}

document.addEventListener("keydown", function (event) {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

  const current = getFilenameFromPath(window.location.pathname);
  const idx = pages.indexOf(current);

  // agar current filename array mein nahi mili to koshish karen index.html ko treat karne ki
  const currentIndex = idx === -1 ? pages.indexOf("index.html") : idx;
  if (currentIndex === -1) return; // agar phir bhi na mili to kuch na karo

  let targetIndex = currentIndex;
  if (event.key === "ArrowRight") {
    targetIndex = currentIndex + 1;
    if (targetIndex >= pages.length) {
      if (wrap) targetIndex = 0;
      else return; // last page par ho to kuch na karna
    }
  } else if (event.key === "ArrowLeft") {
    targetIndex = currentIndex - 1;
    if (targetIndex < 0) {
      if (wrap) targetIndex = pages.length - 1;
      else return; // pehli page par ho to kuch na karna
    }
  }

  // redirect to the target page (same folder)
  window.location.href = pages[targetIndex];
});
