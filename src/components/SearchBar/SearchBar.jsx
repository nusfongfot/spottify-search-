import { useEffect, useState } from "react"
import "./search.css"

function SearchBar({ searchSpotify }) {
  const intialSearch = () => String(window.localStorage.getItem("search") || "")
  const [search, setSearch] = useState(intialSearch)
  
  const handleSearch = async () => {
    try {
      await searchSpotify(search)
    } catch (error) {
      const clientId = "7e1868e3da984cf4842f5bbaf66854b6"
      const currentUrl = window.location.href
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`
      console.log(error)
    }
    setSearch("")
  }

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handleSearch()
    }
  }

  useEffect(() => {
    window.localStorage.setItem("search", search)
  }, [search])

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter A Song, Album, or Artist"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  )
}

export default SearchBar
