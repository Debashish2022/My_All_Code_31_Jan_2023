a=[[6,3,5],
   [7,6,5],
   [9,7,4]]
b=[[1,2,3],
   [4,5,6],
   [3,6,7]]
total=[[34,33,93],
       [0,0,0],
       [0,0,0]]
for i in range(len(a)):
    for j in range(len(b)):
        total[i][j]=a[i][j]*b[i][j]
        print(total)