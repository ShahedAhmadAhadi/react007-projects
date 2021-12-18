import React from 'react'
import './App.css'
import {Link, Switch, Route} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { Navbar } from './components'

function App() {
    return (
        <div className='App'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path="/">
                                
                            </Route>
                            <Route exact path="/exchanges">
                                
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                
                            </Route>
                            <Route exact path="/news">
                                
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

export default App
