// Paramaters
var DURATION = 1000;

// jQuery start-up
$(document).ready(function() {
	// append first block
	$('body').append("<div class='block' col=0 row=0><div class='content'>" + getBlockContent(0,0) + "</div></div>");
	
	// attache swipes handler to it
	attachSwipes(0,0);
});

// called when a block is swiped
// right : -1, 0 or 1 depending on the direction swiped
// bottom : -1, 0 or 1 depending on the direction swiped
function move(right,bottom) {
	// get current block specifications
	var x = $('.block').attr('col');
	var y = $('.block').attr('row');
	
	// compute next block specifications
	var x2 = x*1 + right;
	var y2 = y*1 + bottom;
	
	// classNext holds the type of block that will appear
	var classNext;
	
	// compute values for left moves (moveLeft)
	var moveLeft = 0;
	switch (right) {
	case -1:
		moveLeft = $('.block').width();
		classNext = 'left';
		break;
	case 1:
		moveLeft = -$('.block').width();
		classNext= 'right';
		break;
	}

	// compute values for top moves (moveTop)
	var moveTop = 0;
	switch (bottom) {
	case -1:
		moveTop = $('.block').height();
		classNext = 'top';
		break;
	case 1:
		moveTop = -$('.block').height();
		classNext = 'bottom';
		break;
	}
	
	// computing the style of the block
	var style;
	switch (classNext) {
	case 'right':
		style = 'left: 1223px';
		break;
		
	case 'left':
		style = 'left: -1223px';
		break;
		
	case 'top':
		style = 'top: -471px';
		break;
		
	case 'bottom':
		style = 'top: 471px';
		break;
	}
	
	// create next block after the current one
	$('.block').after("<div class='block' "
			+ "style='" + style + "'"
			+ "col=" + x2 + " row=" + y2 + "><div class='content'>" + getBlockContent(x2,y2) + "</div></div>");

	// move away old block in the right direction
	$('.block[col=' + x + '][row=' + y + ']').animate({
	    left: moveLeft,
	    top: moveTop,
	  }, DURATION, function() {
			// delete old block
			$('.block[col=' + x + '][row=' + y + ']').remove();
	  });
	
	// replace with new block from the right direction
	$('.block[col=' + x2 + '][row=' + y2 + ']').animate({
	    left: 0,
	    top: 0,
	  }, DURATION, function() {
	  });

	// attache swipes to the new block
	// for an unknown reason, the first handler attachment 
	// does not apply for next block, even though
	// .on() function should
	attachSwipes(x2,y2);
}

// attache swipes event on the x,y block
function attachSwipes(x,y) {
	$('.block[col=' + x + '][row=' + y + ']').on('swipeleft', function(event) {
		move(1,0);
	});
	
	$('.block[col=' + x + '][row=' + y + ']').on('swiperight', function(event) {
		move(-1,0);
	});
	
	$('.block[col=' + x + '][row=' + y + ']').on('swipeup', function(event) {
		move(0,1);
	});
	
	$('.block[col=' + x + '][row=' + y + ']').on('swipedown', function(event) {
		move(0,-1);
	});
}

// return the content of a block
// put here your own content for a block
function getBlockContent(x,y) {
	return x + ',' + y;
}