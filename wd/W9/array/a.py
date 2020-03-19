n = int(input())
arr = []

# for i in range(n):
    
#     i=input().split()
#     arr.append(i)

arr = [int(i) for i in input().split()]

# even_x = [num for num in x if num%2==0]
# print(even_x)

for i in range(n):
    if i%2==0:
        print(arr[i], end=" ")

