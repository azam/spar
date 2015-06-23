requirejs.config({
	paths: {
		"text": ["../libs/requirejs-text/text"],
		"durandal": ["../libs/durandal/js"],
		"plugins": ["../libs/durandal/js/plugins"],
		"transitions": ["../libs/durandal/js/transitions"],
		"knockout": ["../libs/knockout/dist/knockout"],
		"knockout-mapping": ["../libs/knockout-mapping/knockout.mapping"],
		"jquery": ["../libs/jquery/jquery.min"],
		"bootstrap": ["../libs/bootstrap/dist/js/bootstrap.min"],
		"material": ["../libs/bootstrap-material-design/dist/js/material.min"],
		"ripples": ["../libs/bootstrap-material-design/dist/js/ripples.min"],
		"nouislider": ["../libs/nouislider/distribute/nouislider.all.min"],
		"toastr": ["../libs/toastr/toastr.min"],
		"dropdown": ["../libs/dropdown.js/jquery.dropdown"],
		"typeahead": ["../libs/typeahead.js/dist/typeahead.jquery"],
		"knockout-bootstrap": ["../libs/knockout-bootstrap/src/knockout-bootstrap"]
	},
	shim: {
		"bootstrap": {
			deps: ["jquery"],
			exports: "jQuery"
		},
		"material": {
			deps: ["jquery"],
			exports: "jQuery"
		},
		"ripples": {
			deps: ["jquery"],
			exports: "jQuery"
		},
		"dropdown": {
			deps: ["jquery"],
			exports: "jQuery"
		},
		"mapping": {
			deps: ["knockout"],
			exports: "mapping"
		},
		"typeahead": {
			deps: ["jquery"],
			exports: "jQuery"
		},
		"knockout-bootstrap": {
			deps: ["knockout", "jquery", "bootstrap", "typeahead"]
		}
	}
});
define(["jquery", "knockout", "durandal/system", "durandal/app", "durandal/binder", "durandal/viewLocator", "durandal/composition", "plugins/router", "bootstrap", "material", "ripples", "dropdown", "toastr", "knockout-bootstrap"], function($, ko, system, app, binder, viewLocator, composition, router, bootstrap, material, ripples, dropdown, toastr, kobs) {
	system.debug(false);
	app.title = "spar-durandal";
	app.configurePlugins({
		router: true,
		dialog: true,
		history: true
	});
	app.start().done(function() {
		binder.binding = function(obj, view) {
			// Initialize material design
			$.material.init();
		};
		// Use this to use conventions
		// viewLocator.useConvention("viewmodels", "views");
		// Use this to enable custom view module id 
		viewLocator.convertModuleIdToViewId = function(moduleId) {
			return moduleId.replace(/viewmodels/gi, "views");
		};
		// app.setRoot("viewmodels/shell", "entrance", "customApplicationHostId");
		// app.setRoot("viewmodels/shell", undefined, document.getElementbyId("customApplicationHostId"));
		app.setRoot("viewmodels/shell", undefined, "index-container");
	});
});
