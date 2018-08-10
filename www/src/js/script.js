'use strict';
$(document).ready(function() {
	switchToStateFromURLHash()
	});
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$("#menu").toggleClass('menu');
		if($("#menu").attr('class')==""){
			 $("#menu").addClass("menuout");			
			 setTimeout(function(){
				 $("#menu").removeClass("menuout");
			 },250); 
		};
	});
	window.onhashchange=switchToStateFromURLHash;
	
	function switchToStateFromURLHash() {
		var URLHash=window.location.hash;
		var stateStr=URLHash.substr(1);
		if(stateStr==""){
			$("#container").remove()
		}
		if(stateStr){
			
			$("#container").remove()
			$.get("/js/jsons/"+stateStr+".json",
			function(obj){
				Progaming(obj)
			}).fail(
				function(err){
					console.log(`${err.status}-${err.statusText}`);
			});
		}
	}

	
			 let div = $(`<div class="div_menu">
						<div class="div_navigation1">
							<h1 class="h2_navigation1">Игровые компьютеры</h1>	
							<ul class="ul_navigation1">
							<li class="li_navigation1"  onclick="render('progaming')" >PROGAMING СЕРИЯ</li>
							<li class="li_navigation1" onclick="render('perfomance')">PERFORMANCE СЕРИЯ</li>
							<li class="li_navigation1" onclick="render('perfomanceX')">PERFORMANCE X</li>
							<li class="li_navigation1">ИГРОВОЙ МОНОБЛОК</li>
							<li class="li_navigation1">POWERED BY AMD</li>
							</ul>
						</div>   
					</div>perfomanceX
					<div class="div_menu">
						<div class="div_navigation1">
							<h1 class="h2_navigation1">Игровое пространство</h1>	
							<ul class="ul_navigation1">
							<li class="li_navigation1">ИГРОВЫЕ СТОЛЫ</li>
							<li class="li_navigation1">ИГРОВЫЕ КРЕСЛА</li>
							</ul>
						</div>   
					</div>`);
		$("#menu").append(div);
	
	function Progaming(obj){
		let Progaming_page = $(`
		<div id="container">
			<div class="page_title">
				PROGAMING СЕРИЯ
			</div>
			<div class="page_description">	
				<div class="page_description_box" style="background-image:url('/img/Progaming_Hero.jpg');"></div>
				<div class="page_description_box">
					<p class="page_description_text">PROGAMING - специальная серия игровых компьютеров DigitalRazor. Это оптимальный баланс производительности и доступной цены. Серия создана для поклонников современных компьютерных игр и начинающих киберспортсменов, для тех кто не может представить жизнь вне игры.</p>
				</div>
			</div>
			<div class="page_title">
				КЛЮЧЕВЫЕ ОСОБЕННОСТИ СЕРИИ
			</div>
			<div class="features"></div>
			<div class="parameters">
				<div class="name_of_product"></div>
				<div class="product_image"></div>
				<div class="product_characteristics"></div>
			</div>
		</div>
		`)
		$("#content").append(Progaming_page);
		for(let i=0;i<obj.features.length;i++){
			let div =$(`<div class="features_box"><img src="${obj.features[i].image}"></div>`);
			$(".features").append(div)	;
		}	
		for(let x=0; x<obj.goods.length; x++){
			let blockProducts=$(`<div class="product"><div class="product_name">${obj.goods[x].name}</div><div class="product_price">${obj.goods[x].price}</div></div>`);
			$(".name_of_product").append(blockProducts);
		}
		
		let kkk =$(".product")[0];
		$(kkk).addClass("active_product")
		let texts =$(".active_product")[0].childNodes[0]
		fill(obj[$(texts).text()])
		
		for(let i=0;i<$(".product").length;i++){
			$(".product")[i].onclick = function(){
				
				if(!this.classList.contains('active_product')){
					$(".product_image").children()[0].remove()
					console.log($(".product_characteristics").children().length)
					let deleted_characteristics =$(".product_characteristics").children().length
					
					for(let y=0;y<deleted_characteristics;y++){
		
						$(".product_characteristics").children()[0].remove()
					} 
					
					
					
					
					
				let deleted =$(".active_product")[0]
				 $(deleted).removeClass("active_product")
				 $(this).addClass('active_product');
				let texts =$(".active_product")[0].childNodes[0]
				
				return fill(obj[$(texts).text()])
			};
			}			
		} 
		
		
	
		
			function fill(productName){	
			
				let accessories=[]
				for(let i=0; i<productName.length;i++){
					let keys = Object.keys(productName[i]);
					for(let x=0;x<keys.length;x++){
						accessories.push(keys[x])
					}
				}
				for(let i=0; i<productName.length;i++){
					let keys = Object.keys(productName[i])
					for(let x=0;x<keys.length;x++){
						if(keys[x]=="image" && Object.keys(productName[i][keys[x]][0]).length!=0){
							let imageProduct=$(`<img src="${productName[i].image}">`);
							$(".product_image").append(imageProduct);
						}
						if(accessories.indexOf(keys[x])!=-1 && Object.keys(productName[i][keys[x]][0]).length!=0 && keys[x]!="image"){
							let div =$(
							`<div class="product_characteristics_box">
								<h2>${productName[i][keys[x]][0].number}</h2>
								<p>${productName[i][keys[x]][0].name1}</br>${productName[i][keys[x]][0].name2}</p>
							</div>`)
						$(".product_characteristics").append(div);	
						}
					}	
				}
			}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	































































	



