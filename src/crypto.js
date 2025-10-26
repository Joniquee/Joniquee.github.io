const container = document.getElementById('cryptoContainer')
const btn = document.getElementById('loadCrypto')

btn.addEventListener('click', fetchCrypto)
fetchCrypto()

async function fetchCrypto() {
  container.innerHTML = 'Загрузка...'
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana')
  const data = await res.json()

  container.innerHTML = data.map(coin => `
    <div class="card">
      <h3>${coin.name} (${coin.symbol.toUpperCase()})</h3>
      <p>💵 Цена: $${coin.current_price}</p>
      <p>📉 Изменение 24ч: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  `).join('')
}