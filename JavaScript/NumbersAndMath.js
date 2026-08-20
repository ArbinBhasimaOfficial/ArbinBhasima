 // operations  = a + b , a - b, a * b, a / b
 // operators = ['+', '-', '*', '/'];

 // * and  / have same precedence
 // + and - have same precedence

 // if * and / occurs the left to right precedense is selected
 // similarly, if + and - occurs the left to right precedense is selected

  2 + 2
  // 4

  2 - 2
  // 0

  2 * 2
  // 4

  2 / 2
  // 1

   // (..) to selected the which operations is done first
  (2 + 2) * 3
  // 12

  3 * (2 * 3)
  // 36

// integers = 2 , 3, 4
// floats = 2.5, 3.7, 4.2

0.1 + 0.2
  // 0.30000000000000004
  // computers stores 0, 1

  // unaccuracy due to binary representation
  // avoid using floats accuracy for calculations of money

  // 20.95 + 7.99
  // 28.939999999999998
  // 2095 + 799
  // 2894
  // (2095 + 799) / 100
  // 28.94
  // Math.round(2.2)
  // 2
  // Math.round(2.8)
  // 3
  // ((2095 + 799) * 0.1) / 100
  // 2.894
  // Math.round((2095 + 799) * 0.1) / 100
  // 2.89


  // exercises

  // a. 10 + (3 * 8) + 5
  // 39

  // b.
  // 39 / 3
  // 13 for each people of 3

  // c.
  // 18.50 + ( 2 * 7.50)
  // 33.5

  // d.
  // 33.5 * 0.1
  // 3.35

  // e.
  // 33.5 * 0.2
  // 6.7

  // f.
  // (1899 + 799 + 2095) / 100
  // 47.93

  // g.
  // ((1899 + 799 + 2095) / 100) + 4.99
  // 52.92

  // h.
  // Math.round(5292 * 0.1) / 100
  // 5.29

  // i
  // 52.92 + 5.29
  // 58.21

  // j
  // search to round 2.8 => 2 all ways
  // Math.floor(2.8)
  // 2
  // Math.trunc(2.8)
  // 2

  // k
  // to show 3
  // Math.ceil(2.2)
  // 3

  // l
  // (25 * 9/5) + 32
  // 77

  // m
  // (86 - 32) * 5 /9
  // 30

  // n
  // (-5 * 9 / 5) + 32
  // 23

  // fahrenheit = (celsius * 9/5) + 32

  // celsius = (fahrenheit - 32) * 5 / 9
