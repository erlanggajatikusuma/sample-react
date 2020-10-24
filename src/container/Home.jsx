import React, { Component } from 'react'
import BlogPost from '../container/BlogPost/BlogPost'
// import YouTubeComponent from '../component/youtube/YouTubeComponent'
// import Product from './product/Product'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <YouTubeComponent 
                    time="7.12" 
                    title="Tutorial React Js Bagian 1"
                    desc="2x ditonton, 1 hari yang lalu" />
                <YouTubeComponent 
                    time="9.00" 
                    title="Tutorial React Js Bagian 2"
                    desc="100x ditonton, 3 hari yang lalu" />
                <YouTubeComponent 
                    time="10.00"
                    title="Tutorial React Js Bagian 3"
                    desc="300x ditonton, 7 hari yang lalu" />
                <YouTubeComponent 
                    time="15.12"
                    title="Tutorial React Js Bagian 4"
                    desc="999x ditonton, 9 hari yang lalu" />
                <YouTubeComponent /> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                <p>BlogPost</p>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}
