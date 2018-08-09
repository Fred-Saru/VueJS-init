new Vue({
	el: '#app',
	data: {
		showParagraph: false,
		title: "This is a title !"
	},
	methods: {
		show() {
			this.showParagraph = true;
			this.updateTitle('This is an updated title !');
		},
		updateTitle(newTitle) {
			this.title = newTitle;
		}
	}
});