$(document).ready(function() {
	//Инициализируем fullpage.js
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		sectionsColor: ['#150098', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#171420'],
		menu: '#menu',
		navigation: true,
		navigationTooltips: ['TextForce','Система','Услуги','Команда','Мы не','Блог','Напишите нам'],
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
		},
		onLeave: function(index,nextIndex,direction){
			if (nextIndex == 1){
				$('.sidebar').hide();}
				else
				{
					var pagename = ['T e x t F o r c e','С И С Т Е М А','У С Л У Г И','К О М А Н Д А','М Ы<br><br>Н Е','Б Л О Г','Н А П И Ш И Т Е<br><br>Н А М'];
					$('.page-number').html(nextIndex+'/7');
					$('.page-name').html(pagename[nextIndex-1]);
					$('.sidebar').fadeIn(200);
				}
			}
		});	//	Инициализируем fullpage.js		 
	$('#article-link').magnificPopup();
	 //Тестовая функция	
	/*$('#article-link').magnificPopup({
		items: {
			src: '<div class="test-popup">Test inline element</div>',
			type: 'inline'
		},
	}); //Тестовая функция		*/
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


$(document).on('click','.f-open', function (e){
	showmenu(1000);
}); // Показываем меню по нажатию на бургер

$(document).on('click','.f-close, .left-side, .menuitem', function (e){
	hidemenu(1000);
}); // Убираем меню при нажатии на крестик, левое поле или по выбору пункта меню

$(document).ready(function(){
	$('.item .fname').fadeOut(500);
	var owl = $('.team-carousel');
	var owl2 = $('.form-carousel');
	$('.team-carousel').owlCarousel({
		items: 3,
		center: true,
		loop: true,
		nav: false,
		margin: 10,
		startPosition: 0,
	}); // Инициализируем карусель

	$('.form-carousel').owlCarousel({
		items: 1,
		loop: false,
		nav: false,
	});
	

	$(document).on('click','.gallery-left', function(e){
		owl.trigger('prev.owl.carousel');
		
	}); // Обработка нажатия левой стрелки

	$(document).on('click','.gallery-right', function(e){
		owl.trigger('next.owl.carousel');
	}); // Обработка нажатия правой стрелки

	$(document).on('click','.form-right', function(e){
		owl2.trigger('next.owl.carousel');
	}); // Обработка нажатия правой стрелки

	$(document).on('click','#next', function(e){
		$('#uname').slideUp();
		$('#umail').slideDown();
	});

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
		$('.owl-item .fname').fadeOut(500);
		var count = event.page.index+1;
		$('.gallery-counter').html('0'+count);
		setTimeout(function(){
			$('.center.active').css('filter','sepia(1)');
			$('.center.active .fname').fadeIn(500);
		}, 100); // При перелистывании убираем эффекты, прячем имя. Добавляем их новому активному слайду
	});

	owl2.on('changed.owl.carousel',function(event){
		var count = event.page.index;
		if (count == 2) {
			$('.form-next-btn').fadeOut('200',function(){$('#send').fadeIn()});
			
		}
	});

	  $('.heart').on('mouseenter', function(){
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


