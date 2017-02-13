'use strict'

module.exports = (ndx) ->
  ndx.app.get '/.well-known/acme-challenge/:content', (req, res) ->
    res.send 'xxxxxxxxxxxx-yyyy.zzzzzzzzzzzzzzzzzzz'