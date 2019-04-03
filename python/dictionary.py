farm = {
    'sheep' : 5,
    'cows': 2,
    'gots': 10
}

print (farm)

# 1
farm.update({'Ducks':8})
print (farm)

# 2
print (len(farm))

# 3
del farm['cows']
print (farm)

