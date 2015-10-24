/**
 * Created by dobyeongsu on 2015. 10. 20..
 */
import validator from 'validator';
import immutable from 'immutable';

class validateRules {
    constructor () {
        this.res = {
            errors: {},
            result: null
        };
    }
    _checkError(result) {
        let countErrors = 0;

        for (var key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
                var errArray = result.errors[key];
                if (errArray.length > 0) {
                    countErrors += errArray.length;
                }
            }
        }

        result.result = !countErrors;
        return result
    }
    loginUser(user, callback) {
        let result = this.res;
        result.errors = { email : [], password : [] };

        if (!validator.isEmail(user.email))
            result.errors.email.push(['이메일을 올바르게 입력해주세요']);

        if (!validator.isLength(user.password, 6, 12))
            result.errors.password.push(['Password must be between 5 and 10 characters']);
        if (!validator.matches(user.password, /[a-z]/i))
            result.errors.password.push(['Password must contain a letter']);
        if (!validator.matches(user.password, /\d/i))
            result.errors.password.push(['Password must contain a number']);
        if (!validator.matches(user.password, /^[a-z0-9_-]+$/i))
            result.errors.password.push(['Password can only contain alphanumeric characters, underscores and hyphens']);

        result = this._checkError(result);
        return callback(result, user)
    }
}

export default validateRules;