# Copyright 2020 Yevhen Pechurin
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
{
    'name': "Animated product for E-Commerce",

    'summary': """
        Animating product after mouse is over pictures""",

    'author': "Yevhen Pechurin",

    'category': 'Website/Website',
    'version': '0.1',
    'pre_init_hook': 'pre_init_check',

    'depends': ['website_sale'],
    'data': [
        'views/product_template_view.xml',
    ],
}
