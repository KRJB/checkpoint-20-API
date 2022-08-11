import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import './App.css'
function App() {
  const [user, setUser] = useState([])
  useEffect(() =>{
      axios.get('https://jsonplaceholder.typicode.com/users')

          .then(result => {
              setUser(result.data)
          })
          .catch(error => console.log('error is ', error))}, [])

  return (
    <div>
<Carousel>

{
    user.map(el =>
        <Carousel.Item key={el.id}>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt={el.name}
            />
            <Carousel.Caption className="caroussel_caption__styling">
                <div className="list__styling">
                    <p><span className="prefix_styling">Name : </span>{el.name}</p>
                    <p><span className="prefix_styling">Username : </span>{el.username}</p>
                    <p><span className="prefix_styling">Email : </span>{el.email}</p>
                    <p><span className="prefix_styling">Street : </span>{el.address.street}</p>
                    <p><span className="prefix_styling">Suite : </span>{el.address.suite}</p>
                    <p><span className="prefix_styling">City : </span>{el.address.city}</p>
                </div>

            </Carousel.Caption>

         </Carousel.Item>
        )
}

</Carousel>
   </div>
  );
}

export default App;
