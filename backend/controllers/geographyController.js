const Country = require("../models/Country");
const State = require("../models/State");
const City = require("../models/City");
const Company = require("../models/Company");
const { CountryValidation, StateValidation, CityValidation } = require("../validators/schemas");
const Joi = require("joi");

// Country Methods
exports.getCountries = (req, res) => {
  Country.find(function (err, countries) {
    res.send(countries);
  });
};

exports.createCountry = (req, res) => {
  Joi.validate(req.body, CountryValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newCountry = { CountryName: req.body.CountryName };
      Country.create(newCountry, function (err, country) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(country);
        }
      });
    }
  });
};

exports.updateCountry = (req, res) => {
  Joi.validate(req.body, CountryValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateCountry = { CountryName: req.body.CountryName };
      Country.findByIdAndUpdate(req.params.id, updateCountry, function (err, country) {
        if (err) res.send("error");
        else res.send(updateCountry);
      });
    }
  });
};

exports.deleteCountry = (req, res) => {
  State.find({ country: req.params.id }, function (err, states) {
    if (err) res.send(err);
    else {
      if (states.length == 0) {
        Country.findByIdAndRemove({ _id: req.params.id }, function (err, country) {
          if (!err) res.send(country);
          else res.send("err");
        });
      } else {
        res.status(403).send("This country is associated with State so you can not delete this");
      }
    }
  });
};

// State Methods
exports.getStates = (req, res) => {
  State.find().populate("country").exec(function (err, states) {
    res.send(states);
  });
};

exports.createState = (req, res) => {
  Joi.validate(req.body, StateValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newState = { StateName: req.body.StateName, country: req.body.CountryID };
      State.create(newState, function (err, state) {
        if (err) {
          res.send("error");
        } else {
          Country.findByIdAndUpdate(req.body.CountryID, { $push: { states: state._id } }, function (err, country) {
            res.send(state);
          });
        }
      });
    }
  });
};

exports.updateState = (req, res) => {
  Joi.validate(req.body, StateValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateState = { StateName: req.body.StateName, country: req.body.CountryID };
      State.findByIdAndUpdate(req.params.id, updateState, function (err, state) {
        if (err) res.send("error");
        else res.send(updateState);
      });
    }
  });
};

exports.deleteState = (req, res) => {
  City.find({ state: req.params.id }, function (err, cities) {
    if (err) res.send(err);
    else {
      if (cities.length == 0) {
        State.findByIdAndRemove({ _id: req.params.id }, function (err, state) {
          if (!err) {
            Country.update({ _id: state.country[0] }, { $pull: { states: state._id } }, function (err, numberAffected) {
              res.send(state);
            });
          } else {
            res.send("err");
          }
        });
      } else {
        res.status(403).send("This state is associated with City so you can not delete this");
      }
    }
  });
};

// City Methods
exports.getCities = (req, res) => {
  City.find().populate("state").exec(function (err, cities) {
    res.send(cities);
  });
};

exports.createCity = (req, res) => {
  Joi.validate(req.body, CityValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newCity = { CityName: req.body.CityName, state: req.body.StateID };
      City.create(newCity, function (err, city) {
        if (err) {
          res.send("error");
        } else {
          State.findByIdAndUpdate(req.body.StateID, { $push: { cities: city._id } }, function (err, state) {
            res.send(city);
          });
        }
      });
    }
  });
};

exports.updateCity = (req, res) => {
  Joi.validate(req.body, CityValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateCity = { CityName: req.body.CityName, state: req.body.StateID };
      City.findByIdAndUpdate(req.params.id, updateCity, function (err, city) {
        if (err) res.send("error");
        else res.send(updateCity);
      });
    }
  });
};

exports.deleteCity = (req, res) => {
  Company.find({ city: req.params.id }, function (err, companies) {
    if (err) res.send(err);
    else {
      if (companies.length == 0) {
        City.findByIdAndRemove({ _id: req.params.id }, function (err, city) {
          if (!err) {
            State.update({ _id: city.state[0] }, { $pull: { cities: city._id } }, function (err, numberAffected) {
              res.send(city);
            });
          } else {
            res.send("err");
          }
        });
      } else {
        res.status(403).send("This city is associated with Company so you can not delete this");
      }
    }
  });
};
