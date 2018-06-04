var player=1
var board = {}
var moves = 0
var tab = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9}

function check(a){

	let e=false, f=false

	if (a%3==1){

		var c = (board[1] && board[4] && board[7]) && (board[1]==board[4]) && (board[1]==board[7])
		var d = (board[1] && board[2] && board[3]) && (board[1]==board[2]) && (board[1]==board[3])
	}
	else if (a%3==2){
		var c = (board[2] && board[5] && board[8]) && (board[2]==board[5]) && (board[2]==board[8])
		var d = (board[2] && board[3] && board[4]) && (board[2]==board[3]) && (board[3]==board[4])
	}
	else if (a%3==0){
		var c = (board[3] && board[6] && board[9]) && (board[3]==board[6]) && (board[3]==board[9])
		var d = (board[7] && board[8] && board[9]) && (board[7]==board[8]) && (board[7]==board[9])
	}

	if (a%4==1){
		e = (board[1] && board[5] && board[9]) && (board[1]==board[5]) && (board[1]==board[9])
	}

	if (a%2==1){
		f = (board[3] && board[5] && board[7]) && (board[3]==board[5]) && (board[3]==board[7])
	}

	console.log(d)

	if (c||d||e||f){
		alert('Game Won by player '+String(player==1?2:1))
		location.reload()
	}
	else if(moves==9){
		alert('Game Draw')
		location.reload()
	}


}
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
		if ((!$(this).hasClass('click1')) && (!$(this).hasClass('click2'))){
		if (player==1){
			$(this).removeClass('te')
			$(this).addClass('click1')
			$(this).text('X')
			player=2
			let a = $(this).attr('class').split(' ')[0]
			board[tab[a]] = 'X'
			moves++
			check(tab[a])
		}
		else{
			$(this).removeClass('te')
			$(this).addClass('click2')
			$(this).text('O')
			player=1
			let a = $(this).attr('class').split(' ')[0]
			board[tab[a]] = 'O'
			moves++
			check(tab[a])

		}
	}

	})
})
