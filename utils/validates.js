import schema from "async-validator";

const descriptor = {
  accountOrPassword: {
    type: "string",
    required: true,
    pattern: /^\S*$/,
    message: `accountOrPassword error`
  },
  account: {
    type: "string",
    required: true,
    pattern: /^[(A-Z)|(a-z)|(0-9)]{2,12}$/,
    message: `account error`
  },
  email: {
    type: "string",
    required: true,
    pattern: /^([a-z0-9A-Z]+[_|.]*)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?[.])+[a-zA-Z]{2,}$/,
    message: `email erroe`
  },
  password: {
    type: "string",
    required: true,
    pattern: /^[(A-Z)|(a-z)|(0-9)]{6,16}$/,
    message: `password error`
  },
  repassword: [
    {
      type: "string",
      required: true,
      message: `repassword error`
    },
    {
      validator(rule, value, callback, source, options) {
        var errors = [];
        // test if email address already exists in a database
        // and add a validation error to the errors array if it does
        if (source.repassword !== source.password) {
          errors.push({
            message: `repassword error`,
            field: rule.field
          });
        }
        callback(errors);
      }
    }
  ],
  iphone: {
    type: "string",
    required: true,
    pattern: /^1\d{10}$/,
    message: `iphone erroe`
  },
  verificationCode: {
    type: "string",
    required: true,
    pattern: /^[0-9]\d{5}$/,
    message: `verificationCode error`
  }
};
const validator = (rules = []) => {
  const newDescriptor = {};
  rules.map(item => (newDescriptor[item] = descriptor[item]));
  return new schema(newDescriptor);
};
export const validPassword = value => {
  return descriptor.password.pattern.test(value);
};
export const validAccount = value => {
  return descriptor.account.pattern.test(value) && !/^[0-9]+$/.test(value);
};
export const valideEmail = value => {
  return descriptor.email.pattern.test(value);
};

export const valideIphone = value => {
  return descriptor.iphone.pattern.test(value);
};

export default validator;
