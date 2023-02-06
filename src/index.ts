// needed as of 7.x series, see CHANGELOG of the api repo.
import '@polkadot/api-augment';
import '@polkadot/types-augment';

import { ApiPromise, WsProvider } from '@polkadot/api';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { allChains } from './wss';

async function main() {
	for (const [key, value] of Object.entries(allChains)) {
		console.log(
			'\n----------------------------------- ',
			key,
			' -----------------------------------\n'
		);
		for (const chain of value) {
			if (Object.keys(chain.providers).length) {
				console.log('Name: ', chain.text, ' | providers: ', chain.providers);
			}
		}
	}
}

main().catch(console.error);
