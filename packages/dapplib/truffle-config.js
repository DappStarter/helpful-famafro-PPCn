require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth office color gesture crime orange gasp'; 
let testAccounts = [
"0xaec764a742dda8366b8371ddedde97501e05014640764519e261aee1a41d75aa",
"0xa93d7c69bb406b1dc40a8765b69ed81803130534e08f33425a64ec66ea3af6e4",
"0x1206ccec6d3d7f69a12dd8adb4ab1ee392f91f6b98be1e2ae73925116f5202a3",
"0x52e5b2668a46ff9ca7e528a2bb8e749c87d854637bac4633a1c7e585104cea26",
"0x3e9050b7cfe5c74c54877e8cfbb293728fadd3b362fcf700cf6194a8335a98ed",
"0x4a0c762af961764916fe8e32d55a9dc5b67d1e31c770e19e6e1fdd64d00f8d45",
"0x470b06252edb5ec58fd2a4e45bf32a649274b11db507ba7e3d88939b7383e6f9",
"0x830b164bd15b3b206aae4cd191a533c0a70ee170bc39cddbe28cb49d694c215d",
"0xee642be64d39fbbe2ba87b01b55ee3962897e1f84e4bf55ebebe20ea954dfe64",
"0xf821f066aadb0eedd82ff1bf68516e53260bb0b757990d548cc7ba9cd0ba000a"
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


