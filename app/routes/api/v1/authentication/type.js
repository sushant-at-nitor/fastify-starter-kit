const userProperties = {
  id: { type: 'number' },
  firstName: { type: 'string' },
  lastName: { type: 'string', nullable: true },
  email: { type: 'string' },
  password: { type: 'string' },
  isActive: { type: 'boolean' },
  company: { type: 'string' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' },
};

const loginSchema = {
  email: { type: 'string' },
  password: { type: 'string' },
};

const loginResponse = {
  user: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      firstName: { type: 'string' },
      lastName: { type: 'string', nullable: true },
      email: { type: 'string' },
      isActive: { type: 'boolean' },
      company: { type: 'string' },
      created_at: { type: 'string' },
      updated_at: { type: 'string' },
    },
  },
  access_token: { type: 'string' },
};

const tags = ['Authentication'];

const LoginUser = {
  tags,
  body: {
    properties: loginSchema,
  },
  response: {
    200: {
      type: 'object',
      properties: loginResponse,
    },
  },
};

module.exports = {
  LoginUser,
};
