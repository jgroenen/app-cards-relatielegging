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

        initialize: function () {
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template(this));
            return this;
        },
        
        handleClick: function () {
            this.moveTo(0, 100); //FIXME
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
