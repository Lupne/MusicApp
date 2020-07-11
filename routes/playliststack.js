import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Playlist from '../pages/playlist'
import InsidePlaylist from '../pages/insideplaylist'

const PlaylistStack = createStackNavigator({
    Playlist:{
      screen:Playlist,
    },
    InsidePlaylist:{
      screen:InsidePlaylist,
    }
})

export default createAppContainer(PlaylistStack);
