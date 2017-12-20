// @flow
import React from 'react'
import { DaysAgo, Tags } from 'elements'
import { Title, Subtitle, Link, Tag, Group } from '@coderbox/atoms'
import { Item } from 'items'

type Props = {
  data: any,
  score: number
}

const Component = ({ data, score, selectedTechnologies }: Props) => {
  let { user } = data

  return (
    <Item className='candidate-item' email={user.email}>
      <DaysAgo date={data.createdAt} />
      <Title size='large'>{user.name}</Title>
      <Subtitle size='normal'><Link>{user.email}</Link></Subtitle>
      <Tags>
        <Group>
          <Tag color='light'>score:</Tag>
          <Tag color={score > 15 ? 'success' : 'danger'}>{score}%</Tag>
        </Group>
      </Tags>
      <Tags tags={user.stats.technologies} selectedTags={selectedTechnologies} />
    </Item>
  )
}

Component.displayName = 'CandidateItem'
Component.defaultProps = {
  score: 0,
  selectedTechnologies: []
}

export default Component
