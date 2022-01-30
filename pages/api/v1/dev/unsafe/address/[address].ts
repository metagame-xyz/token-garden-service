import type { NextApiRequest, NextApiResponse } from 'next';

import { defaultMainnetProvider, getUserName } from '@utils';
import { formatNewMetadata, getNFTData, Metadata, NFTs } from '@utils/metadata';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const { address } = req.query;
    // const addressString: string = Array.isArray(address) ? address[0] : address;
    // /****************/
    // /* GET NFT DATA */
    // /****************/
    // let nfts: NFTs, dateStr: string;
    // try {
    //     [nfts, dateStr] = await getNFTData(addressString, 'homestead');
    // } catch (error) {
    //     // console.log(error);
    // }
    // // this will log an error if it fails but not stop the rest of this function
    // const userName = await getUserName(defaultMainnetProvider, addressString);
    // let metadata: Metadata;
    // try {
    //     metadata = await formatNewMetadata(addressString, nfts, dateStr, userName, '1');
    // } catch (error) {
    //     // console.log(error);
    // }
    // res.send(metadata);
    res.send({});
}
