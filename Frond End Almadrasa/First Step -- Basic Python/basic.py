print("First Step")
print("Hello World")

# expressions

print(7 / 2)
print(7 // 2)

name = "daf"

print("hello " + name)
print(type(name))

print("hello \" world!\nbreak line") # comment

# number = input("Enter even number: ")
if int(10) % 2 == 0:
  print("That's true, Even number")
else:
  print("False, It's Odd number")

boolean = False == True;
print(boolean)

print(name, "that's good.")

# collections in python: list(array), dictionary(object)

colorsList = ["red", "blue", "yellow"]
print(colorsList[0], colorsList)

collectionNames = {
  "name1": 'Mahmoud',
  "name2": "Ayman",
  "name3": "Ali",
}
print(collectionNames)

while 0:
  print(colorsList[0])

for color in colorsList:
  print(color.center(30).upper())

for name in collectionNames:
  print('key: ' + name + ', value: ' + collectionNames[name])

# ------------ Done --- Introduction Python

