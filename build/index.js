(function() {
  'use strict';
  module.exports = function(ndx) {
    return ndx.app.get('/.well-known/acme-challenge/:content', function(req, res) {
      return res.send('wlK2-xW6qis9VN4IadbdiiONGhlGma1Kd4XrsWHtdGU.Y9ft-MrxCgc0zu5wbEv0B04Zj1PD9YjPsQBzNwQmOnQ');
    });
  };

}).call(this);

//# sourceMappingURL=index.js.map
