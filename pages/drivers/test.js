
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { useRouter} from 'next/router';


//STATIC SITE GENERATION REQUIRES A STATTICPATH

// export async function getStaticPaths(){
//   const response = await fetch("http://ergast.com/api/f1/2022/drivers.json")
//   const driver = await response.json();
//   const data = driver.MRData.DriverTable.Drivers

//   return{
//     paths: data.map((driver)=>({
//         params: {driverId : driver.driverId}
//     })),
//     fallback:false
//   }
// }

// STATIC SIDE RENDERING
// export async function getStaticProps({params}) {
//     let response = await fetch(`http://ergast.com/api/f1/drivers/${params.driverId}.json`)
//     let data = await response.json()
//     return {
//       props:{ driver: data.MRData.DriverTable.Drivers[0] }// will be passed to the page component as props
//     }
// }

export default function DriverDetails({driver}) {

    const [driver1, setDriver1] = useState(driver)
    const router = useRouter()
    const {driverId} = router.query
    
  //   useEffect( () => {
  //     async function  getF1Driver(){
  //       let response = await fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
  //       let data = await response.json()
  //       setDriver1(data.MRData.DriverTable.Drivers[0])
  //     }
  //     if(driverId){
  //       getF1Driver();
  //     }
  // }, [driverId])

  //   if (!driver1){
  //     return null
  //   }


    return (
      <div>
        <Link href="..">Back to Main Homepage</Link>
        <hr></hr>
        {/* <p>{driverId}</p>
        <div>
            <h2>Name: {driver1.givenName} {driver1.familyName} </h2>
            <h2> Driver's Number : {driver1.permanentNumber} </h2>
            <h2>Date of Birth : {driver1.dateOfBirth}</h2>
            <h2>Nationality: {driver1.nationality} </h2> */}
        {/* </div> */}

      </div> 
    );
  }