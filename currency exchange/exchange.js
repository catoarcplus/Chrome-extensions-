document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount')
    const currency = document.getElementById('currency')
    const convert = document.getElementById('convert')
    const result = document.getElementById('result')

    const apikey = "v2kmIj1mx1vYQMiE8ee7ZQ==XAntFRhtMiFVcFYU"
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;

        fetch(url, {
            headers: {
                'X-api-Key': apikey

            }
        })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                console.log('rate', rate)
                const finalResult = amountTotal * rate;
                console.log('result', finalResult)
                result.innerHTML = `${amountTotal} ${currencyTotal} = ${finalResult.toFixed(2)} USD`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'error! try again later.'
            })
    })
})