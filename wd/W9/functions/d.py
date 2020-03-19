
def election(x,y,z):
    x = int(x)
    y = int(y)
    z = int(z)
    counterOfone=0
    counterOfzero=0
    arr = [x,y,z]
    for i in range(len(arr)):
        if arr[i]==1:
            counterOfone+=1
        else:
            counterOfzero+=1
    if counterOfone>counterOfzero:
        return 1
    else:
        return 0 

x1,y1,z1 = input().split()

print(election(x1,y1,z1))
            