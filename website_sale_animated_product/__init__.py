# Copyright 2020 Yevhen Pechurin
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
from odoo.exceptions import AccessError
from . import models


def pre_init_check(cr):
    raise AccessError("This module only for reading code.")
