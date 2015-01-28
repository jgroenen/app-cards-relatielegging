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
            this.cards.reset(this.cards.shuffle(), {silent:true});
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
            var application = this,
                $cardsSection,
                space;
            this.$el.html(this.template(this));
            space = Math.floor((this.$el.width() - 134) / 35);
            $cardsSection = application.$("#cards");
            this.cards.forEach(function (card, i) {
                card.view.animateTo(space * i, 0, 1000);
                $cardsSection.append(card.view.$el);
            });
            return this;
        },
        
        selectCard: function (card) {
            if (this.selectedCards.length >= 3) {
                return;
            }
            this.selectedCards.push(card);
            var $slot = $($(".slot")[this.selectedCards.length - 1]);
            var top = card.$el.position().top + ($slot.offset().top - card.$el.offset().top);
            var left = card.$el.position().left + ($slot.offset().left - card.$el.offset().left);
            card.animateTo(left, top, 200, $slot);
        }
    });
});
