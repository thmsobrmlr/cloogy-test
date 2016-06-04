var login = "jEknowledge4@jEknowledge.com";
var password = "jEknowledge*4";

var rp = require('request-promise');

function createSession(login, password) {
  var req = {
    uri: 'http://api.cloogy.com/api/1.4/sessions',
    json: true,
    method: 'POST',
    body: {
      "Login": login,
      "Password": password
    }
  };

  var res = rp(req)
    .then(function (res) {
      console.log(res.Token);
    })
    .catch(function (err) {
      console.log(err.response.body);
    });
}

// createSession(login, password)

/////////
// var token = "iW/AENLvxI0rnQQnT8yhTIEPoDN9vQrmctQ2rcZ7rGEZQDoF+/M5o1KYrXGVjiK/k4O4ubXnBsNhwO29csU5mNVCV/arXsRif7zN9R/Z0sWC2fCZNw4kqR+P1N9wvaPEhjc="; // 7042
var token = "wNS+/NCZQwO7sEYZj71gepsrf1jKBdByDSNjA94MdxRN2ZshrNEYgyd4Wp50GMX2LmHK8Le3zVThexk/jn/SMsgq3XqxQsSdEFL53NWbpDMGUiOujqMxKQ=="; // 6873

function findUnits(token) {
  var req = {
    uri: 'http://api.cloogy.com/api/1.4/units',
    json: true,
    headers: { 'Authorization': 'ISA ' + token },
  };

  var res = rp(req)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.response.body);
    });
}

// findUnits(token);

function findTags(token) {
  var req = {
    uri: 'http://api.cloogy.com/api/1.4/tags',
    json: true,
    headers: { 'Authorization': 'ISA ' + token },
  };

  var res = rp(req)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.response.body);
    });
}

// findTags(token);

function findDevices(token) {
  var req = {
    uri: 'http://api.cloogy.com/api/1.4/devices?order=%5B-Id%5D&page_size=200',
    json: true,
    headers: { 'Authorization': 'ISA ' + token },
  };

  var res = rp(req)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.response.body);
    });
}

findDevices(token);

function actuate(token, tagId, command) {
  var req = {
    uri: 'http://api.cloogy.com/api/1.4/actuations',
    json: true,
    method: 'POST',
    headers: { 'Authorization': 'ISA ' + token },
    body: {
      "TagId": "a",//tagId,
      "Command": "a"//command
    }
  };

  var res = rp(req)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.response.body);
    });
}

// actuate(token, 148057, "1")
