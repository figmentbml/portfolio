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
      "Ensured client's brand standards are consistently achieved and engaged onsite customers on a daily basis",
      "Trained Cafe Managers for other sites on internal tools, events, and client culture",
      "Managed 11 MicroKitchens in 4 buildings to insure that they offer variety of products and are stocked with items ordered from multiple vendors at $6,000 per week",
      "Managed internal Google +page with promotions, events, and menu pictures",
      "Met very specific and complicated client needs around food safety and allergens",
      "Managed all feedback, compliments, and requests from customers and corporate client",
      "Inputed all bills and manage service contracts from multiple vendors",
      "Planned and executed events ranging from MicroKitchen Fair, Annual Farm to Plate, weekly happy hours, and other catering opportunities as needed",
      "Coordinated CSA sign ups and distribute shares for office CSA programs"
      ],
    },
    {
      employer: "Guckenheimer",
      title: "Catering Production and Server",
      dates: "Apr 2010 to Feb 2012",
      location: "Boulder, CO",
      description: [
      "Set up breakfast and lunch buffet for 150 with a rotating menu",
      "Ordered supplies from main kitchen and vendors on a daily and weekly basis",
      "Worked independently with little to no interaction from manager",
      "Stocked Micro Kitchens with assorted beverages, fruit, and snacks"
      ],
    },
    {
      employer: "Loews Hotels",
      title: "Banquet Captain and Restaurant Manager",
      dates: "Sep 2009 to Apr 2010",
      location: "Denver, CO",
      description: [
      "Managed banquets and meetings of up to 100 as well as multiple functions at one time",
      "Worked closely with the Sales team and the client to ensure that everything flowed smoothly",
      "Trained staff on Loews standards and acted as Manager On Duty for entire hotel on Sunday nights",
      "Supervised restaurant to ensure proper ticket times and maintain customer satisfaction",
      "Reorganized the wine menu to promote server knowledge and increase wine sales"
      ],
    },
    {
      employer: "Hilton Norfolk Airport",
      title: "Banquet Captain",
      dates: "May 2008 to Apr 2009",
      location: "Norfolk, VA",
      description: [
      "Managed banquets and meetings of up to 300 attendees in different rooms"
      ],
    }

    ];
  }

});
