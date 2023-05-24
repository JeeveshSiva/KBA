/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

async function getCollectionName(ctx) {
    const collectionName = 'CollectionOrder';
    return collectionName;
}

class OrderContract extends Contract {
    async orderExists(ctx, orderId) {
        const collectionName = await getCollectionName(ctx);
        const data = await ctx.stub.getPrivateDataHash(collectionName, orderId);
        return !!data && data.length > 0;
    }

    async createOrder(ctx, orderId) {
        const mspID = ctx.clientIdentity.getMSPID();
        if (mspID === 'dealer-auto-com') {
            const exists = await this.orderExists(ctx, orderId);
            if (exists) {
                throw new Error(`The asset order ${orderId} already exists`);
            }
            const orderAsset = {};
            const transientData = ctx.stub.getTransient();
            if (
                transientData.size === 0 ||
                !transientData.has('make') ||
                !transientData.has('make') ||
                !transientData.has('color') ||
                !transientData.has('dealerName')
            ) {
                throw new Error(
                    'The privateValue key was not specified in transient data. Please try again.'
                );
            }
            orderAsset.make = transientData.get('make').toString();
            orderAsset.model = transientData.get('model').toString();
            orderAsset.color = transientData.get('color').toString();
            orderAsset.dealerName = transientData.get('dealerName').toString();
            orderAsset.assetType = 'order';

            const collectionName = await getCollectionName(ctx);
            await ctx.stub.putPrivateData(
                collectionName,
                orderId,
                Buffer.from(JSON.stringify(orderAsset))
            );
        } else {
            return `Under following MSP: ${mspID} cannot able to perform this action`;
        }
    }

    async readOrder(ctx, orderId) {
        const exists = await this.orderExists(ctx, orderId);
        if (!exists) {
            throw new Error(`The asset order ${orderId} does not exist`);
        }
        let privateDataString;
        const collectionName = await getCollectionName(ctx);
        const privateData = await ctx.stub.getPrivateData(collectionName, orderId);
        privateDataString = JSON.parse(privateData.toString());
        return privateDataString;
    }

    async deleteOrder(ctx, orderId) {
        const mspID = ctx.clientIdentity.getMSPID();
        if (mspID === 'dealer-auto-com' || mspID === 'manufacturer-auto-com') {
            const exists = await this.orderExists(ctx, orderId);
            if (!exists) {
                throw new Error(`The asset order ${orderId} does not exist`);
            }
            const collectionName = await getCollectionName(ctx);
            await ctx.stub.deletePrivateData(collectionName, orderId);
        } else {
            return `Under following MSP: ${mspID} cannot able to perform this action`;
        }
    }

    async queryAllOrders(ctx) {
        const queryString = {
            selector: {
                assetType: 'order'
            }
        }
        const collectionName = await getCollectionName(ctx)
        let resultIterator = await ctx.stub.getPrivateDataQueryResult(collectionName, JSON.stringify(queryString))
        let result = await this.getAllResults(resultIterator.iterator)
        return JSON.stringify(result)
    }

    async getOrdersByRange(ctx, startkey, endkey) {
        const collectionName = await getCollectionName(ctx)
        let resultIterator = await ctx.stub.getPrivateDataByRange(collectionName, startkey, endkey)
        let result = await this.getAllResults(resultIterator.iterator)
        return JSON.stringify(result)
    }

    async getAllResults(iterator) {
        let allResult = []
        for (let res = await iterator.next(); !res.done; res = await iterator.next()) {
            if (res.value && res.value.value.toString()) {
                let jsonRes = {}
                jsonRes.Key = res.value.key
                jsonRes.Record = JSON.parse(res.value.value.toString())
                allResult.push(jsonRes)
            }
        }
        await iterator.close()
        return allResult
    }

    async queryAllOrdersWithQueryString(ctx, queryString) {

        const collectionName = await getCollectionName(ctx);
        let resultIterator = await ctx.stub.getPrivateDataQueryResult(collectionName, JSON.stringify(queryString));
        let result = await this.getAllResults(resultIterator.iterator);
        return JSON.stringify(result);

    }
}

module.exports = OrderContract;
