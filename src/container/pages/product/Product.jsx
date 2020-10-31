import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../../../context/context'
import CardProduct from './cardProduct/CardProduct'
import './Product.css'
// import {connect} from 'react-redux';

class product extends Component {
    // state = {
    //     order: 4
    // }
    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
        // return (
        //     <Fragment>
        //         <div className="header">
        //             <div className="logo">
        //                 <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
        //             </div>
        //             <div className="troley">
        //                 <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
        //                 {/* <div className="count">{this.props.order}</div> */}
        //                 <div className="count">{0}</div>
        //             </div>
        //         </div>
        //         <CardProduct />
        //     </Fragment>
        // )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(product);
export default GlobalConsumer(product);