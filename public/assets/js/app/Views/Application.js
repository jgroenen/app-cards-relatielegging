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
            this.cards.forEach(function (card) {
                card.view = new CardView({
                    model: card,
                    application: application
                });
            });
            this.selectedCards = [];
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
        },
        
        selectCard: function (card) {
            var index = this.selectedCards.length;
            if (index >= 3) {
                return;
            }
            this.selectedCards.push(card);
            var slot = $(".slot")[index];
            var top = $(slot).offset().top;
            var left = $(slot).offset().left;
            card.animateTo(left, top);
        }
    });
});
