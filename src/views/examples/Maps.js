import React, {Component} from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import UserHeader from "../../components/Headers/UserHeader";
import AdminFooter from "../../components/Footers/AdminFooter";

const mapStyles = {
    width: '90%',
    height: '80%'
};

export class Maps extends Component {

    render() {
        return (
            <>
                <UserHeader/>

                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 41.34108986005728,
                            lng: 69.28688016937646
                        }
                    }
                />

            </>

        );
    }
}

export default GoogleApiWrapper(
    {
        apiKey: 'AIzaSyCXjhoOy7q6iwuplE3nfQuGnS1FhVzOBG0'
    }
)(Maps);