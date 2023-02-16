import React from 'react'
import CloudDriveTopBar from '../../../Common/CloudDriveTopBar/CloudDriveTopBar'
import OpenFileCard from './OpenFileCard/OpenFileCard'

const OpenCloudFile = () => {
  return (
    <div>
      <CloudDriveTopBar headerName={"File Name"} />
      <OpenFileCard/>
    </div>
  )
}

export default OpenCloudFile
