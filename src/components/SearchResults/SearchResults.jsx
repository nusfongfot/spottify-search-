import "./searchRe.css"
import TrackList from "../TrackList/TrackList"
function SearchResults({ handleAddtoLists, searchTracks }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList handleAddtoLists={handleAddtoLists} searchTracks={searchTracks} />
    </div>
  )
}

export default SearchResults
