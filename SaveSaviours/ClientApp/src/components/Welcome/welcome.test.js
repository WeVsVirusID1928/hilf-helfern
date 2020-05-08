import React from 'react'
import { shallow } from 'enzyme'
import Welcome from './Welcome'

jest.mock('styles/styles', () => {
  const mockStylesHook = () => {
    return { landingPaper: '', landingHeader: '', landingText: '' }
  }
  return mockStylesHook
})

describe('welcome component', () => {
  test('should render list of help tasks', () => {
    const welcomeComponent = shallow(<Welcome />)
    const listItems = welcomeComponent.find('WithStyles(ForwardRef(ListItem))')
    expect(listItems).toHaveLength(7)
  })
})
