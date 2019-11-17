import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { fetchLocations } from '../client/store/location';

class MapScreen extends Component {
  componentDidMount() {
    console.log('Fetching locations');
    this.props.fetchLocations();
  }
  render() {
    let markers = this.props.locationMarkers;
    console.log('Markers fetched: ', markers);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 40.705073,
            longitude: -74.009156,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {!markers
            ? null
            : markers.map(marker => {
                const coords = {
                  latitude: marker.latitude,
                  longitude: marker.longitude
                };

                const metadata = `Marker ID: ${marker.id}`;

                return (
                  <MapView.Marker
                    key={marker.id}
                    coordinate={coords}
                    title={marker.stationName}
                    description={metadata}
                  />
                );
              })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

const mapStateToProps = state => {
  return {
    locationMarkers: state.location.allLocations
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchLocations: () => dispatch(fetchLocations()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
