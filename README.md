clamp
=====

A short JavaScript prototype I've found useful.

Usage:

clamp() takes two parameters, 'min' and 'max', which serve as the range that the calling number will be compared against. The function returns the number if it is within the range, or the closest number within the range, including negatives.  Usage should be (n).clamp(min, max).  Using dot notation works for positive numbers (i.e. 5..clamp(0,1)) but will break if negative numbers are used, so to be safe just enclose the number in parenthesis.

(20).clamp(15, 30); // 20

(20).clamp(1, 5); // 5

(20).clamp(120, 130); // 120

(-10).clamp(-30, -12); // -12
