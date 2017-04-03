'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleonchange = handleonchange;
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
    obj[field] = value;
    this.setState(obj);
}
