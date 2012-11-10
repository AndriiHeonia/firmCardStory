BEM.decl ('i-geoclicker', {}, {
    /**
     * @type {L.Map}
     */
    _map: null,

    /**
     * @type {L.LatLng}
     */
    _lastLatLng: null,

    /**
     * @param {L.Map} map
     */
    addTo: function (map) {
        this._map = map;
        this._map.on({
            'click': this.getGeoObject
        }, this);
    },

    /**
     * @param {L.MouseEvent} mouseEvent
     */
    getGeoObject: function (mouseEvent) {
        this._lastLatLng = mouseEvent.latlng;
        $.ajax({
            url: 'http://catalog.api.2gis.ru/geo/search',
            data: {
                q: mouseEvent.latlng.lng + ',' + mouseEvent.latlng.lat,
                key: this.API_KEY,
                version: this.API_VERSION,
                output: 'jsonp',
                types: 'house,sight,station_platform'
           },
           dataType: 'jsonp',
           success: this.showFirmcard,
           context: this
       });
    },

    /**
     * @param {Object} data
     */
    showFirmcard: function (data) {
        var firmcard = new BEM.blocks['i-firmcard']();
        if(data.result !== undefined) {
            firmcard.setData(data.result[0]);
            firmcard.toggleMod('state', 'collapsed');
            var popup = L.popup()
                .setLatLng(this._lastLatLng)
                .setContent(firmcard.getContent())
                .openOn(this._map);
        }
    },

    /**
     * @type {String}
     */
    API_KEY: 'rujrdp3400',

    /**
     * @type {Number}
     */
    API_VERSION: 1.3
});