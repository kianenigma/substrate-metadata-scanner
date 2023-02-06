export const polkadotRelay = [
	{
		dnslink: 'polkadot',
		info: 'polkadot',
		text: 'Polkadot',
		providers: {
			Parity: 'wss://rpc.polkadot.io',
			OnFinality: 'wss://polkadot.api.onfinality.io/public-ws',
			Dwellir: 'wss://polkadot-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://polkadot-rpc-tn.dwellir.com',
			Pinknode: 'wss://public-rpc.pinknode.io/polkadot',
			RadiumBlock: 'wss://polkadot.public.curie.radiumblock.co/ws',
			// 'Geometry Labs': 'wss://polkadot.geometry.io/websockets', // https://github.com/polkadot-js/apps/pull/6746
			'Automata 1RPC': 'wss://1rpc.io/dot',
			'Dotters Net': 'wss://rpc.dotters.network/polkadot',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/polkadot' // NOTE: Keep last
		}
	}
];

export const polkadotParas = [
	{
		info: 'acala',
		homepage: 'https://acala.network/',
		paraId: 2000,
		text: 'Acala',
		providers: {
			'Acala Foundation 0': 'wss://acala-rpc-0.aca-api.network',
			'Acala Foundation 1': 'wss://acala-rpc-1.aca-api.network',
			// 'Acala Foundation 2': 'wss://acala-rpc-2.aca-api.network/ws', // https://github.com/polkadot-js/apps/issues/6965
			'Acala Foundation 3': 'wss://acala-rpc-3.aca-api.network/ws',
			'Polkawallet 0': 'wss://acala.polkawallet.io',
			OnFinality: 'wss://acala-polkadot.api.onfinality.io/public-ws',
			Dwellir: 'wss://acala-rpc.dwellir.com'
			// 'Automata 1RPC': 'wss://1rpc.io/aca' // https://github.com/polkadot-js/apps/issues/8648
		}
	},
	{
		info: 'ajuna',
		homepage: 'https://ajuna.io',
		paraId: 2051,
		text: 'Ajuna Network',
		providers: {
			AjunaNetwork: 'wss://rpc-parachain.ajuna.network',
			RadiumBlock: 'wss://ajuna.public.curie.radiumblock.co/ws'
		}
	},
	{
		info: 'odyssey',
		homepage: 'https://www.aresprotocol.io/',
		paraId: 2028,
		text: 'Ares Odyssey',
		providers: {
			AresProtocol: 'wss://wss.odyssey.aresprotocol.io'
		}
	},
	{
		info: 'astar',
		homepage: 'https://astar.network',
		paraId: 2006,
		text: 'Astar',
		providers: {
			Astar: 'wss://rpc.astar.network',
			Blast: 'wss://astar.public.blastapi.io',
			Dwellir: 'wss://astar-rpc.dwellir.com',
			OnFinality: 'wss://astar.api.onfinality.io/public-ws',
			RadiumBlock: 'wss://astar.public.curie.radiumblock.co/ws',
			Pinknode: 'wss://public-rpc.pinknode.io/astar',
			'Automata 1RPC': 'wss://1rpc.io/astr',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/polkadot/astar' // NOTE: Keep last
		}
	},
	{
		info: 'aventus',
		homepage: 'https://www.aventus.io/',
		paraId: 2056,
		text: 'Aventus',
		providers: {}
	},
	{
		info: 'bifrost',
		homepage: 'https://crowdloan.bifrost.app',
		paraId: 2030,
		text: 'Bifrost',
		providers: {
			Liebi: 'wss://hk.p.bifrost-rpc.liebi.com/ws',
			OnFinality: 'wss://bifrost-polkadot.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'bitgreen',
		homepage: 'https://www.bitgreen.org',
		text: 'Bitgreen',
		paraId: 2048,
		providers: {
			Bitgreen: 'wss://mainnet.bitgreen.org'
		}
	},
	{
		info: 'centrifuge',
		homepage: 'https://centrifuge.io',
		paraId: 2031,
		text: 'Centrifuge',
		providers: {
			Centrifuge: 'wss://fullnode.parachain.centrifuge.io',
			OnFinality: 'wss://centrifuge-parachain.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'clover',
		homepage: 'https://clover.finance',
		paraId: 2002,
		text: 'Clover',
		providers: {
			Clover: 'wss://rpc-para.clover.finance',
			OnFinality: 'wss://clover.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8355, then enabled in https://github.com/polkadot-js/apps/pull/8413, then broken in https://github.com/polkadot-js/apps/issues/8421, renenabled for PolkadotJS
		}
	},
	{
		info: 'coinversation',
		// this is also a duplicate as a Live and Testing network -
		// it is either/or, not and
		isUnreachable: true,
		homepage: 'http://www.coinversation.io/',
		paraId: 2027,
		text: 'Coinversation',
		providers: {
			// Coinversation: 'wss://rpc.coinversation.io/' // https://github.com/polkadot-js/apps/issues/6635
		}
	},
	{
		info: 'composableFinance',
		homepage: 'https://composable.finance/',
		paraId: 2019,
		text: 'Composable Finance',
		providers: {
			Composable: 'wss://rpc.composable.finance',
			OnFinality: 'wss://composable.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'crustParachain',
		homepage: 'https://crust.network',
		paraId: 2008,
		text: 'Crust',
		providers: {
			Crust: 'wss://crust-parachain.crustapps.net'
		}
	},
	{
		info: 'darwinia',
		homepage: 'https://darwinia.network/',
		paraId: 2046,
		text: 'Darwinia',
		providers: {
			'Darwinia Network': 'wss://parachain-rpc.darwinia.network'
		}
	},
	{
		info: 'darwinia',
		homepage: 'https://darwinia.network/',
		paraId: 2003,
		text: 'Darwinia Backup',
		providers: {
			// 'Darwinia Network': 'wss://parachain-rpc.darwinia.network' // https://github.com/polkadot-js/apps/issues/6530
		}
	},
	{
		info: 'efinity',
		homepage: 'https://efinity.io',
		paraId: 2021,
		text: 'Efinity',
		providers: {
			Efinity: 'wss://rpc.efinity.io',
			Dwellir: 'wss://efinity-rpc.dwellir.com',
			OnFinality: 'wss://efinity.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'equilibrium',
		homepage: 'https://equilibrium.io/',
		paraId: 2011,
		text: 'Equilibrium',
		providers: {
			Equilibrium: 'wss://node.pol.equilibrium.io/',
			Dwellir: 'wss://equilibrium-rpc.dwellir.com'
		}
	},
	{
		info: 'frequency',
		homepage: 'https://frequency.xyz',
		paraId: 2091,
		text: 'Frequency',
		providers: {
			'Frequency 0': 'wss://0.rpc.frequency.xyz',
			'Frequency 1': 'wss://1.rpc.frequency.xyz'
		}
	},
	{
		info: 'geminis',
		isUnreachable: true,
		homepage: 'https://geminis.network/',
		paraId: 2038,
		text: 'Geminis',
		providers: {
			Geminis: 'wss://rpc.geminis.network'
		}
	},
	{
		info: 'hashed',
		homepage: 'https://hashed.network/',
		paraId: 2093,
		text: 'Hashed Network',
		providers: {
			'Hashed Systems': 'wss://c1.hashed.network'
		}
	},
	{
		info: 'hydra',
		homepage: 'https://hydradx.io/',
		paraId: 2034,
		text: 'HydraDX',
		providers: {
			'Galactic Council': 'wss://rpc.hydradx.cloud',
			Dwellir: 'wss://hydradx-rpc.dwellir.com',
			OnFinality: 'wss://hydradx.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8623, Renabled for PolkadotJS
		}
	},
	{
		info: 'integritee',
		homepage: 'https://integritee.network',
		paraId: 2039,
		text: 'Integritee Shell',
		providers: {
			Integritee: 'wss://polkadot.api.integritee.network'
		}
	},
	{
		info: 'interlay',
		homepage: 'https://interlay.io/',
		paraId: 2032,
		text: 'Interlay',
		providers: {
			'Kintsugi Labs': 'wss://api.interlay.io/parachain',
			OnFinality: 'wss://interlay.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'kapex',
		homepage: 'https://totemaccounting.com/',
		paraId: 2007,
		text: 'Kapex',
		providers: {
			Totem: 'wss://k-ui.kapex.network'
		}
	},
	{
		info: 'kilt',
		homepage: 'https://www.kilt.io/',
		paraId: 2086,
		text: 'KILT Spiritnet',
		providers: {
			'KILT Protocol': 'wss://spiritnet.kilt.io/',
			OnFinality: 'wss://spiritnet.api.onfinality.io/public-ws',
			Dwellir: 'wss://kilt-rpc.dwellir.com'
		}
	},
	{
		info: 'kylin',
		homepage: 'https://kylin.network/',
		paraId: 2052,
		text: 'Kylin',
		providers: {
			'Kylin Network': 'wss://polkadot.kylin-node.co.uk'
		}
	},
	{
		info: 'litentry',
		homepage: 'https://crowdloan.litentry.com',
		paraId: 2013,
		text: 'Litentry',
		providers: {
			Litentry: 'wss://rpc.litentry-parachain.litentry.io',
			Dwellir: 'wss://litentry-rpc.dwellir.com'
		}
	},
	{
		info: 'manta',
		isUnreachable: true, // https://github.com/polkadot-js/apps/issues/7018
		homepage: 'https://manta.network',
		paraId: 2015,
		text: 'Manta',
		providers: {
			// 'Manta Kuhlii': 'wss://kuhlii.manta.systems', // https://github.com/polkadot-js/apps/issues/6930
			// 'Manta Munkiana': 'wss://munkiana.manta.systems', // https://github.com/polkadot-js/apps/issues/6871
			// 'Manta Pectinata': 'wss://pectinata.manta.systems' // https://github.com/polkadot-js/apps/issues/7018
		}
	},
	{
		info: 'moonbeam',
		homepage: 'https://moonbeam.network/networks/moonbeam/',
		paraId: 2004,
		text: 'Moonbeam',
		providers: {
			'Moonbeam Foundation': 'wss://wss.api.moonbeam.network',
			'Automata 1RPC': 'wss://1rpc.io/glmr',
			Blast: 'wss://moonbeam.public.blastapi.io',
			OnFinality: 'wss://moonbeam.api.onfinality.io/public-ws',
			UnitedBloc: 'wss://moonbeam.unitedbloc.com:3001'
		}
	},
	{
		info: 'nodle',
		homepage: 'https://nodle.com',
		paraId: 2026,
		text: 'Nodle',
		providers: {
			OnFinality: 'wss://nodle-parachain.api.onfinality.io/public-ws',
			Dwellir: 'wss://eden-rpc.dwellir.com',
			Pinknode: 'wss://public-rpc.pinknode.io/nodle'
		}
	},
	{
		info: 'oak',
		homepage: 'https://oak.tech',
		isUnreachable: true,
		paraId: 2090,
		text: 'OAK Network',
		providers: {
			OAK: 'wss://rpc.oak.tech'
		}
	},
	{
		info: 'omnibtc',
		isUnreachable: true,
		homepage: 'https://www.omnibtc.finance',
		text: 'OmniBTC',
		paraId: 2053,
		providers: {
			OmniBTC: 'wss://psc-parachain.coming.chat'
		}
	},
	{
		info: 'origintrail-parachain',
		homepage: 'https://parachain.origintrail.io',
		text: 'OriginTrail',
		paraId: 2043,
		providers: {
			TraceLabs: 'wss://parachain-rpc.origin-trail.network'
		}
	},
	{
		info: 'parallel',
		homepage: 'https://parallel.fi',
		paraId: 2012,
		text: 'Parallel',
		providers: {
			OnFinality: 'wss://parallel.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/8355, then enabled in https://github.com/polkadot-js/apps/pull/8413, then broken in https://github.com/polkadot-js/apps/issues/8421, reenabled for PolkadotJS
			Parallel: 'wss://rpc.parallel.fi'
		}
	},
	{
		info: 'pendulum',
		homepage: 'https://pendulumchain.org/',
		paraId: 2094,
		text: 'Pendulum',
		isUnreachable: true,
		providers: {
			PendulumChain: 'wss://rpc.pendulumchain.tech'
		}
	},
	{
		info: 'phala',
		homepage: 'https://phala.network',
		paraId: 2035,
		text: 'Phala Network',
		providers: {
			Phala: 'wss://api.phala.network/ws',
			OnFinality: 'wss://phala.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'polkadex',
		isUnreachable: true, // https://github.com/polkadot-js/apps/issues/7620
		homepage: 'https://polkadex.trade/',
		paraId: 2040,
		text: 'Polkadex',
		providers: {
			// 'Polkadex Team': 'wss://mainnet.polkadex.trade/', // https://github.com/polkadot-js/apps/issues/7620
			// OnFinality: 'wss://polkadex.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/7620
		}
	},
	{
		info: 'subdao',
		homepage: 'https://subdao.network/',
		paraId: 2018,
		isUnreachable: true,
		text: 'SubDAO',
		providers: {
			SubDAO: 'wss://parachain-rpc.subdao.org'
		}
	},
	{
		info: 'subgame',
		homepage: 'http://subgame.org/',
		paraId: 2017,
		text: 'SubGame Gamma',
		providers: {
			// SubGame: 'wss://gamma.subgame.org/' // https://github.com/polkadot-js/apps/pull/6761
		}
	},
	{
		info: 'unique',
		homepage: 'https://unique.network/',
		paraId: 2037,
		text: 'Unique Network',
		providers: {
			'Unique America': 'wss://us-ws.unique.network/',
			'Unique Asia': 'wss://asia-ws.unique.network/',
			'Unique Europe': 'wss://eu-ws.unique.network/',
			OnFinality: 'wss://unique.api.onfinality.io/public-ws'
		}
	}
];

export const polkadotCommonParas = [
	{
		info: 'statemint',
		paraId: 1000,
		text: 'Statemint',
		providers: {
			Parity: 'wss://statemint-rpc.polkadot.io',
			OnFinality: 'wss://statemint.api.onfinality.io/public-ws',
			Dwellir: 'wss://statemint-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://statemint-rpc-tn.dwellir.com',
			Pinknode: 'wss://public-rpc.pinknode.io/statemint',
			RadiumBlock: 'wss://statemint.public.curie.radiumblock.co/ws'
		}
	},
	{
		info: 'polkadotCollectives',
		paraId: 1001,
		text: 'Collectives',
		providers: {
			Parity: 'wss://polkadot-collectives-rpc.polkadot.io',
			OnFinality: 'wss://collectives.api.onfinality.io/public-ws'
		}
	}
];

export const kusamaRelay = [
	{
		info: 'kusama',
		text: 'Kusama',
		providers: {
			Parity: 'wss://kusama-rpc.polkadot.io',
			OnFinality: 'wss://kusama.api.onfinality.io/public-ws',
			Dwellir: 'wss://kusama-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://kusama-rpc-tn.dwellir.com',
			RadiumBlock: 'wss://kusama.public.curie.radiumblock.co/ws',
			Pinknode: 'wss://public-rpc.pinknode.io/kusama',
			// 'Geometry Labs': 'wss://kusama.geometry.io/websockets', // https://github.com/polkadot-js/apps/pull/6746
			'Automata 1RPC': 'wss://1rpc.io/ksm',
			'Dotters Net': 'wss://rpc.dotters.network/kusama',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/kusama' // NOTE: Keep last
		}
	}
];

export const kusamaParas = [
	{
		info: 'kpron',
		homepage: 'http://apron.network/',
		isUnreachable: true,
		paraId: 2019,
		text: 'Kpron',
		providers: {
			Kpron: 'wss://kusama-kpron-rpc.apron.network/'
		}
	},
	{
		info: 'altair',
		homepage: 'https://centrifuge.io/altair',
		paraId: 2088,
		text: 'Altair',
		providers: {
			Centrifuge: 'wss://fullnode.altair.centrifuge.io',
			OnFinality: 'wss://altair.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'amplitude',
		homepage: 'https://pendulumchain.org/amplitude',
		paraId: 2124,
		text: 'Amplitude',
		providers: {
			PendulumChain: 'wss://rpc-amplitude.pendulumchain.tech',
			Dwellir: 'wss://amplitude-rpc.dwellir.com'
		}
	},
	{
		info: 'bajun',
		homepage: 'https://ajuna.io',
		paraId: 2119,
		text: 'Bajun Network',
		providers: {
			AjunaNetwork: 'wss://rpc-parachain.bajun.network',
			Dwellir: 'wss://bajun-rpc.dwellir.com',
			OnFinality: 'wss://bajun.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'basilisk',
		homepage: 'https://app.basilisk.cloud',
		paraId: 2090,
		text: 'Basilisk',
		providers: {
			Basilisk: 'wss://rpc.basilisk.cloud',
			Dwellir: 'wss://basilisk-rpc.dwellir.com'
		}
	},
	{
		info: 'bifrost',
		homepage: 'https://ksm.vtoken.io/?ref=polkadotjs',
		paraId: 2001,
		text: 'Bifrost',
		providers: {
			Liebi: 'wss://bifrost-rpc.liebi.com/ws',
			OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
			Dwellir: 'wss://bifrost-rpc.dwellir.com'
		}
	},
	{
		info: 'bitcountryPioneer',
		homepage: 'https://bit.country/?ref=polkadotjs',
		paraId: 2096,
		text: 'Bit.Country Pioneer',
		providers: {
			OnFinality: 'wss://pioneer.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'calamari',
		homepage: 'https://www.calamari.network/',
		paraId: 2084,
		text: 'Calamari',
		providers: {
			'Manta Network': 'wss://ws.calamari.systems/'
		}
	},
	{
		info: 'shadow',
		homepage: 'https://crust.network/',
		paraId: 2012,
		text: 'Crust Shadow',
		providers: {
			Crust: 'wss://rpc-shadow.crust.network/'
		}
	},
	{
		info: 'shadow',
		homepage: 'https://crust.network/',
		paraId: 2225,
		text: 'Crust Shadow 2',
		isUnreachable: true,
		providers: {
			// also duplicated right above (hence marked unreachable)
			// Crust: 'wss://rpc-shadow.crust.network/' // https://github.com/polkadot-js/apps/issues/8355
		}
	},
	{
		info: 'ipci',
		homepage: 'https://ipci.io',
		paraId: 2222,
		text: 'DAO IPCI',
		providers: {
			Airalab: 'wss://kusama.rpc.ipci.io'
		}
	},
	{
		info: 'crab',
		homepage: 'https://crab.network',
		paraId: 2105,
		text: 'Darwinia Crab',
		providers: {
			'Darwinia Network': 'wss://crab-parachain-rpc.darwinia.network/'
		}
	},
	{
		info: 'dorafactory',
		homepage: 'https://dorafactory.org/kusama/',
		paraId: 2115,
		text: 'Dora Factory',
		providers: {
			DORA: 'wss://kusama.dorafactory.org'
		}
	},
	{
		info: 'genshiro',
		homepage: 'https://genshiro.equilibrium.io',
		isUnreachable: true,
		paraId: 2024,
		text: 'Genshiro',
		providers: {
			Equilibrium: 'wss://node.genshiro.io'
		}
	},
	{
		info: 'genshiro',
		homepage: 'https://genshiro.equilibrium.io',
		isUnreachable: true,
		paraId: 2226,
		text: 'Genshiro crowdloan 2',
		providers: {
			Equilibrium: 'wss://node.genshiro.io'
		}
	},
	{
		info: 'gm',
		homepage: 'https://gmordie.com',
		paraId: 2123,
		text: 'GM',
		providers: {
			// GMorDieDAO: 'wss://kusama.gmordie.com', // https://github.com/polkadot-js/apps/issues/8457
			'bLd Nodes': 'wss://ws.gm.bldnodes.org',
			// TerraBioDAO: 'wss://ws-node-gm.terrabiodao.org', // https://github.com/polkadot-js/apps/issues/8867
			Leemo: 'wss://leemo.gmordie.com',
			'GM Intern': 'wss://intern.gmordie.com',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/kusama/gm' // NOTE: Keep last
		}
	},
	{
		info: 'imbue',
		homepage: 'https://imbue.network',
		paraId: 2121,
		text: 'Imbue Network',
		providers: {
			'Imbue Network': 'wss://imbue-kusama.imbue.network'
		}
	},
	{
		info: 'integritee',
		homepage: 'https://integritee.network',
		paraId: 2015,
		text: 'Integritee Network',
		providers: {
			Integritee: 'wss://kusama.api.integritee.network',
			OnFinality: 'wss://integritee-kusama.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'tinker',
		homepage: 'https://invarch.network/tinkernet',
		paraId: 2125,
		text: 'InvArch Tinkernet',
		providers: {
			// 'InvArch Team': 'wss://tinker.invarch.network', // https://github.com/polkadot-js/apps/issues/8623
			OnFinality: 'wss://invarch-tinkernet.api.onfinality.io/public-ws',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/kusama/tinkernet' // NOTE: Keep last
		}
	},
	{
		info: 'kabocha',
		homepage: 'https://kabocha.network',
		paraId: 2113,
		text: 'Kabocha',
		providers: {
			JelliedOwl: 'wss://kabocha.jelliedowl.net'
		}
	},
	{
		info: 'karura',
		homepage: 'https://acala.network/karura/join-karura',
		paraId: 2000,
		text: 'Karura',
		providers: {
			'Acala Foundation 0': 'wss://karura-rpc-0.aca-api.network',
			'Acala Foundation 1': 'wss://karura-rpc-1.aca-api.network',
			'Acala Foundation 2': 'wss://karura-rpc-2.aca-api.network/ws',
			'Acala Foundation 3': 'wss://karura-rpc-3.aca-api.network/ws',
			'Polkawallet 0': 'wss://karura.polkawallet.io',
			OnFinality: 'wss://karura.api.onfinality.io/public-ws',
			Dwellir: 'wss://karura-rpc.dwellir.com'
		}
	},
	{
		info: 'khala',
		homepage: 'https://phala.network/',
		paraId: 2004,
		text: 'Khala Network',
		providers: {
			Phala: 'wss://khala-api.phala.network/ws',
			OnFinality: 'wss://khala.api.onfinality.io/public-ws',
			Dwellir: 'wss://khala-rpc.dwellir.com',
			Pinknode: 'wss://public-rpc.pinknode.io/khala'
		}
	},
	{
		info: 'kico',
		homepage: 'https://dico.io/',
		paraId: 2107,
		text: 'KICO',
		providers: {
			'DICO Foundation': 'wss://rpc.kico.dico.io'
			// 'DICO Foundation 2': 'wss://rpc.api.kico.dico.io' // https://github.com/polkadot-js/apps/issues/8203
		}
	},
	{
		info: 'kico 2',
		homepage: 'https://dico.io/',
		paraId: 2235,
		text: 'KICO 2',
		providers: {
			// 'DICO Foundation': 'wss://rpc.kico2.dico.io' // https://github.com/polkadot-js/apps/issues/8415
		}
	},
	{
		info: 'kintsugi',
		homepage: 'https://kintsugi.interlay.io/',
		paraId: 2092,
		text: 'Kintsugi BTC',
		providers: {
			'Kintsugi Labs': 'wss://api-kusama.interlay.io/parachain',
			OnFinality: 'wss://kintsugi.api.onfinality.io/public-ws'
		}
	},

	{
		info: 'listen',
		homepage: 'https://listen.io/',
		paraId: 2118,
		text: 'Listen Network',
		providers: {
			'Listen Foundation 1': 'wss://rpc.mainnet.listen.io',
			'Listen Foundation 2': 'wss://wss.mainnet.listen.io'
		}
	},
	{
		info: 'litmus',
		homepage: 'https://kusama-crowdloan.litentry.com',
		paraId: 2106,
		isUnreachable: false,
		text: 'Litmus',
		providers: {
			Litentry: 'wss://rpc.litmus-parachain.litentry.io'
		}
	},
	{
		info: 'loomNetwork',
		isUnreachable: true, // https://github.com/polkadot-js/apps/issues/5888
		homepage: 'https://loomx.io/',
		paraId: 2080,
		text: 'Loom Network',
		providers: {
			LoomNetwork: 'wss://kusama.dappchains.com'
		}
	},
	{
		info: 'luhn',
		homepage: 'https://luhn.network/',
		paraId: 2232,
		text: 'Luhn Network',
		providers: {
			'Hashed Systems': 'wss://c1.luhn.network'
		}
	},
	{
		info: 'mangata',
		homepage: 'https://mangata.finance',
		paraId: 2110,
		text: 'Mangata',
		providers: {
			Mangata: 'wss://prod-kusama-collator-01.mangatafinance.cloud',
			OnFinality: 'wss://mangata-x.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'mars',
		homepage: 'https://www.aresprotocol.io/mars',
		paraId: 2008,
		text: 'Mars',
		providers: {
			AresProtocol: 'wss://wss.mars.aresprotocol.io'
		}
	},
	{
		info: 'moonriver',
		homepage: 'https://moonbeam.network/networks/moonriver/',
		paraId: 2023,
		text: 'Moonriver',
		providers: {
			'Moonbeam Foundation': 'wss://wss.api.moonriver.moonbeam.network',
			Blast: 'wss://moonriver.public.blastapi.io',
			OnFinality: 'wss://moonriver.api.onfinality.io/public-ws',
			UnitedBloc: 'wss://moonriver.unitedbloc.com:2001'
		}
	},
	{
		info: 'heiko',
		homepage: 'https://parallel.fi',
		paraId: 2085,
		text: 'Parallel Heiko',
		providers: {
			OnFinality: 'wss://parallel-heiko.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/8355, then enabled in https://github.com/polkadot-js/apps/pull/8413, then broken in https://github.com/polkadot-js/apps/issues/8421, reenabled for PolkadotJS
			Parallel: 'wss://heiko-rpc.parallel.fi'
		}
	},
	{
		info: 'heiko',
		homepage: 'https://parallel.fi',
		paraId: 2126,
		isUnreachable: true,
		text: 'Parallel Heiko 2',
		providers: {}
	},
	{
		info: 'picasso',
		homepage: 'https://picasso.composable.finance/',
		paraId: 2087,
		text: 'Picasso',
		providers: {
			Composable: 'wss://rpc.composablenodes.tech'
		}
	},
	{
		info: 'pichiu',
		homepage: 'https://kylin.network/',
		paraId: 2102,
		text: 'Pichiu',
		providers: {
			'Kylin Network': 'wss://kusama.kylin-node.co.uk',
			OnFinality: 'wss://pichiu.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8867, reenabled for PolkadotJS
		}
	},
	{
		info: 'polkasmith',
		isUnreachable: true, // https://github.com/polkadot-js/apps/issues/6595
		homepage: 'https://polkasmith.polkafoundry.com/',
		paraId: 2009,
		text: 'PolkaSmith by PolkaFoundry',
		providers: {
			PolkaSmith: 'wss://wss-polkasmith.polkafoundry.com'
		}
	},
	{
		info: 'quartz',
		homepage: 'https://unique.network/',
		paraId: 2095,
		text: 'QUARTZ by UNIQUE',
		providers: {
			'Unique America': 'wss://us-ws-quartz.unique.network',
			'Unique Asia': 'wss://asia-ws-quartz.unique.network',
			'Unique Europe': 'wss://eu-ws-quartz.unique.network',
			OnFinality: 'wss://quartz.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8436 re-added added previously removed, still unreachable, reenabled for PolkadotJS
		}
	},
	{
		info: 'riodefi',
		homepage: 'https://riodefi.com',
		paraId: 2227,
		text: 'RioDeFi',
		providers: {
			RioProtocol: 'wss://rio-kusama.riocorenetwork.com'
		}
	},
	{
		info: 'robonomics',
		homepage: 'http://robonomics.network/',
		paraId: 2048,
		text: 'Robonomics',
		providers: {
			Airalab: 'wss://kusama.rpc.robonomics.network/',
			OnFinality: 'wss://robonomics.api.onfinality.io/public-ws',
			Samsara: 'wss://robonomics.0xsamsara.com',
			Leemo: 'wss://robonomics.leemo.me'
		}
	},
	{
		info: 'robonomics',
		homepage: 'http://robonomics.network/',
		paraId: 2240,
		text: 'Robonomics 2',
		isUnreachable: true,
		providers: {
			Airalab: 'wss://kusama.rpc.robonomics.network/',
			OnFinality: 'wss://robonomics.api.onfinality.io/public-ws',
			Samsara: 'wss://robonomics.0xsamsara.com',
			Leemo: 'wss://robonomics.leemo.me'
		}
	},
	{
		info: 'sakura',
		homepage: 'https://clover.finance/',
		isUnreachable: true,
		paraId: 2016,
		text: 'Sakura',
		providers: {
			Clover: 'wss://api-sakura.clover.finance'
		}
	},
	{
		info: 'shiden',
		homepage: 'https://shiden.astar.network/',
		paraId: 2007,
		text: 'Shiden',
		providers: {
			StakeTechnologies: 'wss://rpc.shiden.astar.network',
			Blast: 'wss://shiden.public.blastapi.io',
			Dwellir: 'wss://shiden-rpc.dwellir.com',
			OnFinality: 'wss://shiden.api.onfinality.io/public-ws',
			Pinknode: 'wss://public-rpc.pinknode.io/shiden',
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/kusama/shiden' // NOTE: Keep last
		}
	},
	{
		info: 'shiden',
		homepage: 'https://shiden.astar.network/',
		paraId: 2120,
		text: 'Shiden Crowdloan 2',
		isUnreachable: true,
		providers: {
			StakeTechnologies: 'wss://rpc.shiden.astar.network'
		}
	},
	{
		info: 'snow',
		homepage: 'https://icenetwork.io/snow',
		paraId: 2129,
		text: 'SNOW Network',
		isUnreachable: false,
		providers: {
			IceNetwork: 'wss://snow-rpc.icenetwork.io'
		}
	},
	{
		info: 'sora_ksm',
		homepage: 'https://sora.org/',
		paraId: 2011,
		text: 'SORA',
		providers: {
			Soramitsu: 'wss://ws.parachain-collator-1.c1.sora2.soramitsu.co.jp'
		}
	},
	{
		info: 'subgame',
		isUnreachable: true, // https://github.com/polkadot-js/apps/issues/7982
		homepage: 'http://subgame.org/',
		paraId: 2018,
		text: 'SubGame Gamma',
		providers: {
			SubGame: 'wss://gamma.subgame.org/'
		}
	},
	{
		info: 'subsocialX',
		homepage: 'https://subsocial.network/',
		paraId: 2100,
		text: 'SubsocialX',
		providers: {
			'Dappforce 1': 'wss://para.subsocial.network'
		}
	},
	{
		info: 'zero',
		homepage: 'https://zero.io',
		paraId: 2236,
		text: 'subzero',
		providers: {
			ZeroNetwork: 'wss://rpc-1.kusama.node.zero.io'
		}
	},
	{
		info: 'tanganika',
		homepage: 'https://www.datahighway.com/',
		paraId: 2116,
		text: 'Tanganika',
		providers: {
			DataHighway: 'wss://tanganika.datahighway.com'
		}
	},
	{
		info: 'trustbase',
		isUnreachable: true, // no providers (yet)
		homepage: 'https://trustbase.network/',
		paraId: 2078,
		text: 'TrustBase',
		providers: {}
	},
	{
		info: 'turing',
		homepage: 'https://oak.tech',
		paraId: 2114,
		text: 'Turing Network',
		providers: {
			OAK: 'wss://rpc.turing.oak.tech',
			Dwellir: 'wss://turing-rpc.dwellir.com'
		}
	},
	{
		info: 'unorthodox',
		homepage: 'https://standard.tech/',
		paraId: 2094,
		text: 'Unorthodox',
		providers: {
			// 'Standard Protocol': 'wss://rpc.kusama.standard.tech' // https://github.com/polkadot-js/apps/issues/8525
		}
	},
	{
		info: 'zeitgeist',
		homepage: 'https://zeitgeist.pm',
		paraId: 2101,
		text: 'Zeitgeist',
		providers: {
			// ZeitgeistPM: 'wss://rpc-0.zeitgeist.pm', // https://github.com/polkadot-js/apps/issues/7982
			Dwellir: 'wss://zeitgeist-rpc.dwellir.com',
			OnFinality: 'wss://zeitgeist.api.onfinality.io/public-ws'
		}
	}
];

export const kusamaCommonParas = [
	{
		info: 'statemine',
		paraId: 1000,
		text: 'Statemine',
		providers: {
			Parity: 'wss://statemine-rpc.polkadot.io',
			OnFinality: 'wss://statemine.api.onfinality.io/public-ws',
			Dwellir: 'wss://statemine-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://statemine-rpc-tn.dwellir.com',
			Pinknode: 'wss://public-rpc.pinknode.io/statemine',
			RadiumBlock: 'wss://statemine.public.curie.radiumblock.co/ws'
		},
		teleport: [-1]
	},
	{
		info: 'encointer',
		homepage: 'https://encointer.org/',
		paraId: 1001,
		text: 'Encointer Network',
		providers: {
			'Encointer Association': 'wss://kusama.api.encointer.org',
			OnFinality: 'wss://encointer.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8553, reenabled for Polkadot JS
		},
		teleport: [-1]
	},
	{
		info: 'kusamaBridgeHub',
		paraId: 1002,
		text: 'BridgeHub',
		providers: {
			Parity: 'wss://kusama-bridge-hub-rpc.polkadot.io'
		}
	}
];

export const production = [
	{
		info: '3dpass',
		text: '3DPass',
		providers: {
			'3dpass': 'wss://rpc2.3dpass.org'
		}
	},
	{
		info: 'aleph',
		text: 'Aleph Zero',
		providers: {
			'Aleph Zero Foundation': 'wss://ws.azero.dev'
		}
	},
	{
		info: 'Ares Odyssey',
		text: 'Ares Odyssey',
		providers: {
			'Ares Protocol': 'wss://odyssey.aresprotocol.io'
		}
	},
	{
		info: 'automata',
		text: 'Automata',
		providers: {
			'Automata Network': 'wss://api.ata.network',
			OnFinality: 'wss://automata.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'bittensor',
		text: 'Bittensor',
		providers: {
			'Opentensor Fdn (Archive)': 'wss://archivelb.nakamoto.opentensor.ai:9943'
		}
	},
	{
		dnslink: 'centrifuge',
		info: 'centrifuge',
		text: 'Centrifuge Standalone [Archived]',
		providers: {
			// Centrifuge: 'wss://fullnode.centrifuge.io' // https://github.com/polkadot-js/apps/issues/8012
		}
	},
	{
		info: 'chainx',
		text: 'ChainX',
		providers: {
			ChainX: 'wss://mainnet.chainx.org/ws'
		}
	},
	{
		info: 'competitors-club',
		text: 'Competitors Club',
		providers: {
			// 'Competitors Club': 'wss://node0.competitors.club/wss' // https://github.com/polkadot-js/apps/issues/8263
		}
	},
	{
		info: 'creditcoin',
		text: 'Creditcoin',
		providers: {
			'Creditcoin Foundation': 'wss://rpc.mainnet.creditcoin.network/ws'
		}
	},
	{
		info: 'crown-sterling',
		text: 'Crown Sterling',
		providers: {
			'Crown Sterling': 'wss://blockchain.crownsterling.io'
		}
	},
	{
		info: 'crust',
		text: 'Crust Network',
		providers: {
			'Crust Network': 'wss://rpc.crust.network',
			OnFinality: 'wss://crust.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'darwinia',
		text: 'Darwinia',
		providers: {
			'Darwinia Network': 'wss://rpc.darwinia.network',
			Dwellir: 'wss://darwinia-rpc.dwellir.com'
		}
	},
	{
		info: 'crab',
		text: 'Darwinia Crab',
		providers: {
			'Darwinia Network': 'wss://crab-rpc.darwinia.network',
			Dwellir: 'wss://darwiniacrab-rpc.dwellir.com',
			OnFinality: 'wss://darwinia-crab.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'debio',
		text: 'DeBio',
		providers: {
			DeBio: 'wss://ws-rpc.debio.network'
		}
	},
	{
		info: 'dock-pos-mainnet',
		text: 'Dock',
		providers: {
			'Dock Association': 'wss://mainnet-node.dock.io'
		}
	},
	{
		dnslink: 'edgeware',
		info: 'edgeware',
		text: 'Edgeware',
		providers: {
			JelliedOwl: 'wss://edgeware.jelliedowl.net',
			'Commonwealth Labs': 'wss://mainnet2.edgewa.re'
			// OnFinality: 'wss://edgeware.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/8768
		}
	},
	{
		info: 'efinity',
		text: 'Efinity',
		providers: {
			// Efinity: 'wss://rpc.efinity.io' // https://github.com/polkadot-js/apps/pull/6761
		}
	},
	{
		info: 'equilibrium',
		text: 'Equilibrium',
		providers: {
			// Equilibrium: 'wss://node.equilibrium.io' // https://github.com/polkadot-js/apps/issues/7219
		}
	},
	{
		info: 'genshiro',
		text: 'Genshiro',
		providers: {
			Equilibrium: 'wss://node.genshiro.io'
		}
	},
	{
		info: 'hanonycash',
		text: 'Hanonycash',
		providers: {
			// Hanonycash: 'wss://rpc.hanonycash.com' // https://github.com/polkadot-js/apps/runs/2755409009?check_suite_focus=true
		}
	},
	{
		info: 'joystream',
		text: 'Joystream',
		providers: {
			Jsgenesis: 'wss://rpc.joystream.org'
		}
	},
	{
		dnslink: 'kulupu',
		info: 'kulupu',
		text: 'Kulupu',
		providers: {
			Kulupu: 'wss://rpc.kulupu.corepaper.org/ws'
		}
	},
	{
		info: 'kusari',
		text: 'Kusari',
		providers: {
			Swapdex: 'wss://ws.kusari.network'
		}
	},
	{
		info: 'logion',
		text: 'logion Standalone',
		providers: {
			Logion: 'wss://rpc01.logion.network'
		}
	},
	{
		info: 'mathchain',
		text: 'MathChain',
		providers: {
			//  MathWallet: 'wss://mathchain-asia.maiziqianbao.net/ws', // https://github.com/polkadot-js/apps/issues/8525
			// 'MathWallet Backup': 'wss://mathchain-us.maiziqianbao.net/ws' // https://github.com/polkadot-js/apps/issues/8525
		}
	},
	{
		info: 'minix',
		text: 'MiniX',
		providers: {
			// ChainX: 'wss://minichain-mainnet.coming.chat/ws' // https://github.com/polkadot-js/apps/issues/7182
		}
	},
	{
		info: 'myriad',
		text: 'Myriad',
		providers: {
			Myriad: 'wss://ws-rpc.myriad.social'
		}
	},
	{
		info: 'neatcoin',
		text: 'Neatcoin',
		providers: {
			Neatcoin: 'wss://rpc.neatcoin.org/ws'
		}
	},
	{
		info: 'nftmart',
		text: 'NFTMart',
		providers: {
			NFTMart: 'wss://mainnet.nftmart.io/rpc/ws'
		}
	},
	{
		info: 'nodle',
		text: 'Nodle',
		providers: {
			// Nodle: 'wss://main3.nodleprotocol.io', // https://github.com/polkadot-js/apps/issues/7652
			// OnFinality: 'wss://nodle.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8013
		}
	},
	{
		info: 'polkadex',
		text: 'Polkadex',
		providers: {
			'Polkadex Team': 'wss://mainnet.polkadex.trade',
			OnFinality: 'wss://polkadex.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'polymesh',
		text: 'Polymesh Mainnet',
		providers: {
			Polymath: 'wss://mainnet-rpc.polymesh.network'
		}
	},
	{
		info: 'riochain',
		text: 'RioChain',
		providers: {
			RioChain: 'wss://node.v1.riochain.io'
		}
	},
	{
		info: 'robonomics',
		text: 'Robonomics',
		providers: {
			// Airalab: 'wss://kusama.rpc.robonomics.network/' // https://github.com/polkadot-js/apps/pull/6761
		}
	},
	{
		info: 'sherpax',
		text: 'SherpaX',
		providers: {
			ChainX: 'wss://mainnet.sherpax.io'
		}
	},
	{
		info: 'sora-substrate',
		text: 'SORA',
		providers: {
			'SORA Parliament Ministry of Finance #2': 'wss://mof2.sora.org',
			'SORA Parliament Ministry of Finance': 'wss://ws.mof.sora.org',
			'SORA Parliament Ministry of Finance #3': 'wss://mof3.sora.org',
			OnFinality: 'wss://sora.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'spanner',
		text: 'Spanner',
		providers: {
			// Spanner: 'wss://wss.spannerprotocol.com' // https://github.com/polkadot-js/apps/issues/6547
		}
	},
	{
		info: 'stafi',
		isDisabled: true, // Cannot find type ChainId
		text: 'Stafi',
		providers: {
			'Stafi Foundation': 'wss://mainnet-rpc.stafi.io'
		}
	},
	{
		info: 'subgame',
		text: 'SubGame',
		providers: {
			SubGame: 'wss://mainnet.subgame.org/'
		}
	},
	{
		info: 'subsocial',
		text: 'Subsocial',
		providers: {
			// DappForce: 'wss://rpc.subsocial.network' // https://github.com/polkadot-js/apps/issues/8046
		}
	},
	{
		info: 'swapdex',
		text: 'Swapdex',
		providers: {
			Swapdex: 'wss://ws.swapdex.network'
		}
	},
	{
		info: 'ternoa',
		text: 'Ternoa',
		providers: {
			CapsuleCorp: 'wss://mainnet.ternoa.network'
		}
	},
	{
		info: 'thebifrost-mainnet',
		text: 'The Bifrost Mainnet',
		providers: {
			'Pilab #1': 'wss://public-01.mainnet.thebifrost.io/wss',
			'Pilab #2': 'wss://public-02.mainnet.thebifrost.io/wss'
		}
	},
	{
		info: 'uniarts',
		text: 'UniArts',
		providers: {
			UniArts: 'wss://mainnet.uniarts.vip:9443'
		}
	},
	{
		info: 'unitnetwork',
		text: 'UnitNetwork',
		providers: {
			// UnitNetwork: 'wss://www.unitnode3.info:443'
		}
	},
	{
		info: 'westlake',
		text: 'Westlake',
		providers: {
			// DataHighway: 'wss://westlake.datahighway.com' // https://github.com/polkadot-js/apps/issues/7293
		}
	}
];

export const testChains = [
	{
		info: '3dpass-testnet',
		text: '3DPass Testnet',
		providers: {
			'3dpass': 'wss://test-rpc.3dpass.org'
		}
	},
	{
		info: 'ajuna',
		text: 'Ajuna Testnet',
		providers: {
			'Ajuna Network': 'wss://rpc-test.ajuna.network'
		}
	},
	{
		info: 'aleph',
		text: 'Aleph Zero Testnet',
		providers: {
			'Aleph Zero Foundation': 'wss://ws.test.azero.dev',
			Dwellir: 'wss://aleph-zero-testnet-rpc.dwellir.com'
		}
	},
	{
		info: 'nodle',
		text: 'Arcadia',
		providers: {
			// Nodle: 'wss://arcadia1.nodleprotocol.io' // https://github.com/polkadot-js/apps/issues/7652
		}
	},
	{
		info: 'arctic',
		text: 'Arctic',
		providers: {
			Arctic: 'wss://arctic-rpc.icenetwork.io:9944'
		}
	},
	{
		info: 'Ares Gladios',
		text: 'Ares Gladios',
		providers: {
			'Ares Protocol': 'wss://gladios.aresprotocol.io'
		}
	},
	{
		info: 'jaz',
		text: 'Artio Testnet',
		providers: {
			Jaz: 'wss://ws0.jaz.network'
		}
	},
	{
		info: 'automata-contextfree',
		text: 'Automata ContextFree',
		providers: {
			'Automata Network': 'wss://cf-api.ata.network',
			OnFinality: 'wss://contextfree.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'edgeware',
		text: 'Beresheet',
		providers: {
			JelliedOwl: 'wss://beresheet.jelliedowl.net'
		}
	},
	{
		info: 'bifrost',
		text: 'Bifrost Stage Network',
		providers: {
			// Liebi: 'wss://bifrost-rpc.testnet.liebi.com/ws' // https://github.com/polkadot-js/apps/issues/8139
		}
	},
	{
		info: 'bitcountry',
		text: 'Bit.Country - Metaverse Network',
		providers: {
			'Metaverse Foundation': 'wss://tewai-rpc.bit.country'
		}
	},
	{
		info: 'cess-testnet',
		text: 'CESS Testnet',
		providers: {
			CESS: 'wss://testnet-rpc0.cess.cloud/ws/'
		}
	},
	{
		info: 'clover',
		text: 'Clover',
		providers: {
			// Clover: 'wss://api.clover.finance/' // Cannot construct unknown type BridgeNetworks
		}
	},
	{
		// this is also a duplicate as a parachain under Polkadot and live under production -
		// it is either/or, not and
		info: 'coinversation',
		isDisabled: true, // https://github.com/polkadot-js/apps/issues/6635
		text: 'Coinversation',
		providers: {
			Coinversation: 'wss://rpc.coinversation.io/'
		}
	},
	{
		info: 'creditcoin-testnet',
		text: 'Creditcoin Testnet',
		providers: {
			'Creditcoin Foundation': 'wss://rpc.testnet.creditcoin.network/ws'
		}
	},
	{
		info: 'Crust Maxwell',
		text: 'Crust Maxwell',
		providers: {
			// 'Crust Network': 'wss://api.crust.network/', // https://github.com/polkadot-js/apps/issues/8060
			// 'DCloud Foundation': 'wss://api.decloudf.com/' // https://github.com/polkadot-js/apps/issues/8060
			// Pinknode: 'wss://rpc.pinknode.io/maxwell/explorer' // https://github.com/polkadot-js/apps/issues/7058
		}
	},
	{
		info: 'datahighway',
		isDisabled: true,
		text: 'Spreehafen',
		providers: {
			MXC: 'wss://spreehafen.datahighway.com'
		}
	},
	{
		info: 'debio-testnet',
		text: 'DeBio Testnet',
		providers: {
			DeBio: 'wss://ws-rpc.testnet.debio.network'
		}
	},
	{
		info: 'dock-testnet',
		text: 'Dock',
		providers: {
			// 'Dock Association': 'wss://knox-1.dock.io' // https://github.com/polkadot-js/apps/issues/6831
		}
	},
	{
		info: 'dolphin',
		text: 'Dolphin Testnet',
		providers: {
			// 'Dolphin Testnet': 'wss://trillian.dolphin.red' // https://github.com/polkadot-js/apps/issues/7439
		}
	},
	{
		info: 'dotmog',
		text: 'DOTMog',
		providers: {
			// DOTMog: 'wss://mogiway-01.dotmog.com' // https://github.com/polkadot-js/apps/issues/8895
		}
	},
	{
		info: 'encointer',
		text: 'Encointer Gesell',
		providers: {
			'Encointer Association': 'wss://gesell.encointer.org'
		}
	},
	{
		info: 'equilibrium',
		text: 'Equilibrium',
		providers: {
			// Equilibrium: 'wss://testnet.equilibrium.io' // https://github.com/polkadot-js/apps/issues/6250
		}
	},
	{
		info: 'fantour',
		text: 'Fantour',
		providers: {
			// FantourDev: 'wss://test-ws.fantour.io' // https://github.com/polkadot-js/apps/issues/6519
		}
	},
	{
		info: 'ferrum',
		text: 'Ferrum Testnet',
		providers: {
			Ferrum: 'wss://testnet.dev.svcs.ferrumnetwork.io'
		}
	},
	{
		info: 'substrate',
		text: 'Flaming Fir',
		providers: {
			// Parity: 'wss://substrate-rpc.parity.io' // https://github.com/polkadot-js/apps/issues/5571
		}
	},
	{
		info: 'Galital',
		text: 'Galital PC2',
		providers: {
			// StarkleyTech: 'wss://galital-rpc-testnet.starkleytech.com' // https://github.com/polkadot-js/apps/issues/6721
		}
	},
	{
		info: 'galois',
		text: 'Galois',
		providers: {
			MathWallet: 'wss://galois-hk.maiziqianbao.net/ws',
			'MathWallet Backup': 'wss://galois.maiziqianbao.net/ws'
		}
	},
	{
		info: 'gamepower',
		text: 'GamePower',
		providers: {
			// GamePower: 'wss://gamepower.io' // https://github.com/polkadot-js/apps/issues/7223
		}
	},
	{
		info: 'geek',
		text: 'GeekCash',
		providers: {
			// 'Geek Team': 'wss://testnet.geekcash.org' // https://github.com/polkadot-js/apps/issues/8361
		}
	},
	{
		info: 'halongbay',
		text: 'Halongbay Testnet',
		providers: {
			// Halongbay: 'wss://halongbay.polkafoundry.com' // https://github.com/polkadot-js/apps/issues/6871
		}
	},
	{
		info: 'interlay-testnet',
		text: 'Interlay Testnet',
		providers: {
			Interlay: 'wss://api-testnet.interlay.io/parachain/'
		}
	},
	{
		info: 'brainstorm',
		text: 'InvArch Brainstorm Testnet',
		providers: {
			// 'InvArch Team': 'wss://brainstorm.invarch.network/' // https://github.com/polkadot-js/apps/issues/8020
		}
	},
	{
		info: 'ipse',
		isDisabled: true, // https://github.com/polkadot-js/apps/issues/6242
		text: 'IPSE',
		providers: {
			'IPSE China': 'wss://testnet-china.ipse.io',
			'IPSE USA': 'wss://testnet-usa.ipse.io',
			'IPSE Europe': 'wss://testnet-europe.ipse.io'
		}
	},
	{
		info: 'jupiter',
		text: 'Jupiter',
		providers: {
			// Patract: 'wss://ws.jupiter-poa.patract.cn' // https://github.com/polkadot-js/apps/issues/7765
		}
	},
	{
		info: 'khala',
		text: 'Khala (Para 3)',
		providers: {
			// 'Phala Network': 'wss://pc-test-3.phala.network/khala/ws' // https://github.com/polkadot-js/apps/issues/6930
		}
	},
	{
		info: 'kilt',
		text: 'KILT Mashnet',
		providers: {
			'KILT Protocol': 'wss://full-nodes.kilt.io:9944/'
		}
	},
	{
		info: 'kilt',
		text: 'KILT Peregrine',
		providers: {
			'KILT Protocol': 'wss://peregrine.kilt.io/parachain-public-ws/'
		}
	},
	{
		info: 'kintsugi-testnet',
		text: 'Kintsugi Testnet',
		providers: {
			Interlay: 'wss://api-dev-kintsugi.interlay.io/parachain'
		}
	},
	{
		info: 'klugdossier',
		text: 'Klug Dossier',
		providers: {
			// 'Klug Dossier': 'wss://klugdossier.net/' // https://github.com/polkadot-js/apps/issues/8081
		}
	},
	{
		info: 'kylin',
		text: 'Kylin Testnet',
		providers: {
			// 'Kylin Network': 'wss://testnet.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/6635
		}
	},
	{
		info: 'litentry',
		text: 'Litentry Testnet',
		providers: {
			Litentry: 'wss://testnet.litentry.io'
		}
	},
	{
		info: 'logion',
		text: 'logion Para Testnet',
		providers: {
			Logion: 'wss://chimay.logion.network'
		}
	},
	{
		info: 'logion',
		text: 'logion Standalone Testnet',
		providers: {
			Logion: 'wss://test-rpc01.logion.network'
		}
	},
	{
		info: 'acala',
		text: 'Mandala',
		providers: {
			Acala: 'wss://mandala.polkawallet.io'
			// OnFinality: 'wss://acala-mandala.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8105
		}
	},
	{
		info: 'manta',
		text: 'Manta Testnet',
		providers: {
			// 'Manta Testnet': 'wss://ws.f1.testnet.manta.network' // https://github.com/polkadot-js/apps/issues/6384
		}
	},
	{
		info: 'minix',
		text: 'MiniX Testnet',
		providers: {
			// Chainx: 'wss://minichain.coming.chat/ws' // https://github.com/polkadot-js/apps/issues/8132
		}
	},
	{
		info: 'moonbaseAlpha',
		text: 'Moonbase Alpha',
		providers: {
			'Moonbeam Foundation': 'wss://wss.api.moonbase.moonbeam.network',
			Blast: 'wss://moonbase-alpha.public.blastapi.io',
			OnFinality: 'wss://moonbeam-alpha.api.onfinality.io/public-ws',
			UnitedBloc: 'wss://moonbase.unitedbloc.com:1001'
		}
	},
	{
		info: 'mybank',
		text: 'mybank.network',
		providers: {
			// MYBANK: 'wss://mybank.network/substrate' // https://github.com/polkadot-js/apps/issues/5845
		}
	},
	{
		info: 'myriad-tesnet',
		text: 'Myriad Testnet',
		providers: {
			Myriad: 'wss://ws-rpc.testnet.myriad.social'
		}
	},
	{
		info: 'nftmart',
		text: 'NFTMart',
		providers: {
			NFTMartDev: 'wss://dev-ws.nftmart.io',
			NFTMartStaging: 'wss://staging-ws.nftmart.io'
		}
	},
	{
		info: 'opal',
		isDisabled: false,
		text: 'OPAL by UNIQUE',
		providers: {
			'Geo Load Balancer': 'wss://ws-opal.unique.network',
			Europe: 'wss://eu-ws-opal.unique.network',
			'North America': 'wss://us-ws-opal.unique.network',
			Asia: 'wss://asia-ws-opal.unique.network'
		}
	},
	{
		info: 'opportunity',
		text: 'Opportunity',
		providers: {
			// 'Standard Protocol': 'wss://rpc.opportunity.standard.tech' // https://github.com/polkadot-js/apps/issues/7982
		}
	},
	{
		info: 'pangolin',
		text: 'Pangolin',
		providers: {
			'Darwinia Network': 'wss://pangolin-rpc.darwinia.network'
		}
	},
	{
		info: 'pangoro',
		text: 'Pangoro',
		providers: {
			'Darwinia Network': 'wss://pangoro-rpc.darwinia.network'
		}
	},
	{
		info: 'phala',
		text: 'Phala (PoC 5)',
		providers: {
			'Phala Network': 'wss://poc5.phala.network/ws'
		}
	},
	{
		info: 'phoenix',
		text: 'Phoenix Mashnet',
		providers: {
			// 'phoenix Protocol': 'wss://phoenix-ws.coinid.pro/' // https://github.com/polkadot-js/apps/issues/6181
		}
	},
	{
		info: 'pichiu',
		text: 'Pichiu Testnet',
		providers: {
			// 'Kylin Network': 'wss://westend.kylin-node.co.uk' // https://github.com/polkadot-js/apps/pull/6761
		}
	},
	{
		info: 'polkadex',
		text: 'Polkadex',
		providers: {
			'Polkadex Team': 'wss://blockchain.polkadex.trade'
		}
	},
	{
		info: 'polymesh',
		text: 'Polymesh Testnet',
		providers: {
			Polymath: 'wss://testnet-rpc.polymesh.live'
		}
	},
	{
		info: 'pontem',
		text: 'Pontem',
		providers: {
			// Pontem: 'wss://testnet.pontem.network/ws', // https://github.com/polkadot-js/apps/issues/7652
		}
	},
	{
		info: 'prism',
		text: 'Prism',
		providers: {
			// Prism: 'wss://testnet.psm.link' // https://github.com/polkadot-js/apps/issues/7340
		}
	},
	{
		info: 'realis',
		text: 'Realis.Network',
		providers: {
			// 'Realis.Network': 'wss://rpc.realis.network/' // https://github.com/polkadot-js/apps/issues/7982
		}
	},
	{
		info: 'riochain',
		text: 'RioChain',
		providers: {
			// 'RioChain Staging': 'wss://node.v1.staging.riochain.io' // https://github.com/polkadot-js/apps/issues/6181
		}
	},
	{
		info: 'sherpax',
		text: 'Sherpax Testnet',
		providers: {
			Chainx: 'wss://sherpax-testnet.chainx.org'
		}
	},
	{
		info: 'shibuya',
		text: 'Shibuya',
		providers: {
			StakeTechnologies: 'wss://rpc.shibuya.astar.network',
			Dwellir: 'wss://shibuya-rpc.dwellir.com'
		}
	},
	{
		info: 'skyekiwi',
		text: 'SkyeKiwi Testnet',
		providers: {
			SkyeKiwi: 'wss://staging.rpc.skye.kiwi'
		}
	},
	{
		info: 'soonsocial',
		text: 'Soonsocial',
		providers: {
			// DappForce: 'wss://testnet.subsocial.network' // https://github.com/polkadot-js/apps/issues/8315
		}
	},
	{
		info: 'sora-substrate',
		text: 'SORA-staging',
		providers: {
			'Soramitsu #1': 'wss://ws.framenode-1.s1.stg1.sora2.soramitsu.co.jp',
			'Soramitsu #2': 'wss://ws.framenode-2.s1.stg1.sora2.soramitsu.co.jp',
			'Soramitsu #3': 'wss://ws.framenode-3.s2.stg1.sora2.soramitsu.co.jp',
			'Soramitsu #4': 'wss://ws.framenode-4.s2.stg1.sora2.soramitsu.co.jp'
		}
	},
	{
		info: 'subdao',
		text: 'SubDAO Staging',
		providers: {
			// SubDAO: 'wss://alpha.subdao.org' // https://github.com/polkadot-js/apps/issues/7473
		}
	},
	{
		info: 'subgame',
		text: 'SubGame Staging',
		providers: {
			// SubGame: 'wss://staging.subgame.org' // https://github.com/polkadot-js/apps/issues/7982
		}
	},
	{
		info: 'subspace-farmnet',
		text: 'Subspace Farmnet',
		providers: {
			// 'Subspace Network': 'wss://farm-rpc.subspace.network/ws' // https://github.com/polkadot-js/apps/issues/8135
		}
	},
	{
		info: 'subspace-gemini-1',
		text: 'Subspace Gemini 1',
		providers: {
			Europe: 'wss://eu.gemini-1b.subspace.network/ws'
		}
	},
	{
		info: 'subspace-gemini-2a',
		text: 'Subspace Gemini 2a',
		providers: {
			Europe: 'wss://eu-0.gemini-2a.subspace.network/ws'
		}
	},
	{
		info: 'subspace',
		text: 'Subspace Testnet',
		providers: {
			// 'Subspace Network': 'wss://test-rpc.subspace.network' // https://github.com/polkadot-js/apps/issues/8598
		}
	},
	{
		info: 'tangle',
		text: 'Tangle Alpha',
		providers: {
			Webb: 'wss://tangle-archive.webb.tools'
		}
	},
	{
		info: 'ternoa-alphanet',
		text: 'Ternoa Alphanet',
		providers: {
			CapsuleCorp: 'wss://alphanet.ternoa.com'
		}
	},
	{
		info: 'ternoa-testnet',
		text: 'Ternoa Testnet',
		providers: {
			CapsuleCorp: 'wss://testnet.ternoa.com/'
		}
	},
	{
		info: 'thebifrost-testnet',
		text: 'The Bifrost Testnet',
		providers: {
			'Pilab #1': 'wss://public-01.testnet.thebifrost.io/ws',
			'Pilab #2': 'wss://public-02.testnet.thebifrost.io/ws'
		}
	},
	{
		info: 'laminar',
		text: 'Turbulence',
		providers: {
			// Laminar: 'wss://testnet-node-1.laminar-chain.laminar.one/ws' // https://github.com/polkadot-js/apps/issues/8060
		}
	},
	{
		info: 'uniarts',
		text: 'UniArts',
		providers: {
			// UniArts: 'wss://testnet.uniarts.network' // https://github.com/polkadot-js/apps/issues/8541
		}
	},
	{
		info: 'unique',
		text: 'Unique',
		providers: {
			// Unique: 'wss://testnet2.unique.network' // https://github.com/polkadot-js/apps/issues/7621
		}
	},
	{
		info: 'unitv',
		text: 'Unit Network',
		providers: {
			// 'Unit Network': 'wss://unitventures.io/' // https://github.com/polkadot-js/apps/issues/5684
		}
	},
	{
		info: 'vara',
		text: 'Vara',
		providers: {
			'Gear Tech': 'wss://rpc.vara-network.io'
		}
	},
	{
		info: 'vodka',
		text: 'Vodka',
		providers: {
			// Vodka: 'wss://vodka.rpc.neatcoin.org/ws' // https://github.com/polkadot-js/apps/issues/8175
		}
	},
	{
		info: 'web3games',
		text: 'Web3Games',
		providers: {
			'Web3Games Foundation': 'wss://devnet.web3games.org'
		}
	},
	{
		info: 'zCloak',
		text: 'zCloak-network',
		providers: {
			// 'zCloak Network': 'wss://test1.zcloak.network' // https://github.com/polkadot-js/apps/issues/7408
		}
	},
	{
		info: 'zeitgeist',
		text: 'Zeitgeist Battery Station',
		providers: {
			Zeitgeist: 'wss://bsr.zeitgeist.pm'
		}
	},
	{
		info: 'zero',
		text: 'Zero Alphaville',
		providers: {
			// ZERO: 'wss://alphaville.zero.io' // https://github.com/polkadot-js/apps/issues/8263
		}
	}
];

export const rococoParas = [
	{
		info: 'rococoAcurast',
		paraId: 4191,
		text: 'Acurast Testnet',
		providers: {
			Acurast: 'wss://ws.acurast-rococo.diamond.papers.tech'
		}
	},
	{
		info: 'rococoAmplitude',
		paraId: 2124,
		text: 'Amplitude testnet (Foucoco)',
		providers: {
			PendulumChain: 'wss://rpc-foucoco.pendulumchain.tech'
		}
	},
	{
		info: 'arctic',
		paraId: 3015,
		text: 'Arctic',
		providers: {
			Arctic: 'wss://arctic-rococo-rpc.icenetwork.io'
		}
	},
	{
		info: 'rococoAventus',
		homepage: 'https://www.aventus.io/',
		paraId: 2056,
		text: 'Aventus',
		providers: {}
	},
	{
		info: 'rococoBajun',
		paraId: 2119,
		text: 'Bajun Network',
		providers: {
			AjunaNetwork: 'wss://rpc-rococo.bajun.network'
		}
	},
	{
		info: 'rococoBasilisk',
		paraId: 2090,
		text: 'Basilisk',
		providers: {
			'Galactic Council': 'wss://rococo-basilisk-rpc.hydration.dev'
		}
	},
	{
		info: 'rococoBifrost',
		paraId: 2030,
		text: 'Bifrost',
		providers: {
			Liebi: 'wss://bifrost-rpc.rococo.liebi.com/ws'
		}
	},
	{
		info: 'rococoBitgreen',
		paraId: 20048,
		text: 'Bitgreen',
		providers: {
			Bitgreen: 'wss://staging.bitgreen.org'
		}
	},
	{
		info: 'rococoCatalyst',
		paraId: 2031,
		text: 'Catalyst',
		providers: {
			Centrifuge: 'wss://fullnode.catalyst.cntrfg.com'
		}
	},
	{
		info: 'rococoConfti',
		paraId: 4094,
		text: 'Confti',
		providers: {
			// Confti: 'wss://ws.confti.club' // https://github.com/polkadot-js/apps/issues/8036
		}
	},
	{
		info: 'rococoCrust',
		paraId: 2012,
		text: 'Crust Testnet',
		providers: {
			Crust: 'wss://rococo-csm.crustcode.com/'
		}
	},
	{
		info: 'rococoDali',
		paraId: 2087,
		text: 'Dali',
		providers: {
			// Composable: 'wss://rpc.composablefinance.ninja' // https://github.com/polkadot-js/apps/issues/8867
		}
	},
	{
		info: 'rococoDolphin',
		paraId: 2084,
		text: 'Dolphin',
		providers: {
			'Manta Network': 'wss://ws.rococo.dolphin.engineering'
		}
	},
	{
		info: 'rococoEthos',
		paraId: 2095,
		text: 'Ethos',
		providers: {
			Jur: 'wss://ethos.jur.io'
		}
	},
	{
		info: 'rococoFrequency',
		paraId: 4044,
		text: 'Frequency',
		providers: {
			Frequency: 'wss://rpc.rococo.frequency.xyz'
		}
	},
	{
		info: 'rococoGenshiro',
		paraId: 2024,
		text: 'Genshiro Testnet',
		providers: {
			Equilibrium: 'wss://parachain-testnet.equilab.io/rococo/collator/node1/wss'
		}
	},
	{
		info: 'helixstreet',
		paraId: 3025,
		text: 'Helixstreet',
		providers: {
			Helixstreet: 'wss://rpc-rococo.helixstreet.io'
		}
	},
	{
		info: 'rococoHydraDX',
		paraId: 2034,
		text: 'HydraDX',
		providers: {
			'Galactic Council': 'wss://rococo-hydradx-rpc.hydration.dev'
		}
	},
	{
		info: 'rococoImbue',
		paraId: 2121,
		text: 'Imbue Network',
		providers: {
			'Imbue Network': 'wss://rococo.imbue.network'
		}
	},
	{
		info: 'rococoIntegritee',
		paraId: 3002,
		text: 'Integritee Network',
		providers: {
			Integritee: 'wss://rococo.api.integritee.network'
		}
	},
	{
		info: 'rococoKabocha',
		paraId: 2113,
		text: 'Kabocha (kabsoup)',
		providers: {
			JelliedOwl: 'wss://kabsoup1.jelliedowl.com'
		}
	},
	{
		info: 'rococoLitentry',
		paraId: 2106,
		text: 'Litentry',
		providers: {
			Litentry: 'wss://rpc.rococo-parachain-sg.litentry.io'
		}
	},
	{
		info: 'rococoMangata',
		paraId: 2110,
		text: 'Mangata',
		providers: {
			Mangata: 'wss://roccoco-testnet-collator-01.mangatafinance.cloud'
		}
	},
	{
		info: 'rococoMd5',
		paraId: 2089,
		text: 'MD5 Network',
		providers: {
			'Hashed Systems': 'wss://c1.md5.network'
		}
	},
	{
		info: 'rococoMoonsama',
		paraId: 2055,
		text: 'Moonsama',
		providers: {
			// Moonsama: 'wss://moonsama-testnet-rpc.moonsama.com' // https://github.com/polkadot-js/apps/issues/7526
		}
	},
	{
		info: 'rococoNodle',
		paraId: 2026,
		text: 'Nodle',
		providers: {
			OnFinality: 'wss://nodle-paradis.api.onfinality.io/public-ws'
		}
	},
	{
		info: 'chainoli',
		homepage: 'https://www.my-oli.com/en/',
		paraId: 4023,
		text: 'OLI',
		providers: {}
	},
	{
		info: 'rococoOriginTrailParachain',
		homepage: 'https://parachain.origintrail.io',
		paraId: 2043,
		text: 'OriginTrail Testnet',
		providers: {
			TraceLabs: 'wss://parachain-testnet-rpc.origin-trail.network/'
		}
	},
	{
		info: 'rococoPangolin',
		paraId: 2105,
		text: 'Pangolin',
		providers: {
			'Darwinia Network': 'wss://pangolin-parachain-rpc.darwinia.network'
		}
	},
	{
		info: 'rococoKilt',
		paraId: 2086,
		text: 'RILT',
		providers: {
			'KILT Protocol': 'wss://rococo.kilt.io'
		}
	},
	{
		info: 'robonomics',
		homepage: 'http://robonomics.network/',
		paraId: 2048,
		text: 'Robonomics',
		providers: {
			Airalab: 'wss://rococo.rpc.robonomics.network'
		}
	},
	{
		info: 'rocfinity',
		paraId: 2021,
		text: 'Rocfinity',
		providers: {
			Efinity: 'wss://rpc.rococo.efinity.io'
		}
	},
	{
		info: 'snowbridge',
		paraId: 3016,
		text: 'Snowbridge',
		providers: {
			// Snowfork: 'wss://rococo-rpc.snowbridge.network' // https://github.com/polkadot-js/apps/issues/8723
		}
	},
	{
		info: 'rococoSubsocial',
		paraId: 2100,
		text: 'SoonsocialX',
		providers: {
			DappForce: 'wss://rco-para.subsocial.network'
		}
	},
	{
		info: 'rococoSora',
		paraId: 2011,
		text: 'SORA',
		providers: {
			Soramitsu: 'wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp'
		}
	},
	{
		info: 'rococoSpreehafen',
		paraId: 2116,
		text: 'Spreehafen',
		providers: {
			DataHighway: 'wss://spreehafen.datahighway.com'
		}
	},
	{
		info: 'stagex',
		homepage: 'https://totemaccounting.com/',
		paraId: 2007,
		text: 'Stagex',
		providers: {
			Totem: 'wss://s-ui.kapex.network'
		}
	},
	{
		info: 'rococoSubzero',
		paraId: 4040,
		text: 'Subzero',
		providers: {
			ZERO: 'wss://staging.para.sub.zero.io'
		}
	},
	{
		info: 't0rn',
		paraId: 3333,
		text: 't0rn',
		providers: {
			t3rn: 'wss://ws.t0rn.io'
		}
	},
	{
		info: 'tangle',
		paraId: 4006,
		text: 'Tangle',
		providers: {
			Webb: 'wss://arana-alpha-1.webb.tools'
		}
	},
	{
		info: 'rococoTinkernet',
		paraId: 2125,
		text: 'Tinkernet',
		providers: {
			// 'InvArch Team': 'wss://rococo.invarch.network' // https://github.com/polkadot-js/apps/issues/8266
		}
	},
	{
		info: 'rococoTuring',
		paraId: 2114,
		text: 'Turing Network (Staging)',
		providers: {
			OAK: 'wss://rpc.turing-staging.oak.tech'
		}
	},
	{
		info: 'rococoUnitNetwork',
		paraId: 4168,
		text: 'Unit Network',
		providers: {
			UnitNetwork: 'wss://www.unitnode3.info:443'
		}
	},
	{
		info: 'rococoVirto',
		paraId: 3003,
		text: 'Virto',
		providers: {
			// VirtoNetwork: 'wss://rococo.virtonetwork.xyz' // https://github.com/polkadot-js/apps/issues/8024
		}
	},
	{
		info: 'rococoWatr',
		paraId: 2058,
		text: 'Watr Network',
		providers: {
			Watr: 'wss://rpc.dev.watr.org'
		}
	},
	{
		info: 'rococoZeitgeist',
		paraId: 2101,
		text: 'Zeitgeist Battery Station',
		providers: {
			Zeitgeist: 'wss://roc.zeitgeist.pm'
		}
	}
];

export const rococoCommonParas = [
	{
		info: 'rococoStatemint',
		paraId: 1000,
		text: 'Rockmine',
		providers: {
			Parity: 'wss://rococo-rockmine-rpc.polkadot.io'
		},
		teleport: [-1]
	},
	{
		info: 'rococoContracts',
		paraId: 1002,
		text: 'Contracts',
		providers: {
			Parity: 'wss://rococo-contracts-rpc.polkadot.io'
		},
		teleport: [-1]
	},
	{
		info: 'encointer',
		homepage: 'https://encointer.org/',
		paraId: 1003,
		text: 'Encointer Lietaer',
		providers: {
			'Encointer Association': 'wss://rococo.api.encointer.org'
		},
		teleport: [-1]
	},
	{
		info: 'rococoBridgehub',
		paraId: 1013,
		text: 'Bridgehub',
		providers: {
			Parity: 'wss://rococo-bridge-hub-rpc.polkadot.io'
		},
		teleport: [-1]
	}
];

export const rococoRelay = [
	{
		dnslink: 'rococo',
		info: 'rococo',
		text: 'Rococo',
		providers: {
			Parity: 'wss://rococo-rpc.polkadot.io',
			// OnFinality: 'wss://rococo.api.onfinality.io/public-ws', // After reset, node misses host functions
			// Pinknode: 'wss://rpc.pinknode.io/rococo/explorer' // After reset, syncs to old chain
			// 'Ares Protocol': 'wss://rococo.aresprotocol.com' // https://github.com/polkadot-js/apps/issues/5767
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/rococo' // NOTE: Keep last
		}
	}
];

export const westendParas = [
	{
		info: 'charcoal',
		paraId: 2086,
		text: 'Charcoal',
		providers: {
			// Centrifuge: 'wss://fullnode-collator.charcoal.centrifuge.io' // https://github.com/polkadot-js/apps/issues/8219
		}
	},
	{
		info: 'integritee',
		paraId: 2081,
		text: 'Integritee Network',
		providers: {
			Integritee: 'wss://teerw1.integritee.network'
		}
	},
	{
		info: 'interlay',
		paraId: 2094,
		text: 'Interlay',
		providers: {
			// Interlay: 'wss://api-westend.interlay.io/parachain' // https://github.com/polkadot-js/apps/issues/6261
		}
	},
	{
		info: 'moonshadow',
		paraId: 2002,
		text: 'Moonshadow',
		providers: {
			// PureStake: 'wss://wss.moonshadow.testnet.moonbeam.network' // https://github.com/polkadot-js/apps/issues/6181
		}
	},
	{
		info: 'pangoro',
		homepage: 'https://darwinia.network/',
		paraId: 2102,
		text: 'Pangoro',
		providers: {
			// Darwinia: 'wss://pangoro-parachain-rpc.darwinia.network' // https://github.com/polkadot-js/apps/issues/6530
		}
	},
	{
		info: 'westendPichiu',
		homepage: 'https://kylin.network/',
		paraId: 2112,
		text: 'Pichiu',
		providers: {
			// 'Kylin Network': 'wss://westend.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/8710
		}
	},
	{
		info: 'westendStandard',
		paraId: 2094,
		text: 'Standard ',
		providers: {
			// 'Standard Protocol': 'wss://rpc.westend.standard.tech' // https://github.com/polkadot-js/apps/issues/8525
		}
	},
	{
		info: 'karura',
		paraId: 2005,
		text: 'Wendala',
		providers: {
			// 'Acala Foundation': 'wss://karura-westend-rpc.aca-staging.network' // https://github.com/polkadot-js/apps/issues/5830
		}
	},
	{
		info: 'whala',
		paraId: 2013,
		text: 'Whala',
		providers: {
			// Phala: 'wss://whala.phala.network/ws' // https://github.com/polkadot-js/apps/issues/6181
		}
	},
	{
		info: 'kilt',
		homepage: 'https://www.kilt.io/',
		paraId: 2085,
		text: 'WILT',
		providers: {
			'KILT Protocol': 'wss://westend.kilt.io:9977'
		}
	}
];

export const westendCommonParas = [
	{
		info: 'westmint',
		paraId: 1000,
		text: 'Westmint',
		providers: {
			Parity: 'wss://westmint-rpc.polkadot.io',
			Dwellir: 'wss://westmint-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://westmint-rpc-tn.dwellir.com'
		},
		teleport: [-1]
	},
	{
		info: 'westendCollectives',
		paraId: 1001,
		text: 'Collectives',
		providers: {
			Parity: 'wss://westend-collectives-rpc.polkadot.io'
		},
		teleport: [-1]
	},
	{
		info: 'westendBridgeHub',
		paraId: 1002,
		text: 'BridgeHub',
		providers: {
			Parity: 'wss://westend-bridge-hub-rpc.polkadot.io'
		}
	}
];

export const westendRelay = [
	{
		dnslink: 'westend',
		info: 'westend',
		text: 'Westend',
		providers: {
			Parity: 'wss://westend-rpc.polkadot.io',
			OnFinality: 'wss://westend.api.onfinality.io/public-ws',
			Pinknode: 'wss://rpc.pinknode.io/westend/explorer',
			Dwellir: 'wss://westend-rpc.dwellir.com',
			'Dwellir Tunisia': 'wss://westend-rpc-tn.dwellir.com',
			'Dotters Net': 'wss://rpc.dotters.network/westend',
			'IBP Network': 'wss://rpc.ibp.network/westend',
			// 'NodeFactory(Vedran)': 'wss://westend.vedran.nodefactory.io/ws', // https://github.com/polkadot-js/apps/issues/5580
			// NOTE: Keep this as the last entry, nothing after it
			'light client': 'light://substrate-connect/westend' // NOTE: Keep last
		}
	}
];

export const allChains = {
	production,
	polkadotRelay,
	polkadotCommonParas,
	polkadotParas,
	kusamaRelay,
	kusamaCommonParas,
	kusamaParas,
	testChains,
	rococoRelay,
	rococoParas,
	rococoCommonParas,
	westendRelay,
	westendParas,
	westendCommonParas
};

export const polkadotChains = {
	production,
	polkadotRelay,
	polkadotCommonParas,
	polkadotParas
};

export const kusamaChains = {
	kusamaRelay,
	kusamaCommonParas,
	kusamaParas
};

export const rococoChains = {
	rococoRelay,
	rococoParas,
	rococoCommonParas
};

export const westendChains = {
	westendRelay,
	westendParas,
	westendCommonParas
};
