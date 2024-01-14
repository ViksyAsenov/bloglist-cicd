import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Blog from './Blog'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Blog />', () => {
  const blog = {
    title: 'a test blog',
    author: 'Test Testov',
    url: 'www.test.com',
    likes: 0,
    user: 'test123',
  }

  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#769799',
      footer: '#003333',
      darkText: '#0c3d3d',
      lightText: '#dff1f5',
      darkBody: '#2f5b5c',
      lightBody: '#bcd3d6',
    },
  }

  test('renders title and author', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Blog blog={blog} />
        </Router>
      </ThemeProvider>
    )

    expect(component.container).toHaveTextContent('a test blog | Test Testo')
  })
})
