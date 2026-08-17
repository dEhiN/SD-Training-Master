# main.py
# external python modules

from camelcase import CamelCase

camel = CamelCase()

sentence = 'this is a sentence that needs CamelCasing!'

print (camel.hump(sentence))