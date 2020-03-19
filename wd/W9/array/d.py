n = int(input())
arr=[]
cnt=0

arr=[int(i) for i in input().split()]

for i in range(1,n):
    if arr[i]>arr[i-1]:
        cnt+=1

print(cnt)