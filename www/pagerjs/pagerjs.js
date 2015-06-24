requirejs.config({
	paths: {
		"text": ["../libs/requirejs-text/text"],
		"jquery": ["../libs/jquery/jquery.min"],
		"knockout": ["../libs/knockout/dist/knockout"],
		"knockout-mapping": ["../libs/knockout-mapping/knockout.mapping"],
		"pager": ["../libs/pagerjs/pager"],
		"viewmodels": ["viewmodels"],
		"views": ["views"],
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
		"hashchange": {
			deps: ["jquery"]
		},
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
define(["jquery", "knockout", "pager", "bootstrap", "material", "ripples", "dropdown", "toastr", "knockout-bootstrap"], function($, ko, pager, bootstrap, material, ripples, dropdown, toastr, kobs) {
	var self = this;
	var root = {};
	root.getModule = function(name) {
		return function(callback) {
			require([name], function(mod) {
				callback(mod);
			});
		};
	};
	pager.extendWithPage(root);
	pager.Href.hash = "#!/";
	ko.applyBindings(root);
	pager.start();
	return self;
});
