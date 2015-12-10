/**
 * Created by dobyeongsu on 2015. 10. 20..
 */
import validator from 'validator';

class validateRules {
  constructor() {
    this.res = {
      errors: {},
      result: null
    };
  }

  checkError(result) {
    let countErrors = 0;

    for (let key in result.errors) {
      if (result.errors.hasOwnProperty(key)) {
        let errArray = result.errors[key];
        if (errArray.length > 0) {
          countErrors = countErrors + errArray.length;
        }
      }
    }

    result.result = !countErrors;
    return result;
  }

  loginUser(user, callback) {
    let result = {};
    result.type = 'loginUser';
    result.errors = {email: [], password: []};

    if (!validator.isEmail(user.email)) {
      result.errors.email.push(['이메일을 올바르게 입력해주세요']);
    }

    if (!validator.isLength(user.password, 6, 12)) {
      result.errors.password.push(['Password must be between 5 and 10 characters']);
    }
    if (!validator.matches(user.password, /[a-z]/i)) {
      result.errors.password.push(['Password must contain a letter']);
    }
    if (!validator.matches(user.password, /\d/i)) {
      result.errors.password.push(['Password must contain a number']);
    }
    if (!validator.matches(user.password, /^[a-z0-9_-]+$/i)) {
      result.errors.password.push(['비밀번호는 영어와 숫자, _, -만 허용됩니다']);
    }

    result = this.checkError(result);
    return callback(null, result);
  }

  signinUser(user, callback) {
    let result = {};
    result.type = 'signinUser';
    result.errors = {email: [], nick: [], password: []};

    if (!validator.isEmail(user.signinEmail)) {
      result.errors.email.push(['이메일을 올바르게 입력해주세요']);
    }

    if (!validator.isLength(user.signinPassword, 6, 12)) {
      result.errors.password.push(['Password must be between 6 and 12 characters']);
    }
    if (!validator.matches(user.signinPassword, /[a-z]/i)) {
      result.errors.password.push(['Password must contain a letter']);
    }
    if (!validator.matches(user.signinPassword, /\d/i)) {
      result.errors.password.push(['Password must contain a number']);
    }
    if (!validator.matches(user.signinPassword, /^[a-z0-9_-]+$/i)) {
      result.errors.password.push(['비밀번호는 영어와 숫자, _, -만 허용됩니다']);
    }
    if (!validator.equals(user.signinPasswordCheck, user.signinPassword)) {
      result.errors.password.push(['비밀번호가 일치하지 않습니다']);
    }

    result = this.checkError(result);
    return callback(null, result);
  }
}

export default validateRules;
