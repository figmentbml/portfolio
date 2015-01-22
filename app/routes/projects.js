import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "gCamp",
        description: "A Rails app that has some of the same functionality as Basecamp.",
        url: "http://stormy-cove-1200.herokuapp.com/",
        github: "https://github.com/figmentbml/gCamp",
        skills: ["Ruby", "Rails", "Join Tables", "User Authorization", "Rspec", "Capybara"],
      },
      {
        id: "2",
        name: "Colorado Wine Tracker",
        description: "Personal Project",
        url: "http://www.wine-tracker.co/",
        github: "https://github.com/figmentbml/wine-tracker",
        skills: ["Rake Tasks", "Scraping Sites", "Yelp API", "Carrierwave & Fog", "Forms"],
      },
      {
        id: "3",
        name: "Listen",
        description: "Simple Music Player",
        url: "http://development.listen-beth-j.divshot.io/",
        github: "https://github.com/figmentbml/listen",
        skills: ["JavaScript click events", "jQuery", "HTML audio tags"],
      },

      ];
  }

});
