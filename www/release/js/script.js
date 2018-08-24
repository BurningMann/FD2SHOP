'use strict';
$(document).ready(function() {
	switchToStateFromURLHash()
	let div_menu = $(`<div class="div_menu">
						<div class="div_navigation1">
							<h1 class="h2_navigation1">Игровые компьютеры</h1>	
							<ul class="ul_navigation1">
							<li class="li_navigation1"  onclick="render('progaming')" >PROGAMING СЕРИЯ</li>
							<li class="li_navigation1" onclick="render('perfomance')">PERFORMANCE СЕРИЯ</li>
							<li class="li_navigation1" onclick="render('perfomanceX')">PERFORMANCE X</li>
							<li class="li_navigation1" onclick="render('mono')">ИГРОВОЙ МОНОБЛОК</li>
							<li class="li_navigation1" onclick="render('poweredByAMD')">POWERED BY AMD</li>
							</ul>
						</div>   
					</div>
					<div class="div_menu">
						<div class="div_navigation1">
							<h1 class="h2_navigation1">Игровое пространство</h1>	
							<ul class="ul_navigation1">
							<li class="li_navigation1" onclick="render('tables')">ИГРОВЫЕ СТОЛЫ</li>
							<li class="li_navigation1" onclick="render('chairs')">ИГРОВЫЕ КРЕСЛА</li>
							</ul>
						</div>   
					</div>`);
$("#menu").append(div_menu);
let div_footer= $(`<div class="footer_box"></div>`)
$("#footer").append(div_footer);
$(".li_navigation1").click(function(){
		console.log("gg")
		$('.nav-toggle').toggleClass('active');
		$("#menu").toggleClass('menu');
			if ($("#menu").attr('class') == "") {
			$("#menu").addClass("menuout");
			setTimeout(function() {
			$("#menu").removeClass("menuout");
		}, 250);
	};	
	});
$(".product_count").text(sessionStorage.length);
$(".basket").click(function(){
	return render('basket');
	
});
});
	
$('.nav-toggle').click(function() {
	$(this).toggleClass('active');
	$("#menu").toggleClass('menu');
	if ($("#menu").attr('class') == "") {
		$("#menu").addClass("menuout");
		setTimeout(function() {
			$("#menu").removeClass("menuout");
		}, 250);
	};
});

window.onhashchange = switchToStateFromURLHash;

