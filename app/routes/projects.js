import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "Colorado Wine Tracker",
        description: "This app provides information Colorado Wineries and their wine. It also keeps track of your tasting notes so you can remember if you liked that wine or not.",
        url: "http://www.wine-tracker.co/",
        github: "https://github.com/figmentbml/wine-tracker",
        skills: ["Ruby on Rails", "Gems: Yelp API, Carrierwave, Fog, Nokogiri", "Rake Tasks", "Scraping Sites", "Forms", "User Authorization", "Bootstrap", "Associations", "Controller Specs"],
        image: "/assets/Screen Shot wine tracker.png",
      },
      {
        id: "2",
        name: "gCamp",
        description: "A Rails app that has some of the same functionality as Basecamp.",
        url: "http://stormy-cove-1200.herokuapp.com/",
        github: "https://github.com/figmentbml/gCamp",
        skills: ["Ruby on Rails", "Join Tables", "User Authorization", "Rspec", "Capybara"],
        image: "/assets/Screen Shot gcamp.png",
      },
      {
        id: "3",
        name: "Listen",
        description: "Simple Music Player",
        url: "http://development.listen-beth-j.divshot.io/",
        github: "https://github.com/figmentbml/listen",
        skills: ["JavaScript click events", "jQuery", "HTML audio tags"],
        image: "",
      },

      ];
  }

});
