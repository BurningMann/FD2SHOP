
define(function() {
 class View {
	constructor(model, host, timetext) {
		this.model = model;
		this.element = null;
		this.clock = null;
		this.circleHours = null;
		this.circleMin = null;
		this.circleSec = null;
		this.strelka = null
		this.text = null
		this.check = null;
		this.stop = null;
		this.start = null;
		this.timetext = timetext;
		this.host = host;
		this.onCheckedCallback = null;
		this.dellelements = document.getElementsByClassName("hosts")
	}
	render() {
		if (!this.element) {
			for(let i=0;i<this.dellelements.length;i++){
			this.dellelements[0].remove();
			}
			this.element = document.createElement('div');
			this.host.appendChild(this.element);
			this.element.className = "hosts"
			this.host = this.element;
			this.stop = document.createElement('input');
			this.stop.type = 'button';
			this.stop.value = 'стоп';
			this.stop.addEventListener('click', () => this.onChecked(false));
			this.element.appendChild(this.stop);
			this.start = document.createElement('input');
			this.start.type = 'button';
			this.start.value = 'пуск';
			this.start.addEventListener('click', () => this.onChecked(true));
			this.element.appendChild(this.start);
			this.text = document.createElement('p')
			this.element.appendChild(this.text);
			this.text.innerHTML = this.timetext;
			this.clock = document.createElement('div');
			this.host.appendChild(this.clock);
			this.clock.className = "clock";
			this.text = document.createElement('p')
			this.clock.appendChild(this.text);
			this.text.className = "timestring";
			this.circleHours = document.createElement('div');
			this.clock.appendChild(this.circleHours);
			this.circleHours.className = "circleHours";
			this.strelka = document.createElement('div');
			this.circleHours.appendChild(this.strelka);
			this.strelka.className = "strelkaHours";
			this.circleMin = document.createElement('div');
			this.clock.appendChild(this.circleMin);
			this.circleMin.className = "circleMin";
			this.strelka = document.createElement('div');
			this.circleMin.appendChild(this.strelka);
			this.strelka.className = "strelkaMin";
			this.circleSec = document.createElement('div');
			this.clock.appendChild(this.circleSec);
			this.circleSec.className = "strelka";
			this.strelka = document.createElement('div');
			this.circleSec.appendChild(this.strelka);
			this.strelka.className = "strelkaSec";
		}
		if (this.model) {
			this.text.innerHTML = this.model.value.toLocaleTimeString()
			$(this.circleSec).css("transform", "rotate(" + this.model.value.getSeconds() * 6 + "deg)")
			$(this.circleMin).css("transform", "rotate(" + this.model.value.getMinutes() * 6 + "deg)")
			$(this.circleHours).css("transform", "rotate(" + this.model.value.getHours() * 15 + "deg)")
		}
	}
	onChecked(engine) {
		this.onCheckedCallback(engine);
	}
}
return View; 
})