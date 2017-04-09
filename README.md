## react-changehandler

<a href="https://nodei.co/npm/react-changehandler/"><img src="https://nodei.co/npm/react-changehandler.png"></a>

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

	<input name='form-name' value={this.state.formdata.name} onChange={handleonchange.bind(this, {field: 'formdata.name', cmd: '$set', format: null})} type='text' placeholder='请输入标题'/>

	<input value={this.state.formdata.effective_start_time} onChange={handleonchange.bind(this, {field: 'formdata.effective_start_time', cmd: '$set', format: 'YYYY-MM-DDTHH:mm'})} type='datetime-local' placeholder='请输入生效时间'/>

## Compile

	babel ./src/index.js --out-file ./dist/index.js