// 'hello'
// 'hello'
// "This is ameica"
// 'This is ameica'
// 'Zion' + 'tan'
// 'Ziontan'
// 'zion' + 'tan' + 'sama'
// 'ziontansama'
// 'zion' + 'tan' + 'sama' - 'sama'
// NaN
// typeof 2
// 'number'
// typeof 'zion'
// 'string'

// 'hello' + 3
// 'hello3'

// '3' + '3'
// '33'

// '$28.94'
// '$28.94'
// '$' + 20.95 + 7.99
// '$20.957.99'
// '$' + (20.95 + 7.99)
// '$28.939999999999998'
// '$' + (2095 + 799) / 100
// '$28.94'

// 'Items (' + (1 + 1) + '):                                      $' + (2095 + 799) / 100
// 'Items (2):                                      $28.94'
// 'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
// 'Items (2): $28.94'

// alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);
// `My age is ${23}.`
// 'My age is 23.'

// `Items (${1 + 1})`
// 'Items (2)'
//
// `Items (${1 + 1}): $${(2095 + 799) / 100}`
// 'Items (2): $28.94'
//
// `some
// text`
// 'some\ntext'


// exercises
//
// a.
// 'My Name is:'
// 'My Name is:'
//
// b.
// 'Arbin'
// 'Arbin'
//
// c.
// 'My Name is: ' + 'Arbin'
// 'My Name is: Arbin'
//
// d, e.
// `Total Cost: $${5 + 3}`
// 'Total Cost: $8'

// f.
// alert(`Total Cost: $${5 + 3}`);

// g.
// 'Total Cost: $'+ (599 + 295) / 100
// 'Total Cost: $8.94'

// h.
// `Total Cost: $${(599 + 295) / 100}`
// 'Total Cost: $8.94'

// i.
// alert(`Total Cost: $${(599 + 295) / 100}`);

// j.
// alert(`Total Cost: $${(599 + 295) / 100}
// Thank you, come again!`)

// k.
// `Items (${2 + 2}): $${(799 + 2095) / 100 * 2}`
// 'Items (4): $57.88'

// l.
// `Shipping & handling: $${(499 + 499) / 100}`
// 'Shipping & handling: $9.98'

// m.
// `Total before tax: $${(5788 + 998) / 100}`
// 'Total before tax: $67.86'

// n.
// `Esitimated tax (10%): $${(Math.round(5788 / 100) + 9.98)*0.1}`
// 'Esitimated tax (10%): $6.798000000000001'
// `Estimated tax (10%): $${(((5788 / 100) + 9.98) * 0.1).toFixed(2)}`
// 'Estimated tax (10%): $6.79'
// `Estimated tax (10%): $${(Math.floor(((Math.round(5788 / 100) + 9.98) * 0.1) * 100) / 100).toFixed(2)}`
// 'Estimated tax (10%): $6.79'
// `Estimated tax (10%): $${Math.floor((((5788 / 100) + 9.98) * 0.1) * 100 + 0.5) / 100}`
// 'Estimated tax (10%): $6.79'


