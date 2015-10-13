﻿(function(f){CKEDITOR.dialog.add("footnotesDialog",function(c){return{editor_name:!1,title:"Manage Footnotes",minWidth:400,minHeight:200,footnotes_el:!1,contents:[{id:"tab-basic",label:"Basic Settings",elements:[{type:"textarea",id:"new_footnote","class":"footnote_text",label:"New footnote:",inputStyle:"height: 100px"},{type:"text",id:"footnote_id",name:"footnote_id",label:"No existing footnotes",setup:function(){var b=this.getDialog(),a=f("#"+this.domId);b.footnotes_el=a;c=b.getParentEditor();b=
f(c.editable().$).find(".footnotes ol");if(0<b.length){0==a.find("p").length?a.append('<p style="margin-bottom: 10px;"><strong>OR:</strong> Choose footnote:</p><ol class="footnotes_list"></ol>'):a.find("ol").empty();var e="";b.find("li").each(function(){var a=f(this),b=a.attr("data-footnote-id");e+='<li style="margin-left: 15px;"><input type="radio" name="footnote_id" value="'+b+'" id="fn_'+b+'" /> <label for="fn_'+b+'" style="white-space: normal; display: inline-block; padding: 0 25px 0 5px; vertical-align: top; margin-bottom: 10px;">'+
a.find("cite").text()+"</label></li>"});a.children("label,div").css("display","none");a.find("ol").html(e);a.find(":radio").change(function(){a.find(":text").val(f(this).val())})}else a.children("div").css("display","none")}}]}],onShow:function(){this.setupContent();var b=this;CKEDITOR.on("instanceLoaded",function(a){b.editor_name=a.editor.name});jQuery(".cke_dialog").css({position:"absolute",top:"2%"});var a=b.getParentEditor().id;CKEDITOR.replaceAll(function(b,d){if(!b.className.match(/footnote_text/))return!1;
for(var c=b;(c=c.parentElement)&&!c.classList.contains(a););if(!c)return!1;d.toolbarGroups=[{name:"editing",groups:["undo","find","selection","spellchecker"]},{name:"clipboard",groups:["clipboard"]},{name:"basicstyles",groups:["basicstyles","cleanup"]}];d.allowedContent="br em strong; a[!href]";d.enterMode=CKEDITOR.ENTER_BR;d.autoParagraph=!1;d.height=80;d.resize_enabled=!1;d.autoGrow_minHeight=80;d.removePlugins="footnotes";d.on={focus:function(a){a=f("#"+a.editor.id+"_contents");a.parents("tr").next().find(":checked").attr("checked",
!1);a.parents("tr").next().find(":text").val("")}};return!0})},onOk:function(){var b=CKEDITOR.instances[this.editor_name],a=this.getValueOf("tab-basic","footnote_id"),e=b.getData();b.destroy();""==a?""!=e&&c.plugins.footnotes.build(e,!0,c):c.plugins.footnotes.build(a,!1,c)},onCancel:function(){CKEDITOR.instances[this.editor_name].destroy()}}})})(window.jQuery);