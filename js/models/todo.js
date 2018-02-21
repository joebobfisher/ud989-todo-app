/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},

		// Toggle the `completed` state of this todo item.
		toggleCompleted: function () {
			var complete = this.get('completed');
			var pri = this.get('priority');

			// toggle completeness
			complete = !complete;

			// if todo is now complete, turn off priority.
			if (complete) {
				pri = false;
			}

			this.save({
				completed: complete,
				priority: pri
			});
		},

		togglePriority: function () {
			var complete = this.get('completed');

			if (!complete) {
				this.save({
					priority: !this.get('priority')
				});
			}
		}
	});
})();
