import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 15.65397,
          longitude: -86.00617,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      > 
        <Marker
          coordinate={{ latitude: 15.65397, longitude: -86.00617 }}
          title="Mi ubicación"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
});