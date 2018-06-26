import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticle: function() {
    return axios.get("/articles");
  },
  deleteArticle: function(data) {
    return axios.delete("/articles", data);
  },
  saveArticle: function(data) {
    return axios.post("/articles", data);
  },
  scrapeArticle: function(data) {
    return axios.post("/scrape", data);
  }
};
