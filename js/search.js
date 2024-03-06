function search(event) {
  if (event.keyCode === 13) {
    const query = document.getElementById("query").value;
    if (query.trim() !== "") {
      window.open(
        "https://www.startpage.com/do/dsearch?q=" + encodeURIComponent(query),
        "_blank",
      );
      document.getElementById("query").value = "";
    }
    event.preventDefault();
  }
}
