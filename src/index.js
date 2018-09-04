import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: process.env.API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }
  // takes the search term and creates a new YTSsearch, takes one arg, the search string, callback function sets state

  render() {
    const videoSearch = _.debounce(term =>  { this.videoSearch(term) }, 500)
    // debounce is a lodash (hence the underscore) library options that throttles how often a new function is called: it returns a new function that can only be called every 500 ms (second argument) - can call it multiple times, but it won't call until 500 ms
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* italicized props are passed down, and they are set equal to data available in/to the current component */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            this.setState({selectedVideo})
          } //updates app state with the new state, triggered by the user clicking the <li> in video list item
          videos={this.state.videos} />
      </div>
    )
  }
}

// take the component and put it in the DOM:
ReactDOM.render(<App />, document.querySelector('.container')) //<--second arg is an existing html node to render the component to/in, usually a div with an identifier like an id or class, so they end up being a child of the intiial div or root element
