import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getAllEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us/");
  },
  getSeacrhedEmployee: function(name) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us/" + name);
  }
};
