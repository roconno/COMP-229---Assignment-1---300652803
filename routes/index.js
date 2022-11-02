var express = require('express');
var router = express.Router();

const user = {
  firstName : 'Tim',
  lastName : 'Cook',
  admin : true,
}

router.get('/', (req, res) => { res.render('../views/index', {photo : "images/home_page.jpg"})})

router.get('/aboutMe',
           (req, res) => {res.render('../views/aboutMe', {photo : "images/john_doe.jpg"})})

router.get('/contactMe', (req, res) => {res.render('../views/contactMe')})

const services = [
  { title : 'General Programming', 
    body : 'languages: Rust, C, C++, Java'},
  {
    title : 'Front End Website Development',
    body : 'frameworks: React, Vue, JQuery, Tailwind CSS, Bootstrap CSS'
  },
  {
    title : 'Back End  and Cloud Computing',
    body : 'Amazon AWS, Heroku, Mongo DB, Microsoft Azure'
  },
  {
    title : 'Video Game Programming',
    body : 'Unreal4 Engine, Unity, Cocos 2D, FrostBite'
  },
]

router.get('/services', (req, res) => {res.render('../views/services',
                                                  {articles : services})})

const projects = [
  {
    title : 'Shopping Website',
    body : 'an online store, still in progress',
    type : "cormecial project",
    role : "lead developer in a team of 5",
    image: "images/shopping.webp"
  },
  {
    title : 'Data Scrapping tool',
    body : 'Get emails and photos from linkedin, twitter and instragram',
    type : "cormecial project",
    role: "lone developer",
    image: "images/web_scraping.png"
  },
  { title : 'Horror video game', 
    body : 'Unreal4 Engine based adventure game', 
    type: "hobby project",
    role: "lone developer",
    image: "images/limbo.jpg"
  },
]

router.get('/projects', (req, res) => {res.render('../views/projects',
                                                  {articles : projects})})

module.exports = router;
