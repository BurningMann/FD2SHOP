'use strict'
 import { Model } from '/Cloc/ClocModel.js';
/*
import { Controller } from '/Cloc/ClocRouter.js';
import { View } from '/Cloc/ClocView.js'; */
		/* require.config({
            baseUrl: './Cloc/'
        });
		 require(['ClocModel.js', 'ClocView.js', 'ClocRouter.js'],
            function(Model, View, Controller) {});  */
            
    /*       require.config({
            baseUrl: './'
        });
			require(['model.1.js', 'view.1.js', 'controller.1.js'],
            function(Model, View, Controller) {}); */
window.onhashchange=switchToStateFromURLHash;
    
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

}

  function switchToState(newState) {

    var stateStr=newState.pagename;
    location.hash=stateStr;

  }
function time1(){
console.log(document.getElementsByClassName("hosts"))
 switchToState( { pagename:'Main' } );
}
function time2(){
 switchToState( { pagename:'Photo'} );

}
