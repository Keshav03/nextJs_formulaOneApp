import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useEffect, useState } from 'react';

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
export async function getStaticProps() {
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
    <div className="container">
      <Head>
        <title>Keshav's Formula One Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1 className="title">
          Keshav's <span id="f1">Formula 1 </span>Next Js Demo App
        </h1> */}

        <h1 className="title">
         Keshav's  <img src='/formulaOneLogo.png' id="titleLogo"></img>Next Js Demo App
        </h1>


        <div id="links">

            <Link className="link" href="./drivers">
              <div className='grid'>
                <img src="driver1.jpg" className='linkImage'></img>
                <h2 className='title'>Driver</h2>
              </div>
            </Link>

            <Link href="./driver" className="link">
            <div className="grid">
                <img src="team1.webp" className='linkImage'></img>
                <h2 className='title'>Constructors</h2>
              </div>
            </Link>
            <Link href="./driver"  className="link">
              <div className="grid">
                <img src="results.webp" className='linkImage'></img>
                <h2 className='title'>Results</h2>
              </div>
            </Link>
            <Link href="./driver" className="link">  
              <div className="grid">
                <img src="circuit.jpg" className='linkImage'></img>
                <h2 className='title'>Circuits</h2>
              </div>
            </Link>
            

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
        container{
          display:flex;
          justify-content:center;
          align-item:center;
          width:100vw;
          height:100vh;
          overflow-x: hidden;
        }

        main{
          width:100%;
          height:100vh;
          background-color:#202020;
          display:flex;
          justify-content:center;
          align-item:center;
          flex-direction:column;
          overflow-x: hidden;
          background-image: url("./background.jpg");
          
        }

        main h1 {
          position:relative;
          text-align:center;
          top:-10%;
          color:white;
          font-size: 1.5em
          
        }

        #f1{
          color:red;
          font-weight:800;
        }


        #titleLogo{
          height:50px;
          padding: 0px 25px

        }

        main h1 a{
          text-decoration:none;
          color: grey;
        }
        
        main h1 a span{
          color:#FF1801;
          text-transform: uppercase;
          font-weight:800;
        }

        #links{
          position:relative;
          width:80%;
          height:250px;
          left:10%;
          display:flex;
          flex-direction:row;
          justify-content:space-evenly;
          cursor:pointer;
        }

        .links .link{
          position:relative
          width:20%;
          height:100%;
        }

        .grid{
          position:relative;
          width:20%;
          height:100%;
          color:white;
        }

        .linkImage{
          position:relative;
          width:100%;
          height:80%;
        }

        .title{
          position:relative;
          text-align:center;
          letter-spacing: 2px;
          text-transform:Uppercase;
          font-size: 1.2em;
          top:-5%;
          padding:10px 25px;
        }

        .grid:hover{
          color:gray;
          // outline:2px white solid;

        }

        .grid:hover h2{
          color:red;
          border-bottom:2px white solid;
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
          color:teal;
        }


        .driverContainer{
          position:relative;
          width:80%;
          height:auto;
          margin-left:10%;
          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
        }

        .driver{
          padding: 1.5rem;
          margin:0.8rem;
          text-align: center;
          text-decoration: none;
          color:red;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          width:25%;
          cursor:pointer;
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
