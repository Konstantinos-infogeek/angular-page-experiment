/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: ${FILE_NAME}
 * Date: 26/10/2016
 * Time: 3:41 πμ
 */

angular.module ('module1', [ 'ngRoute', 'ngAnimate' ])
	.config ([ "$routeProvider", function (router) {
		router
			.when ('/', {
				templateUrl: '/module1/views/home.html'
			})
			.when ('/contact', {
				templateUrl: '/module1/views/contact.html'
			})
			.otherwise ({
				template: "<h1>Other</h1>",
				controller: [ "$location", function ($location) {

				}]
			});
	} ])