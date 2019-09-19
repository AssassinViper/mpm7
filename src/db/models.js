const UserSchema = {
    name: 'User',
    primaryKey: 'phone_number',
    properties: {
      verified:{type: 'bool'},
      parent: {type: 'bool'},
      phone_number: {type: 'string'},
      token:  {type: 'string'},
      first_name:  {type: 'string'},
      last_name:  {type: 'string'},
      national_code:  {type: 'string'},
      password:  {type: 'string'},
      plan_ids: {type: 'string'},
      group_id: {type: 'int'},
      field_id: {type: 'int'},
      gender: {type: 'int'},
      group_id: {type: 'int'},
    }
};

const NotificationSchema = {
  name:"Notification",
  primaryKey:'id',
  properties:{
    id:{type: 'int'},
    title:{type: 'string'},
    preview_content:{type: 'string'},
    content:{type: 'string'},
    created_at:{type: 'string'},
    updated_at:{type: 'string'},
    user_id:{type: 'int'}
  }
}

const ProgramSchema = {
  name:"Program",
  primaryKey:'id',
  properties:{
    id:{type: 'int'},
    title:{type: 'string'},
    preview_content:{type: 'string'},
    content:{type: 'string'},
    thumbnail:{type: 'string'},
    created_at:{type: 'string'},
    updated_at:{type: 'string'},
    user_id:{type: 'int'}
  }
}

const MediaSchema = {
  name:"Media",
  primaryKey:'id',
  properties:{
    id:{type: 'int'},
    title:{type: 'string'},
    description:{type: 'string'},
    media:{type: 'string'},
    created_at:{type: 'string'},
    updated_at:{type: 'string'},
    user_id:{type: 'int'}
  }
}

const GroupSchema = {
  name: 'Group',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    title: {type: 'string'},
    created_at: {type: 'string'},
    user_id:{type: 'int'}
  }
}

const FieldSchema = {
  name: 'Field',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    title: {type: 'string'},
    created_at: {type: 'string'},
    user_id:{type: 'int'}
  }
}

const PlanSchema = {
  name: 'Plan',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    title: {type: 'string'},
    description: {type: 'string'},
    created_at: {type: 'string'},
    user_id:{type: 'int'}
  }
}

export default Models = [UserSchema, GroupSchema, FieldSchema, PlanSchema
,NotificationSchema, ProgramSchema, MediaSchema];