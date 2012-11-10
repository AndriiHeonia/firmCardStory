BEM.decl ('i-firmcard', {
    /**
     * @type {Object}
     */
    _data: null,

    /**
     * @type {String} content
     */
    _content: null,
  
    /**
     * Firm card modifiers
     * @type {Object}
     */
    onSetMod: {
        'state': {
            'collapsed': function (elem, modName, modVal) {
              this._content = 'Краткая инф-я: <br />';
              this._content += 'Адрес: ' + this._data.name;
            },

            'expanded': function (elem, modName, modVal) {
              this._content = 'Детальная инф-я: <br />';
              this._content += 'Адрес: ' + this._data.name;
              this._content += '<br />';
              this._content += 'Тип: ' + this._data.attributes.purpose;
            }
        }
    },

    /**
     * @param {Object} data Firm info
     */
    setData: function (data) {
        this._data = data;
    },

    /**
     * @return {String}
     */
    getContent: function () {
        return this._content;
    }
}, {});