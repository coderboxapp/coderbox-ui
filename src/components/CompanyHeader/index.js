import React from 'react'
import { Avatar, Location } from 'elements'
import { Title, Link } from '@coderbox/atoms'
import { CompanyProfile } from './styles'

const Component = ({ company }) => {
  if (!company) return null

  return (
    <CompanyProfile>
      <Avatar src={company.logo} />
      <Title>{company.name}</Title>
      <Location location={company.location} />
      <Link href={company.website}>{company.website}</Link>
    </CompanyProfile>
  )
}

Component.displayName = 'CompanyProfile'
export default Component
