---
published: false
title: Fenwick Tree
layout: post
---
Fenwick tree also called Binary Indexed Tree (used as array) is used to count the frequency.
Update/adding (the array is initialized to some value)and search complexities are O(logn).

Let a normal array be A[ ]

We’re going to express the sum of A[1]..A[j] as a sum of sub arrays, each of them has 2^k elements

Ex: Sum[19] = A[1...19]
                  = A[1...16] + A[17...18]+A[19...19]  ( To get the positions of sub arrays, use:  i - i AND (-i) + 1  ...i )
                 = BIT[16] + BIT[18] + BIT[19]
19 = 1 0 0 1 1  

Sum[19] = BIT[19] + BIT[19 - 19&( - 19) = 18] + BIT[18 - 18&(-18) = 16] + 0 (BIT[0])
             =  BIT[19] + BIT[18] + BIT[16]


Note:
i AND (-i) gives the last set position (4 : 4 | 3 : 1 | 6 : 2)
BIT[i] = A[i - i &(-i)+1...i]


1. Update:
 . update(v,p): #Adding a value(v) at a position(p) of BIT
 . void point_update(int index,int val){
    while(index <= N){
        fenwick[index] += val;
        index += index &(-index);
    }
  }

 .  




