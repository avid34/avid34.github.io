var siteWidth = document.documentElement.clientWidth;
var isMobile = false;
if ( siteWidth < 641 ) { isMobile = true;} 
var vcounter = 1;
$(document).ready(function() {
if (isMobile) {
	$('#slide1').before(function(index){return '<a name="page1"></a>';});
	$('#slide2').before(function(index){return '<a name="page2"></a>';});
	$('#slide3').before(function(index){return '<a name="page3"></a>';});
	$('#slide4').before(function(index){return '<a name="page4"></a>';});
	$('#slide5').before(function(index){return '<a name="page5"></a>';});
	$('#slide6').before(function(index){return '<a name="page6"></a>';});
	$('#slide7').before(function(index){return '<a name="page7"></a>';});
}
	//Инициализируем fullpage.js
	if(!isMobile){
	$('#fullpage').fullpage({
		responsiveWidth: 641,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		sectionsColor: ['#150098', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#171420'],
		menu: '#menu',
		navigation: true,
		navigationTooltips: ['TextForce','Система','Услуги','Команда','Мы не','Блог','Напишите нам'],
		scrollOverflow: true,
		afterLoad: function(link,index){
			if (index == 1 || index == 7) {
				$('.fmenu-title>a').animate({'color':'#fff'},500);
				$('.heart').css('fill','#1EFFBC');
				$('.popup-menu').css('background-image','none').css('background-color','rgba(23,20,32,0.9)');
				$('.f-open').css('stroke','#1effbb');
			}
			else
			{
				$('.fmenu-title>a').animate({'color':'#150098'},500);
				$('.heart').css('fill','#150098');
				$('.page-name, .page-number').css('color','#CCCAE3');
				$('.popup-menu').css('background-image','none').css('background-color','rgba(23,20,32,0.9)');
				$('.f-open').css('stroke','#150097');
			}
			if (index == 7) {
				$('.page-name, .page-number').css('color','#1EFFBC');
			}
			if (index == 1) {
				$('.dl-block').fadeIn(200);
			}
		},
		onLeave: function(index,nextIndex,direction){
			if (nextIndex == 1){
				$('.sidebar').hide(200);
			}
			else
			{
				var pagename = ['T e x t F o r c e','С И С Т Е М А','У С Л У Г И','К О М А Н Д А','М Ы<br><br>Н Е','Б Л О Г','Н А П И Ш И Т Е<br><br>Н А М'];
				$('.page-number').html(nextIndex+'/7');
				$('.page-name').html(pagename[nextIndex-1]);
				$('.dl-block').fadeOut(200,function(){$('.sidebar').fadeIn(200);});
			}
		}
	});}

if (!isMobile) {
	$('#article-link, #res-link, #sys-link, #exp-link').magnificPopup({}); //Инициализируем всплывающие окна
	$('.vertical-scroller').vTicker('init',{
		speed: 400,
		pause: 5000,
		showItems: 3,
		startPaused: true,
		margin: 50,
	});
	$(document).on('click','.up-arrow',function(e){
		vcounter = vcounter - 2;
		$('.vertical-scroller').vTicker('prev',{animate: true});
	});
	$(document).on('click','.down-arrow',function(e){
		$('.vertical-scroller').vTicker('next',{animate: true});
	});
	$('.vertical-scroller').on('vticker.afterTick', function(){
		vcounter = ++vcounter;
		if (vcounter < 1) {vcounter = 3}
		if (vcounter > 3) {vcounter = 1}
		$('.vertical-counter').html('0'+vcounter);
	});
}
else
{
	$('#article-link').magnificPopup({});
	$('#result, #sys, #exp').removeClass('modal mfp-hide').addClass('mob-slide2');
}


$('.modal').on('wheel',function(e){
	e.stopPropagation();
});

var owl = $('.team-carousel');
var owl2 = $('.form-carousel');
var owl3 = $('.blog-carousel');

if(!isMobile) {
	$('.team-carousel').owlCarousel({
		items: 3,
		center: true,
		loop: true,
		nav: false,
		margin: 10,
		startPosition: 0,
	}); // Инициализируем карусель
$('.center .fname').fadeIn(500);
}
else {
	$('.team-carousel').owlCarousel({
		items: 1,
		center: false,
		loop: true,
		nav: false,
		margin: 0,
		startPosition: 0,
	}); // Инициализируем карусель
}


$('.form-carousel').owlCarousel({
	items: 1,
	loop: false,
	nav: false
});

if(!isMobile){
owl3.owlCarousel({
	items: 2,
	loop: false,
	nav: false,
});
}
else
{
	owl3.owlCarousel({
	items: 1,
	loop: false,
	nav: false,
});
}


$(document).on('click','.gallery-left', function(e){
	owl.trigger('prev.owl.carousel');
	}); // Обработка нажатия левой стрелки

$(document).on('click','.gallery-right', function(e){
	owl.trigger('next.owl.carousel');
	}); // Обработка нажатия правой стрелки

$(document).on('click','.blog-left', function(e){
	owl3.trigger('prev.owl.carousel');
	}); // Обработка нажатия левой стрелки

$(document).on('click','.blog-right', function(e){
	owl3.trigger('next.owl.carousel');
	}); // Обработка нажатия правой стрелки

$(document).on('click','.form-right', function(e){
	owl2.trigger('next.owl.carousel');
	}); // Обработка нажатия правой стрелки


$(document.documentElement).keyup(function(event){
	if (event.keyCode == 37) {
		owl.trigger('prev.owl.carousel');
	} else if (event.keyCode == 39) {
		owl.trigger('next.owl.carousel');
	}
	}); // Подключаем управление стрелками клавиатуры

$('.center.active').css('filter','sepia(1)');

owl.on('changed.owl.carousel', function(event) {
	$('.active').css('filter','sepia(0)');
	if (!isMobile) {$('.owl-item .fname').fadeOut(500);}
	var count = event.page.index+1;
	$('.gallery-counter').html('0'+count);
	setTimeout(function(){
		$('.center.active').css('filter','sepia(1)');
		if (!isMobile){$('.center.active .fname').fadeIn(500);}
		}, 100); // При перелистывании убираем эффекты, прячем имя. Добавляем их новому активному слайду
});

owl3.on('changed.owl.carousel', function(event) {
	var blog_count = event.page.index+1;
	$('.blog-counter').html('0'+blog_count);
	
});

owl2.on('changed.owl.carousel',function(event){
	var count = event.page.index;
	if (count == 2) {
		$('.form-next-btn').fadeOut('200',function(){$('#send').fadeIn()});
	}
});

$('.heart').on('mouseover', function(){
	$('.circle-canvas').fadeIn();
	setTimeout(function(){$('.social-fb').fadeIn()},400);
	setTimeout(function(){$('.social-vk').fadeIn()},600);
});

$('.circle-canvas').on('mouseleave', function(){
	$('.social-vk').fadeOut();
	setTimeout(function(){$('.social-fb').fadeOut()},400);
	setTimeout(function(){$('.circle-canvas').fadeOut()},600); 
});
}); 

function showmenu(time){
	$('.popup-menu').show().animate({'right':'0', 'background-position':'0'},time,function(){
		$('.f-open').fadeOut('200',function(){$('.f-close').fadeIn();});
		$('.content, .fmenu-title, .social').css('filter','blur(5px)');
	});
}
function hidemenu(time){
	$('.content, .fmenu-title, .social').css('filter','none');
	$('.popup-menu').animate({'right':'-100vw', 'background-position':'-100vw'},time,function(){
		$('.f-close').fadeOut('200',function(){$('.f-open').fadeIn();});
		$('.popup-menu').hide();
	});
}

function showmobmenu(time){
	$('.popup-menu').show().animate({'top':'0', 'background-position':'0'},time,function(){
		$('.f-open').fadeOut('200',function(){$('.f-close').fadeIn();});
		$('.content, .fmenu-title, .social').css('filter','blur(5px)');
	});
}
function hidemobmenu(time){
	$('.content, .fmenu-title, .social').css('filter','none');
	$('.popup-menu').animate({'top':'-100vh', 'background-position':'-100vw'},time,function(){
		$('.f-close').fadeOut('200',function(){$('.f-open').fadeIn();});
		$('.popup-menu').hide();
	});
}

$(document).on('click','.f-open', function (e){
	if (!isMobile) {showmenu(1000);}
	else
		{showmobmenu(1000);}
}); // Показываем меню по нажатию на бургер

$(document).on('click','.f-close, .left-side, .menuitem', function (e){
	if (!isMobile) {hidemenu(1000);}
	else
		{hidemobmenu(1000);}
}); // Убираем меню при нажатии на крестик, левое поле или по выбору пункта меню



