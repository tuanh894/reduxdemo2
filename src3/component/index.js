import React, { Component } from "react";
import Profile from './Profile';
import ShowProfile from './ShowProfile';
import UpdateProfile from './UpdateProfile';
import  {StackNavigator} from 'react-navigation';
export default (DrawNav = StackNavigator({
    Profile :{screen :Profile},
    ShowProfile : { screen: ShowProfile},
    UpdateProfile : { screen: UpdateProfile},
}))