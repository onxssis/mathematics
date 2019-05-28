# Problem

Given a triangle of numbers where each number is equal to the sum of the three numbers on top of it, find the first even number in a row.

**Explanatory Note**: The vertex of the triangle (at the top) is 1. The structure of the triangle is shown below. Each number is equal to the sum of the numbers at the following positions: Position X: immediately above it. Position Y: to the immediate left of X. Position Z: to the immediate right of X. If there are no numbers at positions X, Y, or Z, then assume those positions are occupied by a zero (0). This can occur for positions at the edge.

Here are four rows of the triangle:

```text
                1
            1   1   1
        1   2   3   2   1
    1   3   6   7   6   3   1
```

## Input Format and Constraints

First line contains a number T (number of test cases).
Each of the next T lines contain a number N (the row number, assuming that the top vertex of the triangle is Row 1).
