(function() {
  'use strict';
  module.exports = function(ndx) {
    return ndx.app.get('/.well-known/acme-challenge/:content', function(req, res) {
      return res.send('xxxxxxxxxxxx-yyyy.zzzzzzzzzzzzzzzzzzz');
    });
  };

}).call(this);

//# sourceMappingURL=index.js.map
