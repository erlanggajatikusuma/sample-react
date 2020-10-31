import React, { Component } from 'react'
import Counter from './Counter'

export default class CardProduct extends Component {
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt=""/>
                    </div>
                    <div className="product-title">Daging Ayam berbumbu</div>
                    <div className="product-price">Rp. 410.000</div>
                    <Counter />
                </div>
        )
    }
}
