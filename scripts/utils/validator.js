/**
 * Created by dobyeongsu on 2015. 10. 20..
 */
import validator from 'validator';
import immutable from 'immutable';

class validateRules {
    constructor () {
        this.res = immutable.Map({
            errors: null,
            result: null
        });
    }
    _checkError(result) {
        if(result.get('errors').size > 0) {
            result = result.set('result', false);
        } else {
            result = result.set('result', true);
        }
        return result
    }
    loginUser(user, callback) {
        let result = this.res;
        result = result.set('errors', immutable.Map({ email : immutable.List(), password : immutable.List()}));

        if (!validator.isEmail(user.get('email')))
            result = result.updateIn(['errors', 'email'], list=> list.push('이메일을 올바르게 입력해주세요'));

        if (!validator.isLength(user.get('password'), 6, 12))
            result = result.updateIn(['errors', 'password'], list=> list.push('Password must be between 5 and 10 characters'));
        if (!validator.matches(user.get('password'), /[a-z]/i))
            result = result.updateIn(['errors', 'password'], list=> list.push('Password must contain a letter'));
        if (!validator.matches(user.get('password'), /\d/i))
            result = result.updateIn(['errors', 'password'], list=> list.push('Password must contain a number'));
        if (!validator.matches(user.get('password'), /^[a-z0-9_-]+$/i))
            result = result.updateIn(['errors', 'password'], list=> list.push('Password can only contain alphanumeric characters, underscores and hyphens'));

        result = this._checkError(result);
        return callback(result)
    }
}

export default validateRules;