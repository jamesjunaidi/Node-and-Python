# this one will write to a file

import json

f = open("test.txt", "w+")

with open('countries.json') as json_data:
	for entry in json_data:
		print(entry, "\n")
		f.write(entry)
