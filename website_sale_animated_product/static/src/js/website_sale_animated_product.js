// Copyright 2020 Yevhen Pechurin
// License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
odoo.define('website_sale.animated_product', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.websiteAnimatedProduct = publicWidget.Widget.extend({
        selector: '.oe_product',
        events: {
            'mouseenter': '_onMouseEnter',
            'mouseleave': '_onMouseLeave',
        },

        /**
         * @constructor
         */
        init: function () {
            this._super.apply(this, arguments);
            this._is_gif = false
        },
        /**
         * @override
         */
        start: function () {
            let $imgs = this.$('.oe_product_image')
            let self = this
            if ($imgs.length === 2) {
                self._is_gif = true
                self.$img = $imgs.first()
                self.$gif = $imgs.last()
                self.$gif.hide()
            }
            return this._super.apply(this, arguments);
        },

        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

        /**
         * @private
         * @param {Event} ev
         */
        _onMouseEnter: function (ev) {
            if (this._is_gif) {
                this.$img.hide()
                this.$gif.show()
            }
        },
        /**
         * @private
         * @param {Event} ev
         */
        _onMouseLeave: function (ev) {
            if (this._is_gif) {
                this.$img.show()
                this.$gif.hide()
            }
        },
    });

});