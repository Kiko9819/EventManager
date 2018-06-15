var express = require("express"),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

mongoose.connect("mongodb://localhost/event_manager_app");
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
  extended: true
}));
// MONGOOSE/MODEL CONFIG
var eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String
});

var Event = mongoose.model("Event", eventSchema);

// RESTful ROUTES

// INDEX ROUTE
app.get("/", function(req, res) {
  res.redirect("/events");
});

app.get("/events", function(req, res) {
  Event.find({}, function(err, events) {
    if (err) {
      console.log("Error");
    } else {
      res.render("index", {
        events: events
      });
    }
  });
});
// NEW ROUTE
app.get("/events/new", function(req, res) {
  res.render("new");
});
// CREATE ROUTE
app.post("/events", function(req, res) {
  var data = req.body.event;
  Event.create(data, function(err, newEvent) {
    if (err) {
      res.render("new");
    } else {
      res.redirect("/events");
    }
  })
});
// EDIT ROUTE
app.get("/events/:id/edit", function(req, res) {
  Event.findById(req.params.id, function(err, foundEvent) {
    if (err) {
      res.redirect("/events");
    } else {
      res.render("edit", {
        event: foundEvent
      });
    }
  });
});
// UDPATE ROUTE
app.put("/events/:id",function(req,res){
  Event.findByIdAndUpdate(req.params.id,req.body.event,function(err,updatedEvent){
    if(err){
      res.redirect("/events");
    } else{
      res.redirect("/events");
    }
  });
});
// DELETE ROUTE
app.delete("/events/:id",function(req,res){
  Event.findByIdAndRemove(req.params.id,function(err){
    if(err){
      res.redirect("/events");
    } else {
      res.redirect("/events");
    }
  });
});
app.listen(3000, function() {
  console.log("Server is running");
});
