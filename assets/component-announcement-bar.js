document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".announcement-bar");

  bars.forEach((bar) => {
    const messages = bar.querySelectorAll(".message");
    
    const prev = bar.querySelector(".arrow.left");
    const next = bar.querySelector(".arrow.right");

    let index = 0;

    if (messages.length === 0) return;

    function showMessage(i) {
      messages.forEach((msg) => msg.classList.remove("active"));
      messages[i].classList.add("active");
    }

    next?.addEventListener("click", () => {
      index = (index + 1) % messages.length;
      showMessage(index);
    });

    prev?.addEventListener("click", () => {
      index = (index - 1 + messages.length) % messages.length;
      showMessage(index);
    });
  });
});