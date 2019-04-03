
var app = new Vue({
	el:"#app",
	data:{
		id:1,
		todo:"",
		todoInfos:[
		// {
		// 	id:1,
		// 	isChecked:false,// 未完成和放弃为 false，完成为 true
		// 	isEdit:false,//是否在编辑
		// 	todoTitle:"example1",
		// 	state:0,//0:待完成 1:已完成 2:回收
		// },
		// {
		// 	id:2,
		// 	isChecked:false,
		// 	isEdit:false,//是否在编辑
		// 	todoTitle:"example2",
		// 	state:1,//0:待完成 1:已完成 2:回收
		// },
		// {
		// 	id:3,
		// 	isChecked:false,
		// 	isEdit:false,//是否在编辑
		// 	todoTitle:"example3",
		// 	state:2,//0:待完成 1:已完成 2:回收
		// }
		]
	},
	methods:{
		addTodoItem(){
			//每次点击，向数组中添加数据
			this.todoInfos.push({
				id:this.id,
				// isChecked:false, // 未完成和放弃为 false，完成为 true
				isEdit:false,//是否在编辑
				todoTitle:this.todo,//todo 标题
				state:0,//0:待完成 1:已完成 2:回收	
			})
			//id 自增
			this.id++;
			//清空输入框
			this.todo=""
		},
		deleteInfo(recycleItem){
			this.todoInfos=this.todoInfos.filter((x)=>{
				return x.id != recycleItem.id;
			})
		}
	}
})