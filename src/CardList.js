// import users from './users.json';
import Card from './Card';

function CardList (props){
    console.log(props)
 return(
    <div className="card-wrapper">
          {
            props.users.map((item) =>(
              <Card 
              key= {item.id.toString()}
              name={item.name}
              username= {item.username}
              email={item.email}
              />
            ))
          }
    </div>
 );
}
export default CardList;



// import users from './users.json';
// import Card from './Card';

// function CardList (){
//  return(
//     <div className="card-wrapper">
//           {
//             users.map((item) =>(
//               <Card 
//               key= {item.id.toString()}
//               name={item.name}
//               username= {item.username}
//               email={item.email}
//               />
//             ))
//           }
//         </div>
//  );
// }
// export default CardList;
