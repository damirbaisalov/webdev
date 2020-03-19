

def least_four(a,b,c,d):
    # if a<b and a<c and a<d:
    #     return a
    # elif b<a and b<c and b<d:
    #     return b
    # elif c<a and c<b and c<d:
    #     return c
    # else:
    #     return d
    arr = [a,b,c,d]
    print(min(arr))
    
a1, b1, c1, d1 = input().split()
        
least_four(a1,b1,c1,d1)