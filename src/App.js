import React from 'react'
import Config, { convertYearTree } from './config'
import './App.css'

function App() {
  const configYearTree = convertYearTree(Config)

  return (
    <div className="wrapper">
      {
        Object.keys(configYearTree)
          .sort((a, b) => Number(b) - Number(a))
          .map(year => {
            return <React.Fragment key={year}>
              <div>{year} 年</div>
              <div className="bookshelf">
                {
                  configYearTree[year].map((element) => {
                    const { title, status } = element
                    return <div key={title} className="book">
                      <div className="side spine">
                        <span className="spine-title">{title}</span>
                        <span className="spine-status">{status}</span>
                      </div>
                      <div className="side top"></div>
                      <div className="side cover"></div>
                    </div>
                  })
                }
              </div>
            </React.Fragment>
        })
      }
    </div>
  )
}

export default App
