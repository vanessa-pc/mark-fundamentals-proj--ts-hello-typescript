# Python is, like JavaScript, dynamically typed

my_boolean = True
my_number = 3
my_string = "real"

# lets you re-assign to different types
my_boolean = int(my_boolean) # explicit type casting
sum_one = my_boolean + my_number
print(sum_one)
print(type(sum_one))

sum_one = str(sum_one) # explicit type casting
sum_two = sum_one + my_string
print(sum_two)
print(type(sum_two))