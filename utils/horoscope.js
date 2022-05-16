const getSign = require('horoscope').getSign;
const getZodiacAnimal = require('chinese-year');
const getZodiac = require('horoscope').getZodiac;
const request = require('request');


function getUserSign(month,day){
    console.log(month);
    console.log(typeof(day));
    return getSign({month: month, day: day });
}

function getUserAnimal(year){
    const userAnimal = getZodiacAnimal.getAnimal(year);
    return userAnimal;
}

function getTodayPrediction(sign, callback){
    var options = {
    url: 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=today',
    method: 'POST'
    };
    request(options, callback);
}

function getTomorrowPrediction(sign, callback){
    var options = {
    url: 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=tomorrow',
    method: 'POST'
    };
    request(options, callback);
}

exports.getUserSign = getUserSign;
exports.getTodayPrediction = getTodayPrediction;
exports.getTomorrowPrediction = getTomorrowPrediction;
exports.getUserAnimal= getUserAnimal;
