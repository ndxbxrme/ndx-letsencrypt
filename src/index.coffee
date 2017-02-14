'use strict'

module.exports = (ndx) ->
  ndx.app.get '/.well-known/acme-challenge/:content', (req, res) ->
    res.send 'wlK2-xW6qis9VN4IadbdiiONGhlGma1Kd4XrsWHtdGU.Y9ft-MrxCgc0zu5wbEv0B04Zj1PD9YjPsQBzNwQmOnQ'