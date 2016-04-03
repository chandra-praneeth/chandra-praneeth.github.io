function getCard(cardId, title, tags, summary, link) {

        var html = '';

        for(i = 0; i < tags.length; i ++) {
            html = html + ('<span class="chip" style="margin: 2px">' +  tags[i] + '</span>');
        }

        
       return      '<div id="card_' + cardId + '" class="col s12 m6">' +
                        '<div class="z-depth-2 card" >' +
                            '<div class="card-content blue-text">' +
                                '<div id="title_' + cardId + '" class="card-title"><h5>' + title + '</h5></div>' +
                                    '<br/>' +
                                    '<div>' + html + '</div>' +
                                        '<br/>' +
                                            '<div class="grey-text text-darken-3">' +
                                                '<p id="summary_' + cardId + '">' + summary + "</p>" +
                                            '</div>' +
                            '</div>' +
                            '<div class="card-action" id="card_action_' + cardId + '">' +
                                '<a id="link_' + cardId + '" href="' + link + '">' + 'Read' + '</a>' +
                            '</div>' +
                        '</div>' +                    
                '</div>'
    }
