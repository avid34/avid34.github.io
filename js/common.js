$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		sectionsColor: ['#150098', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#171420'],
		menu: '#menu',
		navigation: true,
		navigationTooltips: ['TextForce','Система','Услуги','Команда','Мы не','Блог','Напишите нам'],
		afterLoad: function(link,index){
			if (index == 1 || index == 7) {
				$('.fmenu-title>a').animate({'color':'#fff'},500);
				$('.social>svg').css('fill','#fff');
				$('.popup-menu').css('background-image','none').css('background-color','rgba(23,20,32,0.9)');
			}
			else
			{
				$('.fmenu-title>a').animate({'color':'#150098'},500);
				$('.social>svg').css('fill','#150098');
				$('.popup-menu').css('background-image','none').css('background-color','rgba(23,20,32,0.9)');

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
	$('#article-link').magnificPopup({
		items: {
			src: '<div class="test-popup">Test inline element</div>',
			type: 'inline'
		},
	}); //Тестовая функция		
}); 


function showmenu(time){
	$('.popup-menu').show().animate({'right':'0', 'background-position':'0'},time);
	$('.fmenu-burger>img').removeClass('f-open').addClass('f-close');
	$('.content, .fmenu-title, .social').css('filter','blur(5px)');
}

function hidemenu(time){
	$('.popup-menu').animate({'right':'-100vw', 'background-position':'-100vw'},time).hide();
	$('.fmenu-burger>img').removeClass('f-close').addClass('f-open');
	$('.content, .fmenu-title, .social').css('filter','none');
}			


$(document).on('click','.f-open', function (e){
	showmenu(1000);

}); // Показываем меню по нажатию на бургер

$(document).on('click','.f-close, .left-side, .menuitem', function (e){
	hidemenu(1000);
}); // Убираем меню при нажатии на крестик, левое поле или по выбору пункта меню

$(document).ready(function(){
	

	var owl = $('.team-carousel');
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
		nav: true,
	});
	

	$(document).on('click','.gallery-left', function(e){
		owl.trigger('prev.owl.carousel');
		
	}); // Обработка нажатия левой стрелки

	$(document).on('click','.gallery-right', function(e){
		owl.trigger('next.owl.carousel');
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
	})
});


