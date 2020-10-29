// Libraries
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// Pages
import BlogPost from '../pages/BlogPost/BlogPost'
import DetailPost from '../pages/BlogPost/Detail-Post/DetailPost'
import Product from '../pages/product/Product'
import YoutubeCompPages from '../pages/YoutubeCompPage/YoutubeComp'
// Styling
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/youtube-component">Youtube</Link>
                </div>
                <Route path="/" exact component={BlogPost} />
                <Route path="/detail-post/:postID" component={DetailPost} />
                <Route path="/product" component={Product} />
                <Route path="/youtube-component" component={YoutubeCompPages} />
            </Router>
        )
    }
}
