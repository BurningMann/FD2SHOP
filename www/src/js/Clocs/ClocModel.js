
/* define(function() { */
    class Model {
	constructor(Timezone) {
		this.value = new Date(new Date().setHours(new Date().getHours() - Timezone));
		this.changeCallback = null;
		this.isActive = true;
		let self = this;

		function recalculate() {
			self.value = new Date(new Date().setHours(new Date().getHours() - Timezone));
			if (self.isActive == false) {
				clearTimeout(self.timer);
			} else {
				self.changeCallback();
			}
			self.timer = setTimeout(recalculate, 500);
		}
		this.timer = setTimeout(recalculate, 100);
	}
	start(isOn) {
		this.isActive = isOn;
	}
}
/* return Model;
}) */