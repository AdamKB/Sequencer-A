    //Show component sequences in Save/Load dialog
    $("body").on("click",".fa-angle-right",function() {
        let tr=$(this).closest("tr");
        let key=tr.data("key");
        let that=$(this);

        that.toggleClass("fa-angle-right fa-angle-down");

        if (that.hasClass("fa-caret-down")) {
            that.addClass("downArrow");
        }

        for (i in projectIndex) {
            if (projectIndex[i].key==key) {
                let chainArray=projectIndex[i].chain;
                for (j in chainArray) {
                    let seqKey=chainArray[j].key;
                    for (i in projectIndex) {
                        if (projectIndex[i].key==seqKey) {
                            let compseq=projectIndex[i];
                            let newRow='<tr data-key='+compseq.key+' class="'+key+'"><td><span class="fa fa-upload"></span></td><td>'+compseq.name+'</td><td>'+compseq.abbr+'</td><td>'+compseq.last_modified+'</td><td><span class="fa fa-code"></span></td></tr>';
                            tr.after(newRow);
                        }
                    }
                }
            }
        }
    });
    
    $("body").on("click",".fa-angle-down",function() {
        let that=$(this);
        let tr=$(this).closest("tr");
        let key=tr.data("key");        

        $("#popup-table tr." + key).remove();
        
        that.toggleClass("fa-angle-down fa-angle-right");
    });
    
    //Show component sequences in Chain button
    $("body").on("click",".fa-caret-down",function() {
            let key=$(this).parent().attr("id");
            let html='';
            let compseq=projectIndex[i];

            html+='<table id="popup-table">';
            html+='<thead><tr>';
            html+='<th>Load</th>';
            html+='<th>Name</th>';
            html+='<th>Abbr</th>';
            html+='<th>Last Modified</th>';
            html+='<th><i class="fa fa-cube"></i></th>';
            html+='</tr></thead>';
            
            for (i in projectIndex) {
                if (projectIndex[i].key==key) {
                    let chainArray=projectIndex[i].chain;
                    for (j in chainArray) {
                        let seqKey=chainArray[j].key;
                        for (i in projectIndex) {
                            let slot=chainArray[j].slot;
                            let slotnumber=slot.slice(-2);
                            slotnumber=slotnumber.replace(/_/i,"");
                            if (projectIndex[i].key==seqKey) {
                                let compseq=projectIndex[i];
                                html+='<tr data-key='+compseq.key+'><td><span class="fa fa-upload" data-context="drag"></span></td><td>'+compseq.name+'</td><td>'+compseq.abbr+'</td><td>'+compseq.last_modified+'</td><td>'+slotnumber+'</td></tr>';
                            }
                        }
                    }
                }
            }
            html+='</table>'; 
        
        popup.html(html);
        popup.dialog('open');
    });
    
    // Generic help function
    var help = $("#help-text");
    help.addClass("help-box");

    $("#ht").addClass("ht-hide");
    
    function showHelp() {
        $("[data-help]").hover(
            function() {
            let title=$(this).data("help");
            help.text('').append(title);
         }, function() {
            help.text('');
         });
    };
    
    function hideHelp() {
        $("[data-help]").hover(function() {
            help.text('').append('');
         });
    };
    
    $("#ht").click(function() {
        $(this).toggleClass("ht-show");
        if ($(this).hasClass("ht-show")) {
            hideHelp();
        } else {
            showHelp();
        }
    });
    
    showHelp();