import "./TrackList.css"

function TrackList({ handleAddtoLists, searchTracks }) {
  return (
    <div>
      {searchTracks.length === 0 ? (<h1>Try Search</h1>) : searchTracks.map((item) => {
        return (
          <div key={item.id} className="Track">
            <div className="Track-information">
              <h3>{item.title}</h3>
              <p>{item.artist} | {item.album}</p>
            </div>
            <button
              className="Track-action"
              onClick={() => handleAddtoLists(item)}
            >
              +
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default TrackList
