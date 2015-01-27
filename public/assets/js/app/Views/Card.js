define([
    'settings',
    'text!templates/card.tmpl'
], function (settings, template) {
    return Backbone.View.extend({
        template: _.template(template),
        
        tagName: "section",
        className: "card",
        
        events: {
            "click": "handleClick"
        },

        initialize: function (options) {
            this.application = options.application;
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template(this));
            return this;
        },
        
        handleClick: function () {
            this.application.selectCard(this);
        },
        
        moveTo: function (x, y) {
            this.$el.css({
                top: y,
                left: x
            });
        },
        
        animateTo: function (x, y, t) {
            this.$el.animate({
                top: y,
                left: x
            }, t);
        }
    });
});
