## react-changehandler

<a href="https://nodei.co/npm/react-changehandler/"><img src="https://nodei.co/npm/react-changehandler.png?downloads=true&downloadRank=true&stars=true"></a>

react-changehandler designed to make developing react form easier in state components.

Just add `onChange={handleonchange.bind(this, {field: 'formdata.effective_start_time', cmd: '$set', format: 'YYYY-MM-DDTHH:mm'})}` to input, react-changehandler will set value of input to `this.state.formdata.effective_start_time` when the value of input changed.

support input type:

- radio,
- checkbox,
- text
- textarea
- time
- date
- datetime-local

support cmd:

- $set
- $push

## Install

	npm install react-changehandler

## Usage

	import handleonchange from 'react-changehandler';
	
text:

	<input name='form-name' value={this.state.formdata.name} onChange={handleonchange.bind(this, {field: 'formdata.name', cmd: '$set', format: null})} type='text' placeholder='请输入标题'/>

password:

    <input type="password" placeholder="password" onChange={handleonchange.bind(this, {field: 'password', cmd: '$set', format: null})} />

datetime:

	<input value={this.state.formdata.effective_start_time} onChange={handleonchange.bind(this, {field: 'formdata.effective_start_time', cmd: '$set', format: 'YYYY-MM-DDTHH:mm'})} type='datetime-local' placeholder='请输入生效时间'/>

radio:

	<input type='radio' name='operation' id='operation_equal' checked={this.state.operation_equal === true} onChange={handleonchange.bind(this, {field: 'operation_equal', cmd: '$set', format: null, allfields: ['operation_equal', 'operation_begin', 'operation_include', 'operation_end']})}/>

checkbox:

	<input type='checkbox' value={this.state.editfields[field]} placeholder={'请输入' + name}  onChange={handleonchange.bind(this, {field: "editfields." + field, cmd: '$set', format: null})} />}

select:

	<select value={this.state.operationtype} onChange={handleonchange.bind(this, {field: 'operationtype', cmd: '$set', format: null})}>
    	{
    		Object.keys(operationtypemap[this.props.type]).map(item => {
    			return <option value={item}>{operationtypemap[this.props.type][item]}</option>
    		})
    	}
    	
    </select>

callback:

	<select value={this.state.complaintype} onChange={handleonchange.bind(this, {field: 'complaintype', cmd: '$set', format: null, callback: this.selectcomplaintypecallback.bind(this)})}>
    	{
    		Object.keys(complaintypemap).map(item => {
    			return <option value={complaintypemap[item]}>{complaintypemap[item]}</option>
    		})
    	}
    </select>

    selectcomplaintypecallback(){

    }

## Compile

	babel ./src/index.js --out-file ./dist/index.js


## History
	0.1.0 init
	0.1.1 2017-06-07 support radio type
	0.1.2 2017-09-01 support callback
    0.1.3 2017-09-27 support password