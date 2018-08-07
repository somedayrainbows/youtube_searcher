import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = process.env.API_KEY

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }
  // ^^ in the constructor, we still want to do a default initial search for all new instances of the App

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }
  // takes the search term and creates a new YTSsearch, takes one arg, the search string

  render() {
    const videoSearch = _.debounce((term) =>  { this.videoSearch(term) }, 500)
    // debounce returns a new function that can only be called every 300 ms - can call it multiple times, but it won't call until 300 ms
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

// take the component and put it in the DOM:
ReactDOM.render(<App />, document.querySelector('.container')) //<--second arg is an existing html node to render the component to/in, usually a div with an identifier like an id or class, so they end up being a child of the intiial div or root element
