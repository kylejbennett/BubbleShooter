var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
	var Game = function(){
		this.init = function(){
			$('.but_start_game').bind("click", startGame);
		};
		var startGame = function(){
			$(".but_start_game").unbind("click");
			BubbleShoot.ui.hideDialog();
		};
	};
	return Game;
})(jQuery);

$(document).ready(function(){
	var game = new BubbleShoot.Game();
	game.init();
});