// Libraries
import React, { Component,Fragment, createContext } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import GlobalProvider from '../../context/context'
// Pages
import BlogPost from '../pages/BlogPost/BlogPost'
import DetailPost from '../pages/BlogPost/Detail-Post/DetailPost'
import Hooks from '../pages/Hooks/Hooks'
import Product from '../pages/product/Product'
import YoutubeCompPages from '../pages/YoutubeCompPage/YoutubeComp'
// Styling
import './home.css'


class Home extends Component {
    render() {
        return (
            <Router>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Blog Post</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/youtube-component">Youtube</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/youtube-component" component={YoutubeCompPages} />
                        <Route path="/hooks" component={Hooks} />
                    </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);
