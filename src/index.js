'use strict';
import update from 'immutability-helper';
import moment from 'moment';

export default function handleonchange({field, cmd, format}, e) {
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

    let obj = buildPathObject(field, cmd, value);

    const newData = update(this.state, obj);

    this.setState(newData);
}

function parseField(field) {

    let terms = field.split('.');
    let result = [];

    terms.map(item => {
        result.push(item);
    })

    return result;
}

function buildPathObject(field, cmd, value){
    let path = parseField(field);
    
    // value
    let cmdValue = {};
    cmdValue[cmd] = value;

    //field
    let result = {};
    let current = result;

    path.map((item, index) => {
        if (index < path.length - 1) {
            current = current[item] = {};
        } else {
            current[path[path.length - 1]] = cmdValue;
        }
    })
    
    return result;
}
