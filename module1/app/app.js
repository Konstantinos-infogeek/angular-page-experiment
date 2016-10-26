/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: ${FILE_NAME}
 * Date: 26/10/2016
 * Time: 3:41 πμ
 */
(function () {

	angular.module ('module1', [ 'ngRoute', 'ngAnimate' ])
		.config ([ "$routeProvider", function (router) {
			var path = window.location.pathname.split('/').reverse().slice(1).reverse().join('/');
			console.log(path);
			router
				.when ('/', {
					templateUrl:  path + '/views/home.html'
				})
				.when ('/about', {
					templateUrl: path + '/views/about.html'
				})
				.when ('/contact', {
					templateUrl: path + '/views/contact.html'
				})
				.otherwise ({
					template: "<h1>Other</h1>",
					controller: [ "$location", function ($location) {

					}]
				});
		} ]);

}());

