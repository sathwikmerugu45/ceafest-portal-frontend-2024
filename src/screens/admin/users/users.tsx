import React, { useEffect, useState } from 'react'
import { useGetUsersQuery } from '../../../generated/graphql';
import { User } from '../../../types/user';
import "./users.scss"

type UsersProps = {
  
}

const Users:React.FC<UsersProps> = () => {
  const { data, loading, error, refetch } = useGetUsersQuery();
  const [ ca, setCa ] = useState<User[]>()
  
  useEffect(() => {
    if(data?.getUsers){
      const asyncFunc = async () => {
        await setCa(data.getUsers.map((ca) => {
          return{
            id:ca.id,
            CEAFESTID: ca.CEAFESTID,
            name:ca.name,
            email:ca.email,
            payment:ca.payment, 
            mobile:ca.mobile,
            organization:ca.organization,
            gender: ca.gender, 
            isIITM:ca.isIITM,
            role:ca.role,
            type:ca.type,
            collegeAddress:ca.collegeAddress,
            hostel:ca.hostel,
            emailVerified:ca.emailVerified,
            country:ca.country,
          }
        }))
      }
      asyncFunc();
    }
  },[data])
  return (
    <div className="users-page">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>CEAFESTID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Payment</th>
            <th>Mobile</th>
            <th>organization</th>
            <th>gender</th>
            <th>isIITM</th>
            <th>role</th>
            <th>type</th>
            <th>College Address</th>
            <th>Country</th>
            <th>hostel</th>
            <th>emailVerified</th>
          </tr>
        </thead>
        <tbody>
          {
            ca?.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.CEAFESTID}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.payment}</td>
                  <td>{value.mobile}</td>
                  <td>{value.organization}</td>
                  <td>{value.gender}</td>
                  <td>{value.isIITM}</td>
                  <td>{value.role}</td>
                  <td>{value.type}</td>
                  <td>{value.collegeAddress}</td>
                  <td>{value.country}</td>
                  <td>{value.hostel}</td>
                  <td>{value.emailVerified}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users



