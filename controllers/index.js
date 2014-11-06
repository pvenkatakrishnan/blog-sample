'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        model.guy = {
            is: 'good',
            looks: 'respectable',
            known: {
                for: 'philanthropy'
            }
        };
        res.render('index', model);
        
    });

};
