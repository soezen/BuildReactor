require.config({
	baseUrl: 'src',
	paths: {
		rx: '../components/rxjs/rx.modern',
		'rx.jquery': '../components/rxjs-jquery/rx.jquery',
		'rx.time': '../components/rxjs/rx.time'
	},
	map: {
		'rx.jquery': {
			'jQuery': 'jquery'
		}
	}
});
