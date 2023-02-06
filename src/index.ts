// needed as of 7.x series, see CHANGELOG of the api repo.
import '@polkadot/api-augment';
import '@polkadot/types-augment';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { allChains, kusamaParas, polkadotParas, rococoParas, westendParas } from './wss';
import { Codec } from '@polkadot/types-codec/types';
import { writeFileSync } from 'fs';

async function main() {
	const output: Map<string, [number, number]> = new Map();

	// todo: concat these in a type-safe way. only take the chain name and provider, then concat.
	// @ts-ignore
	const paras = kusamaParas.concat(polkadotParas);

	const tryProvider = async (s: string, chain: string): Promise<boolean> => {
		const provider = new WsProvider(s);

		// bueno: https://polkadot.js.org/docs/api/start/create#advanced-creation
		const apiBuilder = new ApiPromise({ provider });

		const api = await apiBuilder.isReadyOrError.catch((e) => {
			console.error(e);
		});

		if (api && api.isConnected) {
			const specName = api.runtimeVersion.specName.toString();
			const instances = api.registry.getModuleInstances(specName, 'electionsPhragmen') || [];
			const number = (x: Codec) => api.createType('u32', x).toNumber();
			for (const instance of instances) {
				if (
					api.consts[instance] &&
					api.consts[instance].maxVoters &&
					api.consts[instance].maxCandidates
				) {
					console.log(api.consts[instance].maxVoters.toHuman());
					output.set(chain, [
						number(api.consts[instance].maxVoters),
						number(api.consts[instance].maxCandidates)
					]);
				}
			}
			await api.disconnect();
			return true;
		} else {
			await apiBuilder.disconnect();
			return false;
		}
	};

	let success = 0;
	await Promise.all(
		paras.map(async (chain) => {
			if (Object.values(chain.providers).length) {
				const providers = Object.values(chain.providers);
				if (providers.length == 0) {
					return;
				}
				for (let i = 0; i < providers.length; i++) {
					if (await tryProvider(providers[i], chain.text)) {
						console.log(`✅ connected to ${chain.text}`);
						success += 1;
						break;
					} else {
						console.log(`❌ failed to connected to ${chain.text} via ${providers[i]}, retrying.. `);
					}
				}
			}
		})
	);

	console.log(output);
	console.log(paras.length, success, output.size);
	writeFileSync('output.json', JSON.stringify(Object.fromEntries(output)));
}

main().catch(console.error);
