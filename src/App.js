import React from 'react';

import { Cards, CountryPicker, Chart } from './component';
import { fetchData } from './api/';
import styles from './App.module.css';

import crona from './images/crona.png';

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={crona} alt='Covid-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <h1>↫↫↫↫↫ Ƥ๏Ŵέ𝐫є𝔡 βⓎ ↬↬↬↬↬</h1>
        <h2>𝕴𝖏𝖆𝖟 𝕾𝖆𝖗𝖜𝖆𝖗</h2>
      </div>
    );
  }
}

export default App;