function switchToStateFromURLHash() {

	var URLHash = window.location.hash;
	var stateStr = URLHash.substr(1);
	if (stateStr == "") {
		$("#container").remove()
		Main()
	}
	if(stateStr == "basket") {
		$("#container").remove()
		$.get("/js/jsons/goods.json", function(obj) {
			basket(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});
		
	}
	if(stateStr == "tables") {
		$("#container").remove()
		$.get("/js/jsons/" + stateStr + ".json", function(obj) {
			Tables(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});	
	}
	if(stateStr == "poweredByAMD") {
		$("#container").remove()
		$.get("/js/jsons/" + stateStr + ".json", function(obj) {
			ASUS(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});
		
	}
	if(stateStr == "mono") {
		
		$.get("/js/jsons/" + stateStr + ".json", function(obj) {
			$("#container").remove()
			MONO(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});
		
	}
	if (stateStr=="progaming" || stateStr=="perfomance" ||stateStr=="perfomanceX") {
		$("#container").remove()
		$.get("/js/jsons/" + stateStr + ".json", function(obj) {
			Progaming(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});
	}
	if(stateStr!="progaming" && stateStr!="perfomance" &&stateStr!="perfomanceX"&&stateStr != "mono"&&stateStr != "poweredByAMD" &&stateStr != "tables"&&stateStr != "basket" &&stateStr != ""){
		$("#container").remove()
		$.get("/js/jsons/goods.json", function(obj) {
			About(obj)
		}).fail(function(err) {
			console.log(`${err.status}-${err.statusText}`);
		});		
	}
}



function Main(){
	let block1 =$(`
	<div id="container">
		<div class="main_chose">
			<div class="main_chose1">выбери</div>
			<div class="main_chose2">игровую серию</div>
		</div>
		<div class="main1">
				<div class="main1_block" onclick="render('progaming')">
					<div class ="main_box" style="background-image:url('/img/cm_lite.png');"></div>
					<div class="main_title">progaming</div>
					<div class ="main_box2">Игровые компьютеры данной серии прекрасно подойдут для игр в FullHD</div>
					<div class ="main_box2" ><img src="/img/Progaming.png"></div>
					<div class="main_tprice">от 1500 руб</div>
				</div>
				
				<div class="main1_block" onclick="render('perfomance')">
					<div class ="main_box" style="background-image:url('/img/500H.png');"></div>
					<div class="main_title">perfomance</div>
					<div class ="main_box2">Универсальные компьютеры для игр, стриминга и создания контента</div>
					<div class ="main_box2" ><img src="/img/Performance.png"></div>
					<div class="main_tprice">от 3000 руб</div>
				</div>
				
					<div class="main1_block" onclick="render('perfomanceX')">
					<div class ="main_box" style="background-image:url('/img/maker51t.png');"></div>
					<div class="main_title">perfomance X</div>
					<div class ="main_box2">Мощные компьютеры с широкими возможностями под любые задачи</div>
					<div class ="main_box2" ><img src="/img/PerformanceX.png"></div>
					<div class="main_tprice">от 4200 руб</div>
				</div>
				
					<div class="main1_block" onclick="render('mono')">
					<div class ="main_box" style="background-image:url('/img/stinger.png');"></div>
					<div class="main_title">stinger aio</div>
					<div class ="main_box2">Суперпроизводительный игровой моноблок 34" с изогнутой панелью</div>
					<div class ="main_box2" ><img src="/img/StingerAIO.png"></div>
					<div class="main_tprice">от 5300 руб</div>
				</div>
		</div>
	</div>
	`)
	$("#content").append(block1);
	let block2 =$(`
	
		<div class="main_chose">
			<div class="main_chose1">игровое</div>
			<div class="main_chose2">пространство</div>
		</div>
		<div class="main1">
				<div class="main_space" onclick="render('tables')">
					<div class ="main_box" style="background-image:url('/img/stol_pic-2.png');"></div>
					<div class="main_title">Игровые столы</div>
					<div class ="main_box3">YA:GO - это первые компьютерные столы с возможностью кастомизации. Они разработаны специально для длительного и комфортного пребывания за компьютером.</div>
				</div>
				<div class="main_space" onclick="render('chairs')">
					<div class ="main_box" style="background-image:url('/img/kreslo_pic-2.png');"></div>
					<div class="main_title">Игровые кресла</div>
					<div class ="main_box3">Каталог игровых кресел для профессиональных геймеров или людей, чья деятельность связана с длительной работой за компьютером. Все кресла имеют удобную эргономику, регулировку и большой выбор цветов.
					</div>
				</div>
		</div>
	
	`)
	$("#container").append(block2);
	
	
	
	
}
















function Progaming(obj) {
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
			<div class="page_title2">
				КЛЮЧЕВЫЕ ОСОБЕННОСТИ СЕРИИ
			</div>
			<div class="features"></div>
			<div class="parameters">
				<div class="name_of_product"></div>
				<div class="product_image"></div>
				<div class="product_characteristics"></div>
			</div>
			<div class="about"><div class="about_box">Подробнее</div></div>
		</div>
		`)
	$("#content").append(Progaming_page);


	for (let i = 0; i < obj.features.length; i++) {
		let div = $(`<div class="features_box"><img src="${obj.features[i].image}"></div>`);
		$(".features").append(div);
	}
	for (let x = 0; x < obj.goods.length; x++) {
		let blockProducts = $(`<div class="product"><div class="product_name">${obj.goods[x].name}</div><div class="product_price">${obj.goods[x].price}</div></div>`);
		$(".name_of_product").append(blockProducts);
	}
	let kkk = $(".product")[0];
	$(kkk).addClass("active_product")
	let texts = $(".active_product")[0].childNodes[0]
	fill(obj[$(texts).text()])
	for (let i = 0; i < $(".product").length; i++) {
		$(".product")[i].onclick = function() {
			if (!this.classList.contains('active_product')) {
				$(".product_image").children()[0].remove()
				let deleted_characteristics = $(".product_characteristics").children().length
				for (let y = 0; y < deleted_characteristics; y++) {
					$(".product_characteristics").children()[0].remove()
				}
				let deleted = $(".active_product")[0]
				$(deleted).removeClass("active_product")
				$(this).addClass('active_product');
				let texts = $(".active_product")[0].childNodes[0]
				return fill(obj[$(texts).text()])
			};
		}
	}
	$(".about_box").click(function(){
		let texts = $(".active_product")[0].childNodes[0]
		 texts=$(texts).text().replace(/\s+/g, '');
		console.log(texts)
		return render(texts)

	})

	function fill(productName) {
		let accessories = []
		for (let i = 0; i < productName.length; i++) {
			let keys = Object.keys(productName[i]);
			for (let x = 0; x < keys.length; x++) {
				accessories.push(keys[x])
			}
		}
		for (let i = 0; i < productName.length; i++) {
			let keys = Object.keys(productName[i])
			for (let x = 0; x < keys.length; x++) {
				if (keys[x] == "image" && Object.keys(productName[i][keys[x]][0]).length != 0) {
					let imageProduct = $(`<img src="${productName[i].image}">`);
					$(".product_image").append(imageProduct);
				}
				if (accessories.indexOf(keys[x]) != -1 && Object.keys(productName[i][keys[x]][0]).length != 0 && keys[x] != "image") {
					let div = $(`<div class="product_characteristics_box">
								<h2>${productName[i][keys[x]][0].number}</h2>
								<p>${productName[i][keys[x]][0].name1}</br>${productName[i][keys[x]][0].name2}</p>
							</div>`)
					$(".product_characteristics").append(div);
				}
			}
		}
	}
}











function ASUS(obj) {
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
			<div class="page_title2">
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
	for (let x = 0; x < obj.goods.length; x++) {
		let blockProducts = $(`<div class="product"><div class="product_name">${obj.goods[x].name}</div><div class="product_price">${obj.goods[x].price}</div></div>`);
		$(".name_of_product").append(blockProducts);
	}
	let kkk = $(".product")[0];
	$(kkk).addClass("active_product")
	let texts = $(".active_product")[0].childNodes[0]
	fill(obj[$(texts).text()])
	for (let i = 0; i < $(".product").length; i++) {
		$(".product")[i].onclick = function() {
			if (!this.classList.contains('active_product')) {
				$(".product_image").children()[0].remove()
				console.log($(".product_characteristics").children().length)
				let deleted_characteristics = $(".product_characteristics").children().length
				for (let y = 0; y < deleted_characteristics; y++) {
					$(".product_characteristics").children()[0].remove()
				}
				let deleted = $(".active_product")[0]
				$(deleted).removeClass("active_product")
				$(this).addClass('active_product');
				let texts = $(".active_product")[0].childNodes[0]
				return fill(obj[$(texts).text()])
			};
		}
	}

	function fill(productName) {
		let accessories = []
		for (let i = 0; i < productName.length; i++) {
			let keys = Object.keys(productName[i]);
			for (let x = 0; x < keys.length; x++) {
				accessories.push(keys[x])
			}
		}
		for (let i = 0; i < productName.length; i++) {
			let keys = Object.keys(productName[i])
			for (let x = 0; x < keys.length; x++) {
				if (keys[x] == "image" && Object.keys(productName[i][keys[x]][0]).length != 0) {
					let imageProduct = $(`<img src="${productName[i].image}">`);
					$(".product_image").append(imageProduct);
				}
				if (accessories.indexOf(keys[x]) != -1 && Object.keys(productName[i][keys[x]][0]).length != 0 && keys[x] != "image") {
					let div = $(`<div class="product_characteristics_box">
								<h2>${productName[i][keys[x]][0].number}</h2>
								<p>${productName[i][keys[x]][0].name1}</br>${productName[i][keys[x]][0].name2}</p>
							</div>`)
					$(".product_characteristics").append(div);
				}
			}
		}
	}
}
























function MONO(obj) {
	let Progaming_page = $(`
		<div id="container">
			<div class="page_description" ;>	
				<img src="/img/stinger-page-ban.jpg">			
			</div>
			<div class="features"></div>
			<div class="parameters">
				<p>DIGITALRAZOR STINGER - это уникальный игровой моноблок, новый класс высокопроизводительных платформ. 
					Stinger вмещает в себя все необходимое и экономит Ваше рабочее пространство, заменяя при этом традиционные громоздкие системные блоки. Главной особенностью моноблока является мощная игровая начинка и большой 34" изогнутый дисплей с разрешением 3440 x 1440 пикселей.
				</p>
				<div class="parameters_mono1">
					<div class="page_description_box">
						<h2>ИЗОГНУТЫЙ 34"-ДЮЙМОВЫЙ ЭКРАН</h2>
						<p>Игровой моноблок оснащается 34-дюймовым слегка изогнутым кинематографическим экраном с разрешением 3440x1440, соотношением сторон 21:9, и кадровой частотой 60 Гц. 

						Смените обычный монитор на изогнутый и откройте игровой мир с эффектом полного погружения. Мониторы с изогнутым экраном расширяют поле обзора: вы словно видите все своими глазами и оказываетесь в самом центре происходящего. Изогнутый экран обеспечивает более комфортные условия для зрения, глаза меньше устают.</p>
					</div>
					<div class="page_description_box"><img src="/img/Mono/stinger-page_1.jpg"></div>
				</div>
				<div class="parameters_mono1">
					<div class="page_description_box"><img src="/img/Mono/stinger-page_2.jpg"></div>
					<div class="page_description_box">
						<h2>МОЩНАЯ ИГРОВАЯ НАЧИНКА</h2>
						<p>В основе DIGITALRAZOR STINGER лежит шестиядерный процессор Intel  Core™ 8xx, последнего поколения и современная видеокарта GeForce GTX 10-й серии. Новинка построена на материнской плате с набором системной логики Intel  Z370, которая выполнена в форм-факторе Mini-ITX. Моноблок поддерживает до 32 Гбайт оперативной памяти DDR4 с частотой до 4000Mhz, а также имеет возможность установки жидкостного охлаждения для процессора. В качестве накопителей может использоваться как SSD так и HDD, этого имеется один слот с интерфейсом М.2, а также пара 2.5-дюймовых отсеков. </p>
					</div>
				</div>
				<div class="page_title">
				ГАЛЕРЕЯ
			</div>
			<div class="gallery-selector"></div>
			</div>
			
		</div>
		`)
	$("#content").append(Progaming_page);
}


function About(obj){
	function InBasket(e){
		console.log(e)
		
	}
	var URLHash = window.location.hash;
	var stateStr = URLHash.substr(1);
	let Progaming_page = $(`
		<div id="container">
			<div class="page_description">	
				<div class="page_description_box_about" style="background-image:url('${obj[stateStr][0].image}');"></div>
				<div class="page_description_box_about2">
					<h1 class="about_title">${stateStr}</h1>
					<br/>
					<br/>
					Краткие характеристики:
					<br/>
					<br/>
					<ul class="about_product">
						<li class="about_product_li"></li>
					</ul>
				
				
				
				</div>
			</div>
			<div class="in_basket">Добавить в корзину</div>
			<div class="in_basket2">достать из корзины</div>
		</div>
		`)
	$("#content").append(Progaming_page);
	let accessories = []
	for (let i = 0; i < obj[stateStr].length; i++) {
			let keys = Object.keys(obj[stateStr][i]);
			for (let x = 0; x < keys.length; x++) {
				accessories.push(keys[x])
			}
		}
	for (let i = 0; i < accessories.length; i++) {
		if(accessories[i]!="image"){
			let phase1 = obj[stateStr][i]
			let li = $(`<li class="about_product_li">- ${accessories[i]}: ${phase1[accessories[i]]}</li>`);
			$(".about_product").append(li);
		}
	}	
	$(".in_basket").click(function InBasket(){
		let product=$(".about_title")[0]
		product=$(product).text()
		 sessionStorage[`product${sessionStorage.length}`] = product; 
		 $(".product_count").text(sessionStorage.length);
		
	})
	$(".in_basket2").click(function InBasket2(e){
		console.log(sessionStorage)
	})
}



function Tables(obj){
	let keys = Object.keys(obj);
		let Progaming_page = $(`<div id="container"></div>`)
	$("#content").append(Progaming_page);
	
		for(let i=0;i<keys.length;i++){
				let box =$(`
				<div class="tables_box">
					<div class="table_title">
						<h2>Игровой стол</h2>
						<h5>${keys[i]}</h5>
					</div>
					<div class="table_price table_price${i}"></div>
					<div class="table_image table_image${i}"></div>
					<div class="table_description"><ul class="table_description_ul table_description_ul${i}"><ul></div>
				</div>
			`)
			$("#container").append(box);	
				let accessories = [],
					n=obj[keys[i]],
					one = $(`.table_price${i}`)[0],	
					two = $(`.table_image${i}`)[0],
					three = $(`.table_description_ul${i}`)[0];
					
				for (let i = 0; i < n.length; i++) {
						let keysTwo = Object.keys(n[i]);
						for (let x = 0; x < keysTwo.length; x++) {
							accessories.push(keysTwo[x])
						}
					}
				for (let i = 0; i < accessories.length; i++) {
					if(accessories[i]=="image"){
						let img=$(`<img src="${n[i][accessories[i]]}">`)
						$(two).append(img)
					}
					if(accessories[i]=="price"){
						let p=n[i][accessories[i]];
						console.log(p)
						$(one).text(p)
					}
					if(accessories[i]!="image"&&accessories[i]!="price"){
						let li = $(`<li class="table_description_li">${accessories[i]}: ${n[i][accessories[i]]}</li>`);
						$(three).append(li);
					}
				}
		
		}
	
}



function basket(obj) {
	let basket_page = $(`<div id="container">
			<div class="page_title">
				ОФОРМЛЕНИЕ ЗАКАЗА
			</div>
			<div class="basket_place">
				
			</div>
		</div>`)
	$("#content").append(basket_page);
	let accessories = []
	let keys = Object.keys(sessionStorage);
	accessories.push(keys)
	for (let i = 0; i < sessionStorage.length; i++) {
		let tovar = $(`<div class="tovari tovari${i}"><h3 class="basket_place_tovar">${sessionStorage[accessories[0][i]]}</h3><ul class="basket_place_ul basket_place_ul${i}"></ul></div>`)
		$(".basket_place").append(tovar)
		let one = $(`.basket_place_ul${i}`)[0];
		let accessories2 = []
		for (let x = 0; x < obj[sessionStorage[accessories[0][i]]].length; x++) {
			let keys2 = Object.keys(obj[sessionStorage[accessories[0][i]]][x]);
			for (let y = 0; y < keys2.length; y++) {
				accessories2.push(keys2[y])
			}
		}
		for (let u = 0; u < accessories2.length; u++) {
			let phase1 = obj[sessionStorage[accessories[0][i]]][u]
			if (accessories2 != "image") {
				let li = $(`<li class="about_product_li">- ${accessories2[u]}: ${phase1[accessories2[u]]}</li>`);
				$(one).append(li);
			}
		}
	}
}

		
	
















	

