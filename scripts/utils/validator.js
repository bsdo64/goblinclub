/**
 * Created by dobyeongsu on 2015. 10. 20..
 */
import validator from 'validator';

class validateRules {
    constructor () {
        this.errors = [];
    }
    loginUser(email, password, callback) {

        if (!validator.isEmail(email))
            this.errors.push('이메일을 올바르게 입력해주세요');

        if (!validator.isLength(password, 6, 12))
            this.errors.push('Password must be between 5 and 10 characters');
        if (!validator.matches(password, /[a-z]/i))
            this.errors.push('Password must contain a letter');
        if (!validator.matches(password, /\d/i))
            this.errors.push('Password must contain a number');
        if (!validator.matches(password, /^[a-z0-9_-]+$/i))
            this.errors.push('Password can only contain alphanumeric characters, underscores and hyphens');

        var error, result;
        if (_.isEmpty(this.errors)) {
            error = null;
            result = true
        } else {
            error = this.errors;
            result = false
        }
        callback(error, result)
    }
}

export default validateRules;