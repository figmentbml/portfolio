import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "Colorado Wine Tracker",
        description: "A Rails app that provides information about Colorado Wineries and their wine. It keeps track of your tasting notes so you can remember if you liked that wine and explore how a wine changes over time.",
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
        description: "A Rails app we built for class that is similar to Basecamp. It was our first full Rails app and helped us learn about development processes.",
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
        description: "First Ember app containing more information about me, information about my projects, and my resume. It was also my first web app using Handlebars.js.",
        url: "http://beth-jaswa.herokuapp.com/",
        github: "https://github.com/figmentbml/portfolio",
        skills: ["Ember.js", "Handlebars.js", "all custom CSS & HTML"],
        image: "/assets/Screen Shot portfolio.png",
        medium: "",
        climate: "https://codeclimate.com/github/figmentbml/portfolio",
        climateBadge: "https://codeclimate.com/github/figmentbml/portfolio/badges/gpa.svg",
        travisCI: "",
        travisCIbadge: "",
      },
      {
        id: "3",
        name: "Ember Blog",
        description: "Basic blog with Ember front end powered by a Rails API. Features include posts, comments, and users.",
        url: "http://jaswa-blog.herokuapp.com/",
        github: "https://github.com/figmentbml/blog-client",
        skills: ["Ember.js", "Handlebars.js", "Rails API", "Ember Associations", "Collection Select", "Search Posts", "Flash Messages", "all custom CSS & HTML"],
        image: "/assets/Screen Shot blog.png",
        medium: "",
        climate: "https://codeclimate.com/github/figmentbml/blog-client",
        climateBadge: "https://codeclimate.com/github/figmentbml/blog-client/badges/gpa.svg",
        travisCI: "",
        travisCIbadge: "",
      },

      {
        id: "4",
        name: "Rails Blog API",
        description: "Rails API for a blog with posts, comments, and users returning different JSON depending on if it's hit from Ember or Angular.",
        url: "",
        github: "https://github.com/figmentbml/beth-blog-api",
        skills: ["Building an API", "Search Posts"],
        image: "/assets/Screen Shot rails api.png",
        medium: "",
        climate: "https://codeclimate.com/github/figmentbml/beth-blog-api",
        climateBadge: "https://codeclimate.com/github/figmentbml/beth-blog-api/badges/gpa.svg",
        travisCI: "",
        travisCIbadge: "",
      },

      {
        id: "5",
        name: "Angular Blog",
        description: "Uses same Rails API as the Ember Blog",
        url: "",
        github: "https://github.com/figmentbml/blog-angular",
        skills: ["AngularJS"],
        image: "/assets/Screen Shot angular blog.png",
        medium: "",
        climate: "https://codeclimate.com/github/figmentbml/blog-angular",
        climateBadge: "https://codeclimate.com/github/figmentbml/blog-angular/badges/gpa.svg",
        travisCI: "",
        travisCIbadge: "",
      },
      // {
      //   id: "6",
      //   name: "Listen",
      //   description: "Simple Music Player",
      //   url: "http://development.listen-beth-j.divshot.io/",
      //   github: "https://github.com/figmentbml/listen",
      //   skills: ["JavaScript click events", "jQuery", "HTML audio tags"],
      //   image: "/assets/Screen Shot listen.png",
      //   medium: "",
      //   climate: "",
      //   climateBadge: "",
      //   travisCI: "",
      //   travisCIbadge: "",
      // },
      ];
  }

});
