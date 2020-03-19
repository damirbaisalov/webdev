
def xor(x,y):
    if x == "1":
        x = True
    else:
        x = False

    if y == "1":
        y = True
    else:
        y = False
    
    if (x==True and y==False) or (x==False and y==True):
        return 1
    elif (x==True and y==True) or ( x==False and y==False):
        return 0

x1,y1 = input().split()

print(xor(x1,y1))