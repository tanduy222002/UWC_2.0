import './SeachBar.css'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({placeHolder,setName}) => {
    return(
        <div className="search-bar">
            <SearchIcon className='search-icon'/>
            <input type='text' placeholder={placeHolder}
            onChange={(e)=>{setName(e.target.value)}}/>
        </div>
    )
}

export default SearchBar