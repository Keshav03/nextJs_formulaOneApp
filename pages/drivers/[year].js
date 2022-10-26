
import Link from 'next/link';
import Head from 'next/head';
import { useState,useEffect } from 'react';
import { useRouter} from 'next/router';

import Header from '../components/Header';

//STATIC SITE GENERATION REQUIRES A STATTICPATH

// export async function getStaticPaths(){

//     var max = new Date().getFullYear()
//     var min = max - 69
//     var years = []
//     for (var i = max; i >= min; i--) {
//       years.push(i)
//     }

//     return{
//       paths: years.map((year)=>({
//           params: {year : year.toString()}
//       })),
//       fallback:false
//     }

// }


// STATIC SIDE RENDERING
// export async function getStaticProps({params}) {
//     let response = await fetch(`http://ergast.com/api/f1/${params.year}}/drivers.json`)
//     let data = await response.json()
//     return {
//       props:{ drivers: data.MRData.DriverTable.Drivers}// will be passed to the page component as props
//     }
// }

export default function Driver({drivers}) {

    const [driversList, setDriversList] = useState(drivers)
    const router = useRouter()
    const {year} = router.query
    
    useEffect( () => {
      async function  getF1Driver(){
        let response = await fetch(`http://ergast.com/api/f1/${year}/drivers.json`)
        let data = await response.json()
        setDriversList(data.MRData.DriverTable.Drivers)
      }
      if(year){
        getF1Driver();
      }
  }, [year])

    if (!driversList){
      return null
    }

    return (
      <div className="container1">
      <Head>
        <title>Keshav's Formula One Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        

        <div className='driverSection'> 

              {driversList.map((driver)=>(
                <div className='driverContainer'>

                  <div className='driverImage'>
                    <img src=""></img>
                  </div>

                  <div className='driverInformation'>
                    <h2 className="name">{driver.givenName} {driver.familyName} </h2>
                    <h4 className="number">{driver.permanentNumber} </h4>
                    <h4 className="code">{driver.code} </h4>
                    <h4 className="birth">{driver.dateOfBirth} </h4>
                    <h4 className="nationality">{driver.nationality} </h4>
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

      main{
        overflow-x:hidden

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
          background:grey;
        }


        .driverInformation{
          position:relative;
          left:30%;
          transform:translate(-25%,0%);
          text-decoration: none;
          width:75%;
          height: 90%;
          text-transform:capitalize;
        }

        .name{
          text-transform:uppercase;
          font-size:1.3rem;
          letter-spacing:3px;
        }

        .number, .code, .birth , .nationality{
          font-size:1rem;
          color:#5A5A5A;
          margin-top:-5px
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
    );
  }