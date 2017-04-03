## react from表单处理利器

##安装 

	npm install react-changehandler

## 使用：在state component中调用如下代码即可

	<input name='form-name' value={this.state.name} onChange={handleonchange.bind(this, 'name', null)} type='text' placeholder='请输入标题'/>

	<input value={this.state.effective_start_time} onChange={handleonchange.bind(this,'effective_start_time', 'YYYY-MM-DDTHH:mm')} type='datetime-local' placeholder='请输入生效时间'/>

## 编译

	babel ./src/index.js --out-file ./dist/index.js