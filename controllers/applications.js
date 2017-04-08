var express = require('express');
var router = express.Router();
var applications = require('../models/application.js');
var Company = require('../models/company.js');
// Parses information from POST
var bodyParser = require('body-parser');
//  used to manipulate POST
var methodOverride = require('method-override');

router.get('/', (req, res) => {
    Company.find({})
            .exec((err, companies) => {
                if(err) console.log(err);
                res.json({companies: companies});
            })
});

router.get('/:companyId/app/:appId', (req, res) => {
    Company.findById(req.params.companyId)
            .exec((err, company) => {
                if(err) res.json({message: 'coudnot not find company bcoz' + err});
                var app = company.applications.id(req.params.appId);
                console.log(app);
                res.json({app: app});
            });
});

module.exports = router;