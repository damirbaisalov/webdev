n = int(input())
arr = []

for i in range(n):
    i=int(input().split())
    arr.append(i)

for i in range(0,n):
    if i%2==0:
        print(str(arr[i])+" ")