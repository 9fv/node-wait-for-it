const {WaitForIt} = require('../lib/wait-for-it');

WaitForIt.factory().add('.poulet:80').wait().then((x) => {
  console.log('finished!')
}).catch((e) => {
  console.log(e);
});