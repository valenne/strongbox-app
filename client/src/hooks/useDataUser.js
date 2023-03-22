// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { getUserPermission } from '../services/getUserPermission.js'

// export function useDataUser (navigate) {

//   const { isAuthorized, localData, isNotAuthorized } =
//     getUserPermission(navigate)

//   useEffect(() => {
//     // const { isAuthorized, localData, isNotAuthorized } = test()
//     // console.log(isAuthorized, localData)

//     if (isNotAuthorized) {
//       console.log('user has been not authorized:', isNotAuthorized)
//       return navigate('/login', { replace: true })
//     }
//     if (!isAuthorized || !localData) {
//       return navigate('/login', { replace: true })
//     }

//     if (!isAuthorized.data.status) {
//       return navigate('/login', { replace: true })
//     }
//   }, [isNotAuthorized, isAuthorized])

//   const mappedData = async () => {
//     const responseUser = await axios.get(
//       `http://localhost:3000/dashboard/user/${localData.auth.id}`
//     )
//     console.log(responseUser)
//   }

//   return { information, setInformation, mappedData }
// }
