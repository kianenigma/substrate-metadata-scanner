// needed as of 7.x series, see CHANGELOG of the api repo.
import '@polkadot/api-augment';
import '@polkadot/types-augment';

import { ApiPromise, WsProvider } from '@polkadot/api';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { prodChains } from './wss';

async function main() {
	for (const chain of prodChains) {
		// connect to the chain ws endpoint
		console.log('CHAIN ---> ', chain);
		// console.log(chain.text);
		// console.log(chain.providers);
	}
}

main().catch(console.error);
