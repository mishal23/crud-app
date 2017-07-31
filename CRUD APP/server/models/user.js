/**
 * Created by mishal23 on 10/7/17.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    objectID = mongoose.Schema.ObjectId;

var userSchema = new Schema({
    _id: { type: objectID, auto: true},
    name: { type: String, required: true},
    contactNo: { type: String, required: true},
    address: { type: String, required: true}
},{
    versionKey: false
});

var user = mongoose.model('users',userSchema);

module.exports = user;