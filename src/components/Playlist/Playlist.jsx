import { useState } from "react"
import "./Playlist.css"

function Playlist({ playlists, setPlaylists }) {
  const [titlePlay, setTitlePlay] = useState('New Playlist')

  const handleClickRemove = (id) => {
    const remove = playlists.filter((item) => {
      return item.id !== id
    })
    setPlaylists(remove)
  }

  const saveToSpotify = () => {
    setPlaylists([])
    setTitlePlay('New Playlist')
  }
  
  return (
    <div className="Playlist">
      <input type="text" value={titlePlay}  onChange={(e) => setTitlePlay(e.target.value)} />
      {playlists.map((item) => {
        return (
          <div key={item.id} className="Play-Track">
            <div className="Track-List">
              <h3>{item.title}</h3>
              <p>{item.album}</p>
            </div>
            <button
              className="Track-action"
              onClick={() => handleClickRemove(item.id)}
            >
              -
            </button>
          </div>
        )
      })}

      <button className="Playlist-save" onClick={() => saveToSpotify()}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

export default Playlist
