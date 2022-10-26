
import Link from 'next/link';
import Head from 'next/head';
import { useState,useEffect } from 'react';
import { useRouter} from 'next/router';

import Header from '../components/Header';

export default function Schedule() {

    const [scheduleList, setScheduleList] = useState([])
    
    useEffect( () => {
      async function  getF1Schedule(){
        let response = await fetch(`http://ergast.com/api/f1/current.json`)
        let data = await response.json()
        setScheduleList(data.MRData.RaceTable.Races)
      }
      getF1Schedule();
  }, [])

    if (!scheduleList){
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

              {scheduleList.map((races)=>(
                <div className='driverContainer'>

                  <div className='driverInformation'>
                    <h2 className="name">{races.round} </h2>
                    <h4 className="number">{races.Circuit.circuitName} </h4>
                    <h4 className="number">{races.Circuit.Location.locality} </h4>
                    <h4 className="number">{races.Circuit.Location.country} </h4>
                    <h4 className="number">{races.date} </h4>
                    <h4 className="number">{races.time} </h4>
                    <a href={races.url} target="_blank">Learn More</a>
                  </div>

                </div>
              ))}

               
        </div>
      </main>

      <style jsx>{`

        main{
            overflow-x:hidden

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
          padding-bottom:50px;
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