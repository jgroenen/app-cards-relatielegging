define([
    'settings',
    'text!templates/card.tmpl',
    'text!templates/explanation.tmpl'
], function (settings, template, explanationTemplate) {
    return Backbone.View.extend({
        template: _.template(template),
        explanationTemplate: _.template(explanationTemplate),
        
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
        
        animateTo: function (x, y, t, $slot) {
            var cardView = this;
            this.$el.animate({
                top: y,
                left: x
            }, t, function () {
                if ($slot) {
                    $slot.append(cardView.$el);
                    cardView.$el.css({
                        top: 0,
                        left: 0,
                        backgroundImage: "url(assets/img/cards/" + cardView.model.get("id") + ".jpg)"
                    });
                    $("#explanations").append(cardView.explanationTemplate(this));
                }
            });
        }
    });
});
