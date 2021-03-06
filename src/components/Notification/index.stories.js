import React from 'react'
import { compose } from 'recompose'
import { storiesOf } from '@storybook/react'
import { Box, Link, Button, Text, Icon, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/hocs'
import Notification from '.'

const Component = compose(withTheme(theme))((props) => {
  return (
    <div>
      <Box>
        <Notification date={new Date()} btnIcon='check' btnLabel='Accept'>
          <Text>
            <Link>Coderbox</Link> has accepted your application as <Link>Web Developer</Link>. Please click{' '}
            <Link>accept</Link> to let the company know you choosed this internship.
          </Text>
        </Notification>
      </Box>
      <Box>
        <Notification icon='close' color='danger' date={new Date(2017, 8, 20)}>
          <Text>
            <Link>Coderbox</Link> has rejected your application to internship <Link>Web Developer</Link>.
          </Text>
        </Notification>
      </Box>
      <Box>
        <Notification icon='close' color='danger'>
          <Text>
            <Link>Intel</Link> has rejected your application to internship <Link>Embedded Developer</Link>.
          </Text>
        </Notification>
      </Box>
    </div>
  )
})

const stories = storiesOf('components/Notification', module)
stories.add('simple usage', () => <Component />)
