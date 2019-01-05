# /usr/bin/python3

def count_handshake(value):
	data = 0
	for first in range(0, value):
		for second in range(0, first):
			data = data + 1
	return data

print(count_handshake(3))
print(count_handshake(6))
