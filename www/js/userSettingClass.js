

function UserSetting () {
	this.layersList = {osm:['http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png','Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors']};
	this.defaultLayer = this.layersList["osm"]; 
	this.locationSetting = {
		showLocation:true,
		locationRefreshInterval:10000,
		followUser:true,//this means when the user locaiton moves, always keep the user in the centre of the map.
		location:[55.945925800000005, -3.2005949],
		locAccuracy:0,
		locTimestamp:0
	};
	this.locIcon = new LeafIcon({iconUrl: 'img/icons/locIcon.png'});
	this.marker = L.marker([51.3, 0.7], {icon: this.locIcon});
		}
UserSetting.prototype.getDefaultLayer = function() {
    return this.defaultLayer;
};

UserSetting.prototype.getShowLocation = function() {
    return this.locationSetting.showLocation;
};
UserSetting.prototype.getRefreshInterval = function() {
    return this.locationSetting.locationRefreshInterval;
};
UserSetting.prototype.getIcon = function() {
    return this.locIcon;
};


UserSetting.prototype.setUserLoc = function(_loc) {
    this.locationSetting.location=[_loc.coords.latitude,_loc.coords.longitude];
    this.locationSetting.locAccuracy=_loc.coords.accuracy;
    this.locationSetting.locTimestamp=_loc.timestamp;
    this.updateMarkerLoc();

};

UserSetting.prototype.setMarker = function(_marker) {
    this.marker = _marker;
};
UserSetting.prototype.getMarker = function() {
    return this.marker;
};
UserSetting.prototype.updateMarkerLoc = function() {
	    this.marker.setLatLng(this.locationSetting.location	).update();

    // this.marker = _marker;
};

UserSetting.prototype.getUserLoc = function() {
    return this.locationSetting.location;
};

UserSetting.prototype.addUserMarker = function(_map) {
    
};



var LeafIcon = L.Icon.extend({
	options: {
        // shadowUrl: 'leaf-shadow.png',
        iconSize:     new L.Point(50, 50),
        // shadowSize:   [50, 64],
        iconAnchor:   new L.Point(16, 16),
        // shadowAnchor: [4, 62],
        popupAnchor:  new L.Point(16, 16)
    }
});