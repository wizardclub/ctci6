yuck = raw_input("String to compare: ")
ckyu = raw_input("Reference string: ")

print any([yuck == ckyu[i:] + ckyu[:i] for i in range(len(yuck))])
