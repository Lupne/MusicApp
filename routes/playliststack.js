import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Playlist from '../pages/playlist'
import InsidePlaylist from '../pages/insideplaylist'
import Favourites from '../pages/favourites'

const PlaylistStack = createStackNavigator({
    Playlist:{
      screen:Playlist,
      navigationOptions: {
        headerShown: false,
      }
    },
    InsidePlaylist:{
      screen:InsidePlaylist,
      navigationOptions: {
        headerShown: false,
      }
    },
    Favourites:{
      screen:Favourites,
      navigationOptions: {
        headerShown: false,
      }
    },
})

export default createAppContainer(PlaylistStack);
