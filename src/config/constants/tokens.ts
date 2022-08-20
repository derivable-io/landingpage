class Token {
  chainId: number;

  address: string;

  decimal: number;

  symbol: string;

  name: string;

  constructor(chainId, address, decimal, symbol, name) {
    this.chainId = chainId
    this.address = address
    this.decimal = decimal
    this.symbol = symbol
    this.name = name
  }
}

export const tokens = {
  deviable: new Token(
    56,
    '0xC1f7E5FB4EEb9666037f1b9a113E55808af40AAF',
    5,
    'DEVIABLE',
    'DEVIABLE',
  ),
  busd: new Token(
    56,
    '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    18,
    'BUSD',
    'BUSD',
  ),
  wbnb: new Token(
    56,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
  ),
  bnb: new Token(56, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 18, 'BNB', 'BNB')
}
