document.addEventListener("keydown", (event) => {
  // For focus on the search
  if (event.key === "/") {
    document.getElementById("query").focus();
    event.preventDefault();
  }

  // Remove the focus
  if (event.key === "Escape") {
    document.getElementById("query").blur();
    event.preventDefault();
  }

  // Capital G to Open Github
  if (
    event.key.toLowerCase() === "g" &&
    !event.target.tagName.match(/textarea|input/i)
  ) {
    document.getElementById("github").click();
  }

  // Capital Y to Open Youtube
  if (
    event.key.toLowerCase() === "y" &&
    !event.target.tagName.match(/textarea|input/i)
  ) {
    document.getElementById("youtube").click();
  }

  // Capital M to Open Mails
  if (
    event.key.toLowerCase() === "m" &&
    !event.target.tagName.match(/textarea|input/i)
  ) {
    document.getElementById("mail").click();
  }

  // Capital K to open Monkey Type
  if (
    event.key.toLowerCase() === "k" &&
    !event.target.tagName.match(/textarea|input/i)
  ) {
    document.getElementById("monkey").click();
  }

  // Capital C to Open ChatGpt
  if (
    event.key.toLowerCase() === "c" &&
    !event.target.tagName.match(/textarea|input/i)
  ) {
    document.getElementById("chatgpt").click();
  }
});
