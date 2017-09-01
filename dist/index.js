'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleonchange;

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleonchange(_ref, e) {
    var field = _ref.field,
        cmd = _ref.cmd,
        format = _ref.format,
        allfields = _ref.allfields,
        callback = _ref.callback;

    var eleValue = e.target.value;
    var eleType = e.target.type;

    var eletypemap = {
        'radio': function radio() {
            var index = allfields.indexOf(field);
            allfields.splice(index, 1);
            return e.target.checked;
        },

        'checkbox': function checkbox() {
            return e.target.checked;
        },

        'select-one': function selectOne() {
            return eleValue;
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
            return (0, _moment2.default)(eleValue).format(format);
        },
        'datetime-local': function datetimeLocal() {
            return (0, _moment2.default)(eleValue).format(format);
        }
    };

    var value = eletypemap[eleType].apply(this);

    var obj = {};

    obj = buildPathObject(field, cmd, value);

    var newData = (0, _immutabilityHelper2.default)(this.state, obj);

    if (eleType == 'radio') {
        allfields.map(function (item) {
            newData[item] = false;
        });
    }

    this.setState(newData, function(){
        if (callback) {
            callback.apply(this)
        }
    });
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
