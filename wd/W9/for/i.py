a = int(input())

cnt = 1
for x in range(2,a+1):
    if a%x==0:
        cnt+=1
print(str(cnt))

        
        