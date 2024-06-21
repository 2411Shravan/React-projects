import React from 'react';
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Varanasi',
        imageUrl:'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address:'Uttar Pradesh',
        location:{
            lat: 40.565,
            long: -43.546,
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Taj Mahal',
        imageUrl:'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address:'Uttar Pradesh',
        location:{
            lat: 20.565,
            long: -413.546,
        },
        creator:'u2'
    }
];

const UserPlaces=()=>{
    
    const userId=useParams().userId;
    const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator === userId);
    return (
        <PlaceList items={loadedPlaces}/>
    );
};

export default UserPlaces;