require.config({
    baseUrl: 'assets/js/app',
    paths: {
        html: '../../html',
        templates: '../../tmpl',
        jquery: '../vendor/jquery/jquery-2.1.3/jquery-2.1.3.min',
        underscore: '../vendor/underscore/underscore-1.7.0/underscore-min',
        backbone: '../vendor/backbone/backbone-1.1.2/backbone-min',
        text: '../vendor/require/plugins/text/text-2.0.12/text'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery', 'text'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
});

require([
    'backbone'
], function () {

    require([
        'Views/Application'
    ], function (ApplicationView) {
        new ApplicationView({
            el: $('body')
        });
    });

});