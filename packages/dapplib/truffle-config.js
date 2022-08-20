require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain unfold imitate private fortune seminar'; 
let testAccounts = [
"0x093beb3df9a7e8c91ba5611ed53bac2c9f4f342b2509a5bc1dbde4ff25efae7f",
"0x80db6da8c41f194ea67c423cf732707aa1fce8ad921a8c1fd46f3606fa7acafe",
"0xdc715588e35658d1b0249b8356150fdd91da6ca986908018beecedcaf412eda3",
"0x6fc98ff1314acb287bb76b4334063f80f181cf7ad6ce2e1de63e5f5981d37767",
"0x41c5830b6858e41dc31d6edbcd1f945035791f16dfe8a6b5243a9dafe1b46b36",
"0xe7f100b3b973ea2cc8f3cb34689da6b601efd252d544f64c41ff4dc757d8b887",
"0xa33660433981e95bcf3f0f0b8bc5e859670f46b144f6a678204af9ff27056803",
"0x6d1c6e6569be0ca39850e950f07e2621960db1321541c4797ce98f9ed4a1ccf6",
"0x4401d02ec982951b41c1f6b9b6df94b37d6c7e0178fea43fcad819b61365bd1b",
"0x51ebd961a0e322a50f5b74b83c446ba0f94d52ca629acb8c86a0c15224622a63"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


