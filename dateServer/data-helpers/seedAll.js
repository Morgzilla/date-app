var tags = require('./tags');
var events = require('./events');
var util = require('./util');
var Promise = require('bluebird');


events.seedEventsAsync()
.then(tags.seedTagsAsync())
.then(util.seedEventTagRelationships('./events.csv'));

