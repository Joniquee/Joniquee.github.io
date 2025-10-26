

console.log("DataExplorer запущен 🚀")

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a")
  links.forEach((link, i) => {
    link.style.opacity = "0"
    setTimeout(() => {
      link.style.transition = "opacity 0.5s ease"
      link.style.opacity = "1"
    }, i * 200)
  })
})

// Отображение текущей даты
const dateElement = document.createElement("p")
dateElement.textContent = `Сегодня: ${new Date().toLocaleDateString("ru-RU")}`
document.body.appendChild(dateElement)
