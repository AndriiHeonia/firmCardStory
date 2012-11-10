BEM.DOM.decl ('b-map',
{
    onSetMod: {
       'js': function() {
            var map = L.map(this.domElem.get(0)).setView([54.98, 82.89], 16);
            var geoclicker = BEM.blocks['i-geoclicker'];
            L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png').addTo(map);
            geoclicker.addTo(map);
        }
    }
},
{});