BEM.decl ('i-firmcard', {}, {
    /**
     * @param {Object} data Firm info
     * @return {String}
     */
    getFormattedText: function (data) {
        var content = '<b>Информация:</b><br />';
        content += 'Адрес: ' + data.name + '<br />';
        content += 'Тип: ' + data.attributes.purpose;

        return content;
    }
});