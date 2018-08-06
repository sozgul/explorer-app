import React from 'react';
import PropTypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';
import { View, Dimensions} from 'react-native';
import styles from './styles';
import { MEDIUM_GREY} from '../../common/colors';
//import {getRegionForCoordinates} from '../../utilities/location';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const REGION_PADDING = 2;

class MapComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };

  }

  _getRegionForCoordinates(points) {
    var minX, maxX, minY, maxY;
    
    // init first point
    ((point) => {
      const {coordinate} = point;
      minX = coordinate.latitude;
      maxX = coordinate.latitude;
      minY = coordinate.longitude;
      maxY = coordinate.longitude;
    })(points[0]);

    points.map((point) => {
      const {coordinate} = point;
      minX = Math.min(minX, coordinate.latitude);
      maxX = Math.max(maxX, coordinate.latitude) ;
      minY = Math.min(minY, coordinate.longitude);
      maxY = Math.max(maxY, coordinate.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    let deltaX = (maxX - minX);
    deltaX+= REGION_PADDING;
    let deltaY = (maxY - minY);
    deltaY+= REGION_PADDING;

    return {
      latitude: midX, longitude: midY,
      latitudeDelta: deltaX, longitudeDelta: deltaY,
    };
  }

  _getColorForSender(senderID) {
    let dotStyles = [styles.markerStyle, {backgroundColor:MEDIUM_GREY}];
    console.log('SENDER COLORS: ', this.props.senderColors);
    const senderColorItem = this.props.senderColors.find(item => item.senderID === senderID);
    if (senderColorItem) 
      dotStyles = [styles.markerStyle, {backgroundColor:senderColorItem.color}];

    console.log('DOT STYLES: ', dotStyles);
    return dotStyles;
  }

  render() {
    const {markerLocations} = this.props;
    return (
      <MapView 
        style={styles.mapView}
        region = {this._getRegionForCoordinates(markerLocations)}>
        {markerLocations.map((marker, index) => (
          <Marker key ={index}
            coordinate={marker.coordinate}>
            <View style={styles.radius}>
              <View style={this._getColorForSender(marker.title)}/>
            </View>
          </Marker>
        ))}
      </MapView>
    );
  }
}

MapComponent.propTypes = {
  markerLocations: PropTypes.array,
  senderColors: PropTypes.array.isRequired
};
MapComponent.defaultProps = {
  markerLocations: [],
  senderColors: []
};


export default MapComponent;