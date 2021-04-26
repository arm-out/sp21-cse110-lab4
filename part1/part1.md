# Answers

## Part 1a

1. Line 9 prints "values added: 20" as `result` is assigned the value of 10 + 10 and within the scope of the funtion
2. line 13 prints "final result: 20" since `result` is assigned the value of 10 + 10 and it is still within the function scope as it is declared using the keyword `var`
3. Line 9 prints "values added: 20" as `result` is assigned the value of 10 + 10 and within the scope of the block
4. Line 13 returns an error since result is called outside the scope of the block it was declared in.
5. Line 9 returns an error as we are trying to modify the contents of a `const` variable
6. Line 13 is not executed as the program stops running due to the error on line 9. Otherwise, it would have returned an error as we are trying to access the `const` variable result outside of its scope.

## Part 1b

1. Line 12 will print 3 since `i` is declared using the variable var, it is accessible outside of the for loop but still within the function and 3 was the last value of `i` before exiting the for loop.
2. Line 13 will print 150 since `discount` is declared using the variable `var`, it is accessible outside of the for loop but still within the function and 150 was the last value of `discount` before exiting the for loop.
3. Line 14 will print 150 since the last value of `finalPrice` wass 150 and we are accessing it within its scope (the function).
4. It will return an array `[50, 100, 150]` as the code above loops through all the elements in `prices` and adjusts its price according to the `discount` value, which in this case was 0.5, and pushes it into discounted
5. Line 12 will return an error since the scope of `i` is within the for loop as it was declared using the keyword `let`
6. Line 13 will return an error since the scope of `discountedPrice` is within the for loop as it was declared using the keyword `let`
7. Line 14 returns 150 as we are calling on `finalPrice` within the block that it was declared in.
8. It will return an array `[50, 100, 150]` as the code above loops through all the elements in `prices` and adjusts its price according to the `discount` value, which in this case was 0.5, and pushes it into discounted
9. Line 11 will return an error since the scope of `i` is within the for loop as it was declared using the keyword `let`
10. Line 12 prints out 3 since the `const` variable `length` was defined to be the length of the array `prices` which was 3
11. It will return an array `[50, 100, 150]` as the code above loops through all the elements in `prices` and adjusts its price according to the `discount` value, which in this case was 0.5, and pushes it into discounted

### Data Types

12A. `student.name`
12B. `student['Grad Year']`
12C. `student.greeting()`
12D. `student['Favorite Teacher']['name']`
12E. `student['courseLoad'][1]`

### Basic Operators & Type Conversion

13A. `'32'` since 2 maps to its string representation `'2'`
13B. `1` since `'3'` maps to its int representation `3`
13C. `3` since `null` maps to its int representation `0`
13D. `'3null'` since `null` maps to its string representation `'null'`
13E. `4` since `true` maps to its int representation `1`
13F. `0` since `false` and `null` maps to its int representation of `0`
13G. `'3undefined'` since `undefined` maps to its string representation of `'undefined'`
13H. `NaN` since `'3'` maps to its int representation of `3` and `undefined` maps to its int representation of `NaN`

14A. `true` since `'2'` maps to its int representation of `2`
14B. `false` since lexicographically, `'2'` is greater than `'12'`
14C. `true` since `'2'` maps to its int representation of `2`
14D. `false` since they are of different types
14E. `false` since `true` maps to its int representation of `1`
14F. `true` since `Boolean(2)` returns a boolean w a value of `true`

15. `==` is a non-strict equality check where different types can be converted to check for equality while `===` is a sstrict equaslity operator thats checks for equality without type conversion.

### Functions

17. The result would be the array `[2, 4, 6]`. Within the `modifyArray` function, we loop through the elements of `array` and push the result of calling `doSomething` on the element into `newArr`, where `doSomething` doubles the elements value. Finally we return `newArr`

### setInterval(), setTimeout(), clearTimeout()

Question 19:
1
4
3
2

