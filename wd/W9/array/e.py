n = int(input())
arr =[]
flag=False

arr =  [int(i) for i in input().split()]

for i in range(1,n):
    if (arr[i]>0 and arr[i-1]>0) or (arr[i]<0 and arr[i-1]<0):
        flag=True
        break

if flag:
    print("YES")
else:
    print("NO")