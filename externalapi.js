var axios = require('axios');
var parseXML = require('xml-parse-from-string')


var config = {
  method: 'get',
  url: 'https://news.google.com/rss/search?q=<client name>',
  headers: { 
  }
};

// TODO : Complete integration with external api
axios(config)
.then(function (response) {
    str = response.data;
    var doc = parseXML(str);
    var tag = doc.getElementsByTagName('title')[0];
    console.log(tag);

})
.catch(function (error) {
  console.log(error);
});
