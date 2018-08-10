
define(function() {
  class Controller {
	constructor(model, view) {
		this.view = view;
		let self = this;
		model.changeCallback = function() {
			self.renderView();
		}
		view.onCheckedCallback = function(engine) {
			model.start(engine)
		}
	}
	renderView() {
		this.view.render();
	}
}
return Controller;
})