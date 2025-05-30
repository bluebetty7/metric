'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
    app.route("/api/convert").get( (req, res) =>  {
      let input = req.query.input;
      let initNum = convertHandle.getNum(input);
      let initUnit = convertHandler.getUnit(input);
  
      if (initNum === "invalid number" && initUnit === "invalid unit") {
        res.json("invalid number and unit");
      } else if (initNum === "invalid number") {
        res.json("invalid number");
      } else if (initUnit === "invalid unit") {
        res.json("invalid unit");
      }else {
        let returnNum = convertHandler.convert(initNum, initUnit);
        let returnUnit = convertHandler.getReturnUnit(initUnit);
        let toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
        );
        res.json({
          initNum, 
          initUnit,
           returnNum, 
           returnUnit, 
           string: toString
        })
      }
    });
  };