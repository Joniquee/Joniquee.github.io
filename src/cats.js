const btn = document.getElementById('getFact')
const fact = document.getElementById('fact')

btn.addEventListener('click', async () => {
  fact.textContent = 'Загрузка...'
  
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()
  const originalFact = data.fact

  const translateUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalFact)}&langpair=en|ru`
  const translateRes = await fetch(translateUrl)
  const translateData = await translateRes.json()
  
  const translated = translateData.responseData.translatedText

  fact.innerHTML = `
    <p>${translated}</p>
  `
})
