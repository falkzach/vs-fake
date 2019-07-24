var express = require('express');
var router = express.Router();

const stati = [
  'notScanned',
  'isComplete',
  'inProgress',
  'isVirus',
]

const randomStati = () => {
  return stati[Math.floor(Math.random() * stati.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/files', function(req, res) {
  var files = req.body.files
  let status = {}
  files.forEach(guid => {
    status[guid] = {
      status: randomStati(),
      timestamp: 'the time',
    }
  })

  console.log(status)
  res.send(status)
})

router.post('/scan', function(req, res) {
  var data = req.body
  let response = {
    status: "OK",
  }

  console.log(data)
  res.send(response)
})

module.exports = router;
