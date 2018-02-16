# -*- coding: utf-8 -*-
from odoo import http

# class ThemeFlorata(http.Controller):
#     @http.route('/theme_florata/theme_florata/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/theme_florata/theme_florata/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('theme_florata.listing', {
#             'root': '/theme_florata/theme_florata',
#             'objects': http.request.env['theme_florata.theme_florata'].search([]),
#         })

#     @http.route('/theme_florata/theme_florata/objects/<model("theme_florata.theme_florata"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('theme_florata.object', {
#             'object': obj
#         })