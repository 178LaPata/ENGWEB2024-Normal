var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(dados => {
      var d = new Date().toISOString().substring(0, 16)
      res.render('index', {'lista': dados.data, data: d})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(dados => {
      var d = new Date().toISOString().substring(0, 16)
      res.render('contrato', { 'contrato': dados.data, data: d}) 
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/entidades/:idEntidade', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.idEntidade)
    .then(dados => {
      var d = new Date().toISOString().substring(0, 16)
      var totalPrecoContratual = dados.data.reduce((total, item) => {
        return total + (item.precoContratual || 0)
      }, 0);
      res.render('entidade', { 'entidade': dados.data, data: d, 'resSoma': totalPrecoContratual})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});


module.exports = router;
