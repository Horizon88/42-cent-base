var _ = require('lodash');

module.exports = function mapKeys(source, schema, target) {
    var obj = target || {};

    _.forOwn(source, function (value, key) {
        if (schema[key]) {
            if (_.isFunction(schema[key])) {
                //function(value,srcKey, sourceObject, destObj)
                schema[key](value, key, source, obj);
            } else {
                obj[schema[key]] = value;
            }
        }
    });
    return obj;
};
