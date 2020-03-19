from math import sqrt
n = int(input())

i = 1
while i<=n:
    if sqrt(i)%1==0:
        print(i)
    i += 1