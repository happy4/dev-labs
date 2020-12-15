// # Hex to Base64
// #
// # Hex:             0x07      0xFF      0x02
// # Binary:          0000 0111 1111 1111 0000 0010 (groups of 4 bits)
// # Binary:          000001 111111 111100 000010   (groups of 6 bits)
// #                  \____/ \____/ \____/ \____/
// # Decimal:           1      63     60     2
// # Lookup64:          B      /      8      C

const BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

const hex2bin = (hex) => {
  return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

const to_base64 = (input = 'any carnal pleasure.') => {
  const to_hex = Array.from(input);
  const hex_arr = to_hex.map(char => char.charCodeAt(0).toString(16));
  console.log(hex_arr);
  const result = [];
  let res = [];
  for(let i = 0; i < hex_arr.length; i++) {
      res.push(hex_arr[i]);
      if (res.length === 3) {
        result.push(res);
        res = [];
      }
  }
  if (res.length > 0) {
    result.push(res);
  }

  console.log('result', result);

  const binary_arr = result.map(res => res.map( (hex) => {
    const char = hex2bin(hex);
    return char;
  }))

  console.log('binary_arr', binary_arr);

  const group6bits = binary_arr.map( items => {
    const item = items.join('');
    let bits_array = item.match(/.{1,6}/g);
    return bits_array.map(bits => {
      if (bits.length < 6) {
        bits =  bits + '0'.repeat(6 - bits.length);
      }
      return bits;
    })
  })

  console.log('group6bits', group6bits);

  let base64_result = '';
  const base64 = group6bits.map( groups => groups.map(group => {
    const decimal = parseInt(group, 2);
    base64_result += BASE64[decimal];
    return BASE64[decimal];
  }))

  let next4;
  if (input.length % 3 !== 0) {
    if (base64_result.length % 4 === 0) {
      next4 = base64_result.length;
    } else {
      next4 = base64_result.length;
      while (next4 % 4 !== 0) {
        next4 += 1;
      }
    }

    let padding_length = next4 - base64_result.length;
    base64_result =  base64_result + '='.repeat(padding_length);
  }

  console.log('base64_result', base64_result);
};

to_base64();