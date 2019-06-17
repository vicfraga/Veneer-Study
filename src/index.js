import React from 'react';
import { ScrollView, View } from 'react-native';

import './config/ReactotronConfig';
import SubHeader from './components/SubHeader';
import PostList from './components/PostList';
// import Tabs from './components/Tabs';
import Header from './components/Header';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
    <Header />
    <ScrollView>
      <SubHeader />
      <PostList />
    </ScrollView>
    {/* <Tabs /> */}
  </View>
);

export default console.tron.overlay(App);