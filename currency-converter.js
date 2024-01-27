const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {const getExchangeRate = async (fromCurrency, toCurrency) => {  
        const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[d3ee9e9e0c586a45a19e43df13b9f1c9]&format=1');
    };
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    }
    catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}.`);
    }
}

const getCountries = async (currencyCode) => {
    try {const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
    }
    catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`);
    }
}

const convert = async (fromCurrency, toCurrency, amount) => {
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    //const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. 
        You can spend these in the following countries: ${countries}`;
}

convert('USD', 'HRK', 20)
    .then((message) => {console.log(message);})
    .catch((error) => {console.log(error.message);});


