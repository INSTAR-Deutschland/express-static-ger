var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Index', {
            title: 'INSTAR Wiki',
          });
      });


      /* GET home page. */
      indexRouter.route('/Glide')
          .get(function(req, res) {
              res.render('Glide', {
                  title: 'Glide.js Demo',
                });
            });

module.exports = indexRouter;
