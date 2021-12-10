import { create, urlSource } from 'ipfs-http-client';

import { INFURA_IPFS_PROJECT_ID, INFURA_IPFS_SECRET } from '@utils/constants';

const auth =
    'Basic ' + Buffer.from(INFURA_IPFS_PROJECT_ID + ':' + INFURA_IPFS_SECRET).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const gatewayURL = 'https://ipfs.infura.io/ipfs/';
const ipfsScheme = 'ipfs://';

export const addToIPFS = async (url: string): Promise<string> => {
    const file = await client.add(urlSource(url).content);
    return ipfsScheme + file.path;
};