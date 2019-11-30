mystrings=["My name Pranav Hegde","MSRIT","HELLO Kumar","Dude How are you","our project team"]
print(mystrings)

for i in range(len(mystrings)):
	if i%2==0:
		print("At index", i ,mystrings[i])

for i in range(len(mystrings)):
	if i%3==0:
		mystrings[i]=mystrings[i].upper()
print(mystrings)

for i in range(len(mystrings)):
	mystrings[i]=" ".join(reversed(mystrings[i].split()))
print("On reversal",mystrings)

num=[]
for i in range(len(mystrings)):
	for s in mystrings[i].split():
		 if s.isdigit():
		 	num.append(s)
		 	
print(num)
