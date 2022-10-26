const mainSpace = document.getElementById('main')
const input = document.getElementById('input')
const error = document.getElementById('error')
const btn = document.getElementById('btn')
const examples = document.getElementById('examples')
const coins = ['bitcoin', 'ethereum', 'tether', 'cardano']

btn.addEventListener('click', () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${input.value.toLowerCase()}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    .then(res => res.json())
    .then(data => {
        if(data.error){
            error.style.display = 'block'
        } else {
            mainSpace.innerHTML += 
                `<div class='card-data'>
                    <div class='title-card'>
                        <h3><img class='logo' src='${data.image.thumb}'/> ${data.name}</h3>
                    </div>
                    <div class='text'>
                        <p class='price-value'><i class="fa-solid fa-coins"></i> ${data.market_data.current_price.eur}€</p>
                        <div class='market-price'>
                            <p class='time'><i class="fa-regular fa-clock"></i> 24h 
                                <span class='block'>${data.market_data.price_change_percentage_24h.toFixed(2)}% </span>
                            </p>
                            <p class='time'><i class="fa-regular fa-clock"></i> 7d 
                                <span class='block'>${data.market_data.price_change_percentage_7d.toFixed(2)}%</span>
                            </p>
                            <p class='time'><i class="fa-regular fa-clock"></i> 14d
                                <span class='block'>${data.market_data.price_change_percentage_14d.toFixed(2)}%</span>
                            </p>
                        </div>
                        <div class='categories'>
                            <p class='categories-title'> 
                                <i class="fa-solid fa-barcode"></i> 
                                Categories 
                            </p>
                            <p class='categories-item'>${data.categories[0] ? '•' : ''} ${data.categories[0] ? data.categories[0] : '' }</p>
                            <p class='categories-item'>${data.categories[1] ? '•' : ''} ${data.categories[1] ? data.categories[1] : '' }</p>
                        </div>
                    </div>
                </div>
                `
        }
    })
    input.value = ''
    error.style.display = 'none'
})

function allcoins() {
    for (let coin of coins){
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        .then(res => res.json())
        .then(data => {
            examples.innerHTML += 
            `<div class='card-data'>
                <div class='title-card'>
                    <h3><img class='logo' src='${data.image.thumb}'/> ${data.name}</h3>
                </div>
                <div class='text'>
                    <p class='price-value'><i class="fa-solid fa-coins"></i> ${data.market_data.current_price.eur}€</p>
                    <div class='market-price'>
                        <p class='time'><i class="fa-regular fa-clock"></i> 24h 
                            <span class='block'>${data.market_data.price_change_percentage_24h.toFixed(2)}% </span>
                        </p>
                        <p class='time'><i class="fa-regular fa-clock"></i> 7d 
                            <span class='block'>${data.market_data.price_change_percentage_7d.toFixed(2)}%</span>
                        </p>
                        <p class='time'><i class="fa-regular fa-clock"></i> 14d
                            <span class='block'>${data.market_data.price_change_percentage_14d.toFixed(2)}%</span>
                        </p>
                    </div>
                    <div class='categories'>
                        <p class='categories-title'> 
                            <i class="fa-solid fa-barcode"></i> 
                            Categories 
                        </p>
                        <p class='categories-item'>${data.categories[0] ? '•' : ''} ${data.categories[0] ? data.categories[0] : '' }</p>
                        <p class='categories-item'>${data.categories[1] ? '•' : ''} ${data.categories[1] ? data.categories[1] : '' }</p>
                    </div>
                </div>
            </div>
            `
        })
    }
        
}
    
allcoins()
