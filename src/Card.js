import './Card.css';

function Card(props){
    // console.log(props)
    return(
        // <div className='con'>
        //     <div className='car'>
        //         <img src="" alt="..."/>
        //         <h4>John Doe</h4>
        //         <p>Johndoe</p>
        //         <p>Johndoe@gmail.com</p>
        //     </div>
        // </div>  
        <div className='car'>
                <img src={`https://robohash.org/${props.name}`} alt="..."/>
                <h4>{props.name}</h4>
                <p>{props.username}</p>
                <p>{props.email}</p>
        </div>
    );
}
export default Card;