var fs = require('fs')
var util = require('util')
var JsonFaker = require('json-faker')

var objectTemplate = {
  'id': '@faker.random.uuid()',
  'title': '@faker.name.findName()',
  'description': '@faker.lorem.words(80)',
  'image': '@faker.image.nature(300, 300)',
  'date': '@faker.date.recent()'

}

var Obj = {
  'articles': []
}
var articles = []
var len = 100

while(len--) {
  var fakeJSON = JsonFaker.process(objectTemplate) // returns object
  Obj.articles.push(fakeJSON)
}

// Obj.articles.push(articles)

fs.writeFile('./db.json', JSON.stringify(Obj), function(err) {

  if(err) {
    return console.log(err)
  }

  console.log('The file was saved!')
});
