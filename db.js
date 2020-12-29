const mongoose = require('mongoose')


mongoose.connect('mongodb://159.75.20.143/mytest',{
  useNewUrlParser: true
}).then(value => {
  console.log(value)
}).catch(reason => {
  console.log(reason)
});

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'lyanm2' });
// kitty.save().then(() => console.log('meow'));