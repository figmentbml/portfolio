import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "Colorado Wine Tracker",
        description: "This app provides information about Colorado Wineries and their wine. It also keeps track of your tasting notes so you can remember if you liked that wine or not.",
        url: "http://www.wine-tracker.co/",
        github: "https://github.com/figmentbml/wine-tracker",
        skills: ["Ruby on Rails", "Gems: Yelp API, Carrierwave, Fog, Nokogiri", "Rake Tasks", "Scraping Sites", "Forms", "User Authorization", "Bootstrap", "Associations", "Controller Specs"],
        image: "/assets/Screen Shot wine tracker.png",
        medium: "http://medium.com/gschool-chronicles/introducing-colorado-wine-tracker-a2006ad18171",
        climate: "https://codeclimate.com/github/figmentbml/wine-tracker",
        climateBadge: "https://codeclimate.com/github/figmentbml/wine-tracker/badges/gpa.svg",
        travisCI: "https://travis-ci.org/figmentbml/wine-tracker",
        travisCIbadge: "https://travis-ci.org/figmentbml/wine-tracker.svg?branch=master",
      },
      {
        id: "2",
        name: "gCamp",
        description: "A Rails app that has some of the same functionality as Basecamp.",
        url: "http://stormy-cove-1200.herokuapp.com/",
        github: "https://github.com/figmentbml/gCamp",
        skills: ["Ruby on Rails", "Join Tables", "User Authorization", "Rspec", "Capybara"],
        image: "/assets/Screen Shot gcamp.png",
        medium: "",
        climate: "https://codeclimate.com/github/figmentbml/gCamp",
        climateBadge: "https://codeclimate.com/github/figmentbml/gCamp/badges/gpa.svg",
        travisCI: "https://travis-ci.org/figmentbml/gCamp",
        travisCIbadge: "https://travis-ci.org/figmentbml/gCamp.svg?branch=master",
      },
      {
        id: "4",
        name: "This Portfolio",
        description: "This app contains a welcome page, information about my projects, and my resume.",
        url: "http://beth-jaswa.herokuapp.com/",
        github: "https://github.com/figmentbml/portfolio",
        skills: ["all custom CSS & HTML", "Ember.js", "Handlebars.js"],
        image: "/assets/Screen Shot portfolio.png",
        medium: "",
        climate: "",
        climateBadge: "",
        travisCI: "",
        travisCIbadge: "",
      },
      {
        id: "3",
        name: "Ember Blog",
        description: "Basic blog with Ember front end and Rails API",
        url: "http://jaswa-blog.herokuapp.com/posts",
        github: "https://github.com/figmentbml/beth-blog-api",
        skills: ["Ember.js", "Handlebars.js", "Rails API", "Ember Associations", "Search Posts", "Flash Messages", "all custom CSS & HTML"],
        image: "/assets/Screen Shot blog.png",
        medium: "",
        climate: "",
        climateBadge: "",
        travisCI: "",
        travisCIbadge: "",
      },

      {
        id: "5",
        name: "Listen",
        description: "Simple Music Player",
        url: "http://development.listen-beth-j.divshot.io/",
        github: "https://github.com/figmentbml/listen",
        skills: ["JavaScript click events", "jQuery", "HTML audio tags"],
        image: "/assets/Screen Shot listen.png",
        medium: "",
        climate: "",
        climateBadge: "",
        travisCI: "",
        travisCIbadge: "",
      },



      ];
  }

});
