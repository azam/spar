define(["jquery", "knockout", "durandal/system", "durandal/app", "plugins/router"], function($, ko, system, app, router) {
	var self = this;
	self.activate = function() {
		var d = $.Deferred();
		router.map([{
			route: ["", "home"],
			title: "Home",
			moduleId: "viewmodels/home",
			guarded: false, // custom
			nav: true
		}, {
			route: "todo",
			title: "Todo",
			moduleId: "viewmodels/todo",
			guarded: true, // custom
			nav: true
		}, {
			route: "error",
			title: "Error",
			moduleId: "viewmodels/error",
			guarded: false, // custom
			nav: true
		}]).buildNavigationModel();
		router.mapUnknownRoutes();
		router.guardRoute = function(model, instruction) {
			var dfd = $.Deferred();
			// if (typeof(instruction) === "object" && instruction !== null && typeof(instruction.config) === "object" && instruction.config !== null && typeof(instruction.config.moduleId) === "string" && instruction.config.moduleId.match(/^secured\//) !== null) {
			if (instruction.config.guarded) { // Looks at router map guarded flag to determine whether view is guarded or not
				var isValid = true; // TODO: Do validation
				if (isValid) {
					dfd.resolve(true);
				} else {
					dfd.resolve("error");
				}
			} else {
				dfd.resolve(true);
			}
			return dfd.promise();
		};
		// router.on("router:navigation:processing", function(instance, instruction) {
		// 	$("#page-spinner").addClass("active");
		// });
		// router.on("router:navigation:composition-complete", function(instance, instruction) {
		// 	$("#page-spinner").removeClass("active");
		// });
		// router.on("router:navigation:complete", function(instance, instruction) {
		// });
		router.activate().done(function() {
			d.resolve(true);
		}).fail(function() {
			d.reject();
		});
		return d.promise();
	};
	return self;
});
