n = int(input())
arr = []
cnt=0
arr = [int(i) for i in input().split()]

for i in range(n):
    if arr[i]>0:
        cnt+=1

print(cnt)
        