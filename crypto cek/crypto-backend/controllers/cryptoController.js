const { default: axios } = require("axios");
const cache = require('../cache/cryptoCache');
const cacheDetail = require('../cache/cryptoDetailCache');
const cachePriceDetail = require('../cache/cryptoPriceDetailCache');
const cacheRates = require('../cache/cryptoRatesCache');
require('dotenv').config();

const COINCAP_API_key = process.env.COINCAP_API_key;

const topCrypto = async (req, res) => {
    const cachedData = cache.get('top10');
    try {
        if(cachedData) {
            return res.status(200).json({
                message: 'Data From Cache',
                data: cachedData
            });
        } else {
            const url = 'https://rest.coincap.io/v3/assets?limit=10';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${COINCAP_API_key}`
                }
            });
            cache.set('top10', response.data.data);

            return res.status(200).json({
                message: 'List Top Crypto',
                data: response.data.data 
            });
        }
    } catch (error) {
        return res.status(500).json({ 
            message: error.message
        });
    }
};

const detailCrypto = async (req, res) => {
    const cacheKey = `coin-${req.params.slug}`;
    const cachedData = cacheDetail.get(cacheKey);
    const { slug } = req.params;
    try {
        if(cachedData) {
            return res.status(200).json({
                message: `Detail Coin ${slug} From Cache`,
                data: cachedData
            });
        } else {
            const url = `https://rest.coincap.io//v3/assets/${slug}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${COINCAP_API_key}`
                }
            });
            cacheDetail.set(cacheKey, response.data.data);

            return res.status(200).json({
                message: `Detail Coin ${slug}`,
                data: response.data.data 
            });
        }
    } catch (error) {
        return res.status(500).json({ 
            message: error.message,
            data: 'Data Not Found!'
        });
    }
};

const priceCrypto = async (req, res) => {
    const { slug } = req.params;
    const end = Date.now();
    const start = end - 7 * 24 * 60 * 60 * 1000;
    const cacheKey = `chart-${slug}`;
    const cachedData = cachePriceDetail.get(cacheKey);

    try {
        if(cachedData) {
            return res.status(200).json({
                message: `Detail Price Coin ${slug} From Cache`,
                data: cachedData
            });
        } else {
            const url = `https://rest.coincap.io//v3/assets/${slug}/history?interval=d1&start=${start}&end=${end}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${COINCAP_API_key}`
                }
            });
            cachePriceDetail.set(cacheKey, response.data.data);

            return res.status(200).json({
                message: `Detail Price Coin ${slug}`,
                data: response.data.data
            });
        }
    } catch (error) {
        return res.status(500).json({ 
            message: error.message,
            data: 'Data Not Found!'
        });
    }
};

const ratesCrypto = async (req, res) => {
    const { slug1, slug2 } = req.params;
    const cacheKey = `rate-${slug1}-${slug2}`;
    const cachedData = cacheRates.get(cacheKey);

    try {
        if(cachedData) {
            return res.status(200).json({
                message: `Conversion Rates ${slug1} From Cache And ${slug2} From Cache`,
                data: cachedData
            });
        } else {
            const url1 = `https://rest.coincap.io//v3/rates/${slug1}`;
            const url2 = `https://rest.coincap.io//v3/rates/${slug2}`;
            const [response1, response2] = await Promise.all([
                axios.get(url1, { headers: { Authorization: `Bearer ${COINCAP_API_key}` } }),
                axios.get(url2, { headers: { Authorization: `Bearer ${COINCAP_API_key}` } })
            ]);

            const rate1 = Number(response1.data.data.rateUsd);
            const rate2 = Number(response2.data.data.rateUsd);

            const conversion = rate1 / rate2;

            const conversionFormatted = conversion.toFixed(2);

            const result = {
                message: `Conversion Rates From ${slug1} To ${slug2}`,
                from: response1.data.data,
                to: response2.data.data,
                conversion: conversionFormatted,
                info: `1 ${response1.data.data.symbol} = ${conversion.toFixed(2)} ${response2.data.data.symbol}`
            }
        
            cacheRates.set(cacheKey, result);

            return res.status(200).json(result);
        }
    } catch (error) {
        return res.status(500).json({ 
            message: error.message,
            data: 'Data Not Found!'
        });
    }
};


module.exports = {topCrypto, detailCrypto,priceCrypto, ratesCrypto};