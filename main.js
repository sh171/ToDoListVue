var vm = new Vue({
	el: "#app",
	data: {
		task: "",
		toDoList: [],
		isButtonDisabled: true
	},
	methods: {
		addToDoList() {
			this.toDoList.push(this.task);
			this.task = "";
		},
		deleteToDoList(index) {
			this.toDoList.splice(index, 1);
		},
		input() {
			this.isButtonDisabled = false;
		}
	}
})