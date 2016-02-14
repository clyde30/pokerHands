//check for straight
function isStraight(hand) {
	for (var i = 0; i < hand.length-1; i++) {
		var j = i + 1;
		if ((hand[i].number+1) === hand[j].number){
			isStraight = true;
		}else {
			isStraight = false;
			break;
		}
	}
	return isStraight;
}
