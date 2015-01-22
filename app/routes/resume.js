import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
    {
      employer: "Cupcake",
      title: "Jelly-o wafer.",
      dates: "www.google.com",
      description: "Sweet marshmallow pie bear claw dragée. Pastry cake chocolate gingerbread fruitcake. Chupa chups muffin croissant jelly beans.",
    },
    {
      employer: "Cupcake",
      title: "Jelly-o wafer.",
      dates: "www.google.com",
      description: "Sweet marshmallow pie bear claw dragée. Pastry cake chocolate gingerbread fruitcake. Chupa chups muffin croissant jelly beans.",
    },
    ];
  }

});
