var player=1
var board = []
var moves = 0
$('document').ready(function(){
	$('td').hover(function(){
		if ((!$(this).hasClass('click1')) && (!$(this).hasClass('click2'))){
		if (player==1){
		$(this).addClass('te')
		$(this).text('X')}
		else{
		$(this).addClass('te')
		$(this).text('O')
		}

	}}, function(){
		if ((!$(this).hasClass('click1')) && (!$(this).hasClass('click2'))){
		$(this).removeClass('te')
		$(this).text('')}
	})
	$('td').click(function(){
		if (player==1){
			$(this).removeClass('te')
			$(this).addClass('click1')
			$(this).text('X')
			player=2
			let a = $(this).attr('class').split(' ')[0]
			board.push({a:'X'})
			moves++
		}
		else{
			$(this).removeClass('te')
			$(this).addClass('click2')
			$(this).text('O')
			player=1
			let a = $(this).attr('class').split(' ')[0]
			board.push({a:'O'})
			moves++

		}

	})
})
