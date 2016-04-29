'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// barchart

var ctx = $('#barchart');

var barChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
		datasets: [_defineProperty({
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: 'rgba(10,75,133,.66)',
			borderColor: 'rgba(10,75,133,.9)',
			hoverBackgroundColor: 'rgba(133,10,75,.66)'
		}, 'borderColor', 'rgba(133,10,75,.9)'), _defineProperty({
			label: 'years in contest',
			data: [1, 3, 1, 2, 5, 6],
			backgroundColor: 'rgba(10,133,75,.66)',
			borderColor: 'rgba(10,133,75,.9)',
			hoverBackgroundColor: 'rgba(225,133,75,.66)'
		}, 'borderColor', 'rgba(225,133,75,.9)')]
	},
	options: {
		stacked: true,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	},
	defaults: {
		global: {
			defaultFontColor: "#ff0000"
		}
	}
});
//# sourceMappingURL=barchart.js.map
