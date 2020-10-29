import React, { Component } from 'react'

export default class CardProduct extends Component {
    state = {
        order: 4
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
        
    }
    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt=""/>
                    </div>
                    <div className="product-title">Daging Ayam berbumbu</div>
                    <div className="product-price">Rp. 410.000</div>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus} >-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus} >+</button>
                    </div>
                </div>
        )
    }
}
