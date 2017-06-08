import React from 'react'
import { translate } from '../lib/I18n'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import classNames from 'classnames'
import styles from '../styles/app'
// import jss from 'jss';
// import jssDefault from 'jss-preset-default';
// import 'leaflet/dist/leaflet.css';

/*
jss.setup(jssDefault());

jss.createStyleSheet({
  '@global': {
    '.leaflet-container': {
      height: '100%',
    },
  },
}).attach();
*/

// import styles from '../styles/app'
// import classNames from 'classnames'

class MapTraces extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <Map center={position} zoom={this.state.zoom} className={styles.test}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default translate()(MapTraces)

// window.ReactDOM.render(<MapTraces />, document.getElementById('map-container'))
