# Copyright 2020 Yevhen Pechurin
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

import logging
from odoo import models, fields

_logger = logging.getLogger(__name__)


class MailThread(models.AbstractModel):
    _inherit = 'product.template'

    image_gif = fields.Image()
