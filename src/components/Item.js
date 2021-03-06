import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Heading } from 'grommet'

const Item = ({ children, name, fill, disabled, linkTo }) => {
  return (
    <Button
      disabled={disabled}
      plain
      fill={fill}
      href={linkTo}
      type="button"
      label={
        <Box fill={fill} pad={{ horizontal: 'small' }}>
          <Heading
            level={3}
            size="small"
            margin={{ top: 'none', bottom: 'small' }}
          >
            {name}
          </Heading>
          <Box
            flex
            background={
              disabled
                ? { color: 'status-disabled', opacity: 'weak' }
                : { color: 'neutral-2', opacity: 'weak' }
            }
            justify="center"
            align="center"
            pad="small"
            overflow="hidden"
            round="small"
            style={{ pointerEvents: 'none' }}
          >
            {children}
          </Box>
        </Box>
      }
    />
  )
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  linkTo: PropTypes.string,
  name: PropTypes.string.isRequired
}

Item.defaultProps = {
  disabled: false,
  fill: true
}

export default Item
