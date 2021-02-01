import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getShops } from './config/firebase';
import { Shop } from './types/Shop';
import ShopReviewItem from './components/ShopReviewItem';

const App: React.FC<{}> = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index} />
  ));
  return <View style={styles.container}>{shopItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
