const express = require('express')
const router = require('express').Router()
const axios = require('axios')

router.post('/',async(req, res) => 
{
    let location = await req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=76d95bc2144bcfe9ea32e2b7154e753d&units=metric`
    try{
   const response = await axios.get(url)
    const weatherData = response.data
   // console.log(weatherData)
    const sendData ={}
    sendData.temp = weatherData.main.temp
    sendData.desc = weatherData.weather[0].description
    sendData.location = weatherData.name
    sendData.feel = weatherData.main.feels_like
    sendData.humidity = weatherData.main.humidity
    sendData.speed = weatherData.wind.speed
   res.render('index',{sendData : sendData})
    }
    catch(err)
    {
        console.log(err)
    }
    
})
module.exports = router