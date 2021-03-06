# -*- coding: utf-8 -*-

###############################################################################
#                                                                             #
# Copyright (C) 2018 HGSOFT - www.hgsoft.com.br                               #
#                                                                             #
#This program is free software: you can redistribute it and/or modify         #
#it under the terms of the GNU Affero General Public License as published by  #
#the Free Software Foundation, either version 3 of the License, or            #
#(at your option) any later version.                                          #
#                                                                             #
#This program is distributed in the hope that it will be useful,              #
#but WITHOUT ANY WARRANTY; without even the implied warranty of               #
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                #
#GNU General Public License for more details.                                 #
#                                                                             #
#You should have received a copy of the GNU General Public License            #
#along with this program.  If not, see <http://www.gnu.org/licenses/>.        #
###############################################################################

{
    'name': "theme_florata",

    'summary': """Theme developed to Florata Farmácia de Manipulação.""",

    'description': """Theme developed to Florata Farmácia de Manipulação.""",

    'author': "HGSoft - Soluções Criativas e Inteligentes",
    
    'website': "http://www.hgsoft.com.br/",

    'category': 'Website',
    
    'version': '1.0',

    'depends': ['base', 'website_sale', 'website_anonymous_hide_prices', 'br_website_sale', 'web'],

    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
}