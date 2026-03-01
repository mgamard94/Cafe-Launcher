const statusEl = document.getElementById("status");

for (const channel of document.querySelectorAll(".channel")) {
  channel.addEventListener("click", () => {
    const name = channel.getAttribute("data-channel") || "Channel";
    statusEl.textContent = `Opening ${name}...`;

    setTimeout(() => {
      statusEl.textContent = `${name} is not available in this demo.`;
    }, 700);
  });
}
