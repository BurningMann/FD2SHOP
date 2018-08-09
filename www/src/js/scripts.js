'use strict'
/* window.onhashchange=switchToStateFromURLHash;
    
function switchToStateFromURLHash() {
 var URLHash=window.location.hash;
 var stateStr=URLHash.substr(1);
 if(stateStr=="Main"){
	
	let time2 = 3
	let timeText2 = "Лондон (GMT)"
	const model2 = new Model(time2);
	const controller2 = new Controller(model2, new View(model2, document.body, timeText2));

 }
if(stateStr=="Photo"){
			 
		let time1 = 8
		let timeText1 = "Нью-Йорк (GMT-5)"
		const model = new Model(time1);
		const controller = new Controller(model, new View(model, document.body, timeText1));
		
 }

} */

  function switchToState(newState) {

    var stateStr=newState.pagename;
    location.hash=stateStr;

  }
function time1(){

 switchToState( { pagename:'progaming' } );
}
/*  import { Model } from '/Cloc/ClocModel.js';

import { Controller } from '/Cloc/ClocRouter.js';
import { View } from '/Cloc/ClocView.js'; 
		 require.config({
            baseUrl: './Cloc/'
        });
		 require(['ClocModel.js', 'ClocView.js', 'ClocRouter.js'],
            function(Model, View, Controller) {});  
            
          require.config({
            baseUrl: './'
        });
			require(['model.1.js', 'view.1.js', 'controller.1.js'],
            function(Model, View, Controller) {});  */
			
			
			
			
			
    /* class Model {
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
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			

function time2(){
 switchToState( { pagename:'Photo'} );

}
 */