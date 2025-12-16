fetch("data/publications.json")
  .then(response => response.json())
  .then(publications => {
    const container = document.getElementById("publications");

    publications.forEach(pub => {
      const p = document.createElement("p");

      const authors = formatAuthors(pub.author);

      p.innerHTML = `
        ${authors}.
        ${pub.title}.
        <em>${pub.journal}</em>,
        <strong>${pub.volume}</strong>(${pub.number}):${pub.pages}, ${pub.year}.
      `;

      container.appendChild(p);
    });
  });

function formatAuthors(authors) {
  const formatted = authors.map(a => {
    const [last, first] = a.split(", ");
    return `${first} ${last}`;
  });

  if (formatted.length === 1) return formatted[0];
  if (formatted.length === 2) return formatted.join(" and ");

  return (
    formatted.slice(0, -1).join(", ") +
    ", and " +
    formatted[formatted.length - 1]
  );
}