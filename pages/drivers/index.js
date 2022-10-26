import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useEffect, useState } from 'react';

import Header from "../components/Header"

//SERVER SIDE RENDERING 
//CANNOT BE USED ALONG SIDE STATIC SIDE RENDERING

// export async function getServerSideProps() {
//     let response = await fetch("http://ergast.com/api/f1/2022/drivers.json")
//     let data = await response.json()
//     return {
//       props:{ drivers: data.MRData.DriverTable.Drivers }// will be passed to the page component as props
//     }
// }

//STATIC SIDE RENDERING
export async function getServerSideProps() {
  let response = await fetch("https://ergast.com/api/f1/2022/drivers.json")
    let data = await response.json()
    return {
      props:{ drivers: data.MRData.DriverTable.Drivers }// will be passed to the page component as props
    }
}

export default function Home({drivers}) {
  const [driver, setDriver] = useState(drivers)
  const [yearsArray, setYears] = useState([])
  
  useEffect( () => {
    function generateArrayOfYears() {
      var max = new Date().getFullYear()
      var min = max - 69
      var years = []
    
      for (var i = max; i >= min; i--) {
        years.push(i)
      }
      return years
    }
    setYears(generateArrayOfYears());
  }, [])

  // CLIENT SIDE RENDERING
  // useEffect( () => {
  //     async function  getF1Driver(){
  //       let response = await fetch("http://ergast.com/api/f1/2022/drivers.json")
  //       let data = await response.json()
  //       setDriver1(data.MRData.DriverTable.Drivers)
  //       console.log(data)
  //       console.log(data.MRData.DriverTable.Drivers)
  //     }

  //     getF1Driver();
  // }, [])

  return (
    <div className="container">
      <Head>
        <title>Keshav's Formula One Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div className='yearSection'> 

          {yearsArray.map((year)=>(
                <div className='year'>
                  <Link href={`/drivers/${year}`}><p>{year}</p></Link>
                </div>
          ))}  
        </div>
      </main>

  

      <style jsx>{`
        
            #container{
              width:100vw;
              height:100vh;
              overflow-x:hidden;
            }

            main{
              overflow-x:hidden;
            }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }


        .yearSection{
          position:relative;
          width:80%;
          height:auto;
          margin-left:10%;
          margin-top:5%;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          align-items:space-evenly;
        }

        .year{
          position:relative;
          width:100%;
          height:50px;
          display:flex;
          margin-bottom:50px;
          justify-content: space-evenly;
          align-items: space-evenly;
          // background:#9E1A1A;
          background:red;
          cursor:pointer;      
          color:white;           
        }

        .year:hover{
          background:grey;
          color:white;           
        }

        .driverImage{
          width:25%;
          height:90%;
          background:pink;
        }


        .driverInformation{
          position:relative;
          left:25%;
          top:50%;
          transform:translate(-25%,-50%);
          text-decoration: none;
          width:75%;
          height: 90%;
          text-transform:capitalize;
        }

        .driver:hover{
          background-color:#e2534f;
          color:white;
          transition: background-color 1s ease;
          width:25%;
          text-transform:capitalize;
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

      `}</style>
    </div>
  )
}
