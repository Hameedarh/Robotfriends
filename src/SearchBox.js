import './SearchBox.css';

function SearchBox(props){
    return(
        <div className='pa-4' class="ser">
            <h1>Robofriends</h1>
            <input onChange={props.addSearchInput} className='ba' type= "text" placeholder='Search...'/>
        </div>
    );
}
export default SearchBox
