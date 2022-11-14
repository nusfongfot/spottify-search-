import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import { useState, useEffect } from "react"
import { search } from "../../utils/Spotify"

function App() {
  const [spotifyToken, setSpotifyToken] = useState(null)
  const [searchTracks, setSearchTracks] = useState([])
  const [playlists, setPlaylists] = useState([])

  const searchSpotify = async (searchTerms) => {
    const results = await search(searchTerms, spotifyToken)
    setSearchTracks(results)
  }

  const handleAddtoLists = (item) => {
    const isAdded = playlists.includes(item)
    if (isAdded) return
    setPlaylists([...playlists, item])
  }

  useEffect(() => {
    //เข้าถึงตัว token ได้เลย  ต้องใช้ token ในการเข้าถึง
    const getToken = window.location.hash.split('&')[0].substring(14)
    setSpotifyToken(getToken)
  }, [])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing <span className="highlight">Nus</span>
      </h1>

      <div className="App">
        <SearchBar searchSpotify={searchSpotify} />
        <div className="App-playlist">
          <SearchResults
            handleAddtoLists={handleAddtoLists}
            searchTracks={searchTracks}
          />
          <Playlist playlists={playlists} setPlaylists={setPlaylists} />
        </div>
      </div>
    </div>
  )
}

export default App
