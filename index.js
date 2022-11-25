'use strict';

const showDaily = document.querySelector('.showDaily');
const showWeekly = document.querySelector('.showWeekly');
const showMonthly = document.querySelector('.showMonthly');

const cardWorkDaily = document.querySelector('.card__work__hours--daily');
const cardPlayDaily = document.querySelector('.card__play__hours--daily');
const cardStudyDaily = document.querySelector('.card__study__hours--daily');
const cardExerciseDaily = document.querySelector('.card__exercise__hours--daily');
const cardSocialDaily = document.querySelector('.card__social__hours--daily');
const cardSelfcareDaily = document.querySelector('.card__selfcare__hours--daily');

const cardWorkWeekly = document.querySelector('.card__work__hours--weekly');
const cardPlayWeekly = document.querySelector('.card__play__hours--weekly');
const cardStudyWeekly = document.querySelector('.card__study__hours--weekly');
const cardExerciseWeekly = document.querySelector('.card__exercise__hours--weekly');
const cardSocialWeekly = document.querySelector('.card__social__hours--weekly');
const cardSelfcareWeekly = document.querySelector('.card__selfcare__hours--weekly');

const cardWorkMonthly = document.querySelector('.card__work__hours--monthly');
const cardPlayMonthly = document.querySelector('.card__play__hours--monthly');
const cardStudyMonthly = document.querySelector('.card__study__hours--monthly');
const cardExerciseMonthly = document.querySelector('.card__exercise__hours--monthly');
const cardSocialMonthly = document.querySelector('.card__social__hours--monthly');
const cardSelfcareMonthly = document.querySelector('.card__selfcare__hours--monthly');

const getHourData = fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        showDaily.addEventListener('click', () => {
            cardWorkDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
            cardPlayDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
            cardStudyDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
            cardExerciseDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
            cardSocialDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
            cardSelfcareDaily.innerHTML = `${data[0].timeframes.daily.current} HOURS`
        })
    })