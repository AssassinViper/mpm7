const UserSchema = {
    name: 'User',
    properties: {
      verified:{type: 'bool'},
      phone_number: {type: 'string'},
      token:  {type: 'string'},
      full_name:  {type: 'string'},
      city:  {type: 'string'},
    }
};


export default Models = [UserSchema];