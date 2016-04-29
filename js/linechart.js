'use strict';

// Line chart

var ctx = $('#linechart');

var lineChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['a', 'b', 'c', 'd', 'e'],
		datasets: [{
			label: 'x',
			data: [2, 8, 2, 7, 2],
			backgroundColor: 'rgba(175,50,50,.66)',
			borderColor: 'rgba(175,50,50,.9)'
		}, {
			label: 'y',
			data: [6, 7, 8, 9, 10],
			backgroundColor: 'rgba(50,175,50,.66)',
			borderColor: 'rgba(50,175,50,.9)'
		}, {
			label: 'z',
			data: [11, 12, 13, 14, 15].reverse(),
			backgroundColor: 'rgba(50,50,175,.66)',
			borderColor: 'rgba(50,50,175,.9)'
		}]
	}
});
//# sourceMappingURL=linechart.js.map
