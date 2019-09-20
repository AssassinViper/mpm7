const UserSchema = {
    name: 'User',
    properties: {
      verified:{type: 'bool'},
      phone_number: {type: 'string'},
      full_name:  {type: 'string'},
      city:  {type: 'string'},
      car: {type: 'string', default:"c1"},
      event: {type: 'string', default:"none"},
    }
};


export default Models = [UserSchema];