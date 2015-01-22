import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
    {
      employer: "Guckenheimer",
      title: "Food Service Manager",
      dates: "Feb 2012 to Sep 2014",
      location: "Boulder, CO",
      description: [
      "Ensure client's brand standards are consistently achieved and engage onsite customers on a daily basis",
      "Train Cafe Managers for other sites on internal tools, events, and client culture",
      "Manage 11 MicroKitchens in 4 buildings to insure that they offer variety of products and are stocked with items ordered from multiple vendors at $6,000 per week",
      "Manage internal Google +page with promotions, events, and menu pictures",
      "Distribute menu for both cafes detailing ingredients and allergens",
      "Manage all feedback, compliments, and requests from customers and corporate client",
      "Input all bills and manage service contracts from multiple vendors",
      "Plan and execute events ranging from MicroKitchen Fair, Annual Farm to Plate, weekly happy hours, and other catering opportunities as needed",
      "Coordinate CSA sign ups and distribute shares for office CSA programs"
      ]
      ,
    },
    {
      employer: "Guckenheimer",
      title: "Catering Production and Server",
      dates: "Apr 2010 to Feb 2012",
      location: "Boulder, CO",
      description: [],
    },
    {
      employer: "Loews Hotels",
      title: "Banquet Captain and Restaurant Supervisor",
      dates: "Sep 2009 to Apr 2010",
      location: "Denver, CO",
      description: [],
    }
    ];
  }

});
