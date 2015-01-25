define([
    'settings',
    'text!templates/application.tmpl',
    'Views/Card'
], function (settings, template, CardView) {
    return Backbone.View.extend({
        template: _.template(template),

        initialize: function () {
            var application = this;
            this.cards = new Backbone.Collection(settings.cards);
            this.cardViews = [];
            this.cards.forEach(function (card) {
                card.view = new CardView({
                    model: card
                });
            });
            this.render();
        },
        
        render: function () {
            var application = this;
            this.$el.html(this.template(this));
            this.cards.forEach(function (card, i) {
                card.view.moveTo(20 * i, 0);
                application.$("#cards").append(card.view.$el);
            });
            return this;
        }
    });
});
