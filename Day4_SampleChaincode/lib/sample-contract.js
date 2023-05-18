'use strict'

const { Contract } = require('fabric-contract-api');

class SampleContract extends Contract {
    async createAsset(ctx, assetId, name, qty) {
        const asset = {
            name,
            quantity: qty,
            owner: 'farmer'
        }

        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(assetId, buffer);

    }

    async readAsset(ctx, assetId) {
        const buffer = await ctx.stub.getState(assetId);
        const asset = JSON.parse(buffer);
        return asset;
    }

}

module.exports = SampleContract