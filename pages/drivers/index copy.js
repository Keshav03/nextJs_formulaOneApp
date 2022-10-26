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
  let response = await fetch("http://ergast.com/api/f1/2022/drivers.json")
    let data = await response.json()
    return {
      props:{ drivers: data.MRData.DriverTable.Drivers }// will be passed to the page component as props
    }
}

export default function Home({drivers}) {
  const [driver, setDriver] = useState(drivers)
  const [driver1, setDriver1] = useState([])
  
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
    <div className="container1">
      <Head>
        <title>Keshav's Formula One Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        

        <div className='driverSection'> 

              {/* {driver1.map((driver)=>(
                <div className='driver1 card' key={driver.driverId}> 
                  <h3>{driver.driverId} </h3>
                  <h3>{driver.permanentNumber} </h3>
                  <h3>{driver.code} </h3>
                </div>
              ))} */}

              {driver.map((driver)=>(
                <div className='driverContainer' key={driver.driverId}>

                  <div className='driverImage'>
                    <img src=""></img>
                  </div>

                  <div className='driverInformation'>
                    <h2>{driver.driverId} </h2>
                    <h4>{driver.permanentNumber} </h4>
                    <h4>{driver.code} </h4>
                    <Link href={`./driver/${driver.drverId}`} ><a className='link'>Learn More About Driver</a></Link>

                  </div>
                </div>
              ))}

               
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        
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


        .driverSection{
          position:relative;
          width:80%;
          height:auto;
          margin-left:10%;
          margin-top:5%;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .driverContainer{
          position:relative;
          width:100%;
          height:250px;
          display:flex;
          justify-content: space-evenly;
          align-items: space-evenly;
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
