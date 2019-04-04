shapes = ['circle','square','triangle']

print (shapes)
# 1
shapes[0] = 'ellipse'
print (shapes)

# 2
shapes.insert(0,'rectangle') 
print (shapes)

# 3
shapes.pop(2)
shapes.pop(2)
# # another method
# del shapes[2]
# del shapes[2]
print (shapes)
