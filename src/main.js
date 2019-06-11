import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

export default function howLongUntilLunch(hours, minutes) {
	const buf = Buffer.from('hello');
	console.log(buf);
	
	// lunch is at 12.30
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}