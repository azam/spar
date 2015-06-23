requirejs.config({
	paths: {
		"text": ["libs/requirejs-text/text"],
		"knockout": ["libs/knockout/dist/knockout"],
		"jquery": ["libs/jquery/jquery.min"],
		"bootstrap": ["libs/bootstrap/dist/js/bootstrap.min"],
		"material": ["libs/bootstrap-material-design/dist/js/material.min"],
		"ripples": ["libs/bootstrap-material-design/dist/js/ripples.min"],
		"nouislider": ["libs/nouislider/distribute/nouislider.all.min"],
		"toastr": ["libs/toastr/toastr.min"],
		"dropdown": ["libs/dropdown.js/jquery.dropdown"],
		"typeahead": ["libs/typeahead.js/dist/typeahead.jquery"],
		"knockout-bootstrap": ["libs/knockout-bootstrap/src/knockout-bootstrap"]
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
define(["jquery", "knockout"], function($, ko) {
	var SparViewModel = function() {
		var self = this;
		self.loading = ko.observable(false);
		self.frameworks = ko.observableArray([{
			name: "Durandal",
			path: "durandal/durandal.html",
			version: "2.1.0",
			homepage: "http://durandaljs.com"
		}, {
			name: "Angular",
			path: "angular/angular.html",
			version: "1.?",
			homepage: "http://angularjs.org"
		}]);
	};
	var instance = new SparViewModel();
	ko.applyBindings(instance);
});
