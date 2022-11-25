import './SeachBar.css'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({placeHolder}) => {
    return(
        <div className="search-bar">
            <SearchIcon className='search-icon'/>
            <input type='text' placeholder={placeHolder}/>
        </div>
    )
}

export default SearchBar