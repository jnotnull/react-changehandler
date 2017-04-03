'use strict';
import update from 'immutability-helper';

export function handleonchange(field, format, e) {
    let eleValue = e.target.value;
    const eleType = e.target.type;

    let eletypemap = {
        'radio': function(){
            eleValue = e.target.checked;
        },

        'checkbox': function(){
            return e.target.checked;
        },

        'text': function(){
            return eleValue;
        },

        'textarea': function(){
            return eleValue;
        },

        'time': function(){
            return eleValue;
        },
        'date': function(){
            return moment(eleValue).format(format);
        },
        'datetime-local': function(){
            return moment(eleValue).format(format);
        },
    }

    let value = eletypemap[eleType].apply(this);

    let obj = {};

    const newData = update(obj, {
      field: {$set: value}
    });

    this.setState(obj);
}