const API_KEY = 'pub_7918621647d348b6b6519d1c6fca9efb'
const btn = document.getElementById('loadNews')
const container = document.getElementById('newsContainer')

btn.addEventListener('click', fetchNews)

async function fetchNews() {
  container.innerHTML = 'Загрузка новостей...'

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=ru&country=ru`
    const res = await fetch(url)

    if (!res.ok) throw new Error(`Ошибка ${res.status}`)
    const data = await res.json()

    if (!data.results || data.results.length === 0) {
      container.innerHTML = 'Новости не найдены 😢'
      return
    }

    container.innerHTML = data.results.slice(0, 5).map(n => `
      <div class="card">
        <h3>${n.title}</h3>
        <p>${n.description || ''}</p>
        <a href="${n.link}" target="_blank">Читать полностью</a>
      </div>
    `).join('')
  } catch (error) {
    container.innerHTML = `Ошибка загрузки: ${error.message}`
    console.error(error)
  }
}
