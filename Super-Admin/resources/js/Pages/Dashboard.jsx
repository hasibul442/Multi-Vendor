
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
function Dashboard(props) {
  return (
    <>
        <AuthenticatedLayout
         auth={props.auth}
         errors={props.errors}>

         dfbgdfgdfg
         </AuthenticatedLayout>
    </>
  )
}

export default Dashboard

