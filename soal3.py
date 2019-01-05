def drawLine(value):
	for i in range(0, value):
		for j in range(0, i):
			if j == i-1:
				print("*", end=" ")
			else:
				print(" ", end=" ")	
		print("");

drawLine(8)
