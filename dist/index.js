'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleonchange;

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleonchange(field, format, e) {
    var eleValue = e.target.value;
    var eleType = e.target.type;

    var eletypemap = {
        'radio': function radio() {
            eleValue = e.target.checked;
        },

        'checkbox': function checkbox() {
            return e.target.checked;
        },

        'text': function text() {
            return eleValue;
        },

        'textarea': function textarea() {
            return eleValue;
        },

        'time': function time() {
            return eleValue;
        },
        'date': function date() {
            return moment(eleValue).format(format);
        },
        'datetime-local': function datetimeLocal() {
            return moment(eleValue).format(format);
        }
    };

    var value = eletypemap[eleType].apply(this);

    var obj = {};

    obj = buildPathObject(field, cmd, value);

    var newData = (0, _immutabilityHelper2.default)(this.state, obj);

    this.setState(newData);
}

function parseField(field) {

    var terms = field.split('.');
    var result = [];

    terms.map(function (item) {
        result.push(item);
    });

    return result;
}

function buildPathObject(field, cmd, value) {
    var path = parseField(field);

    // value
    var cmdValue = {};
    cmdValue[cmd] = value;

    //field
    var result = {};
    var current = result;

    path.map(function (item, index) {
        if (index < path.length - 1) {
            current = current[item] = {};
        } else {
            current[path[path.length - 1]] = cmdValue;
        }
    });

    return result;
}
