import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Cards from './Card'
import Searchbox from './Searchbox'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    handleChange = (value) => {
        let url = `https://developers.zomato.com/api/v2.1/search?q=${value}`;
        let key = '96655442d9afa6b0eb1f89c6a2cb611b';
        fetch(url, {
            method: 'GET',
            headers: {
                'user-key': key,
                'Accept': 'application/json'
            }
        }).then((response) => response.json()).then((data) => {
            this.setState({restaurants: data.restaurants});
        })
    }

    render() {
      return (
          <ThemeProvider theme={theme}>
              <div>
                  <Searchbox handleChange={this.handleChange} />
                  <div style={{display: 'flex', flexWrap:'wrap'}}>
                      {
                          this.state.restaurants.map((restaurant,index) => {
                              return (
                                  <Cards restaurant={restaurant} key={index} />
                              )
                          })
                      }
                  </div>
              </div>
          </ThemeProvider>
      );
    }
}

export default App;
