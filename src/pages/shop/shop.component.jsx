import React from 'react';
import '../../components/collection-preview/collection-preview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor() {
        super() 
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollections }) => (
                    <CollectionPreview {...otherCollections}/>
                )) 
            }
        </div>)
    }
}
export default ShopPage;