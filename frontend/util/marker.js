export default class Marker{
    constructor(map){
        this.map = map;
        this.markers ={};
        this.createMarkerFromBusiness = this.createMarkerFromBusiness.bind(this)
    }

    updateMarkers(businesses){
        const busObj = {};
        // debugger
       businesses.forEach(business => busObj[business.id] = business)

       businesses
        .filter(business => !this.markers[business.id])
        .forEach(business => this.createMarkerFromBusiness(business))
    }

    createMarkerFromBusiness(business){
        const location = new google.maps.LatLng(business.latitude, business.longitude)
        // debugger
        const marker = new google.maps.Marker({
            position: location, 
            map: this.map, 
            businessId: business.id
        })
        // debugger
        this.markers[marker.businessId] = marker; 
        // marker.setMap(this.map)
    }
}