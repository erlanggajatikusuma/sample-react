import React, { Component } from 'react';
import YoutubeComp from '../../../component/Youtube/YouTubeComponent';

class YoutubeCompPages extends Component {
    render() {
        return (
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp
                    time="2.12"
                    title="Tutorial React JS - Bagian 1"
                    desc="2x ditonton 2 hari yang lalu"
                />
                <YoutubeComp
                    time="8.02"
                    title="Tutorial React JS - Bagian 2"
                    desc="200x ditonton 10 hari yang lalu"
                />
                <YoutubeComp
                    time="5.02"
                    title="Tutorial React JS - Bagian 3"
                    desc="500x ditonton 4 hari yang lalu"
                />
                <YoutubeComp />
            </div>
        )
    }
}

export default YoutubeCompPages;
