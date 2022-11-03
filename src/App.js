import React, { useState } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const App = () => {
  const [news, setnews] = useState([])

  function fetchnews() {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=ba3637ea1dbd4836b55c97b10309e5c7")
      .then((resp) => {
        console.log(resp);
        setnews(resp.data.articles)
      })
    console.log("clicked")


  }
  return (
    <>
      <h1>Today news</h1>

      <Button  onClick={fetchnews} style={{marginLeft:"100px", marginBottom:"50px"}}>Click for News</Button>{' '}
      <div className='newsflex'>

      {
        news.map((value) => {
          return (
            <div className='col-4'>
              <Card style={{width:"300px",height:"520px",margin:'10px'}}>
                <Card.Img variant="top" src={value.urlToImage}  />

                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    {value.description  }
                  
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

          )


        })

      }
      </div>


    </>)
}

export default App