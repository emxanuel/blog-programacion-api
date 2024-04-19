const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 username: {
    type: String,
    required: true,
    unique: true
  },
email: {
    type: String,
    required: true,
    unique: true
  },
   password: {
    type: String,
    required: true
  },
  courses: [],
  sections: []
},
{
  timestamps: true
});
const UserModel = mongoose.model('Users', UserSchema);
export default = UserModel;

