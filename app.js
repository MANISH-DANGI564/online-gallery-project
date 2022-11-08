$(document).ready(function(){
    $("#1").on({
        mouseover: function(){
           $(this).css("background-color","#6F4FC6");
           $(this).css("font-size","32px");
           $(this).css("color","orange");
         },
        mouseleave: function(){
            $(this).css("background-color","#DECFC8");
            $(this).css("font-size","30px");
            $(this).css("color","#666");
        }
    });
    $("#2").on({
        mouseover: function(){
           $(this).css("background-color","#6F4FC6");
           $(this).css("font-size","32px");
           $(this).css("color","orange");
         },
        mouseleave: function(){
            $(this).css("background-color","#DECFC8");
            $(this).css("font-size","30px");
            $(this).css("color","#666");
        }
    });
    $("#3").on({
        mouseover: function(){
           $(this).css("background-color","#6F4FC6");
           $(this).css("font-size","32px");
           $(this).css("color","orange");
         },
        mouseleave: function(){
            $(this).css("background-color","#DECFC8");
            $(this).css("font-size","30px");
            $(this).css("color","#666");
        }
    });
    $('.buttons').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var filter=$(this).attr('data-filter')
            if(filter=='All'){
                $('.image').show(400);
            }
            else{
                $('.image').not('.'+filter).hide(100);
                $('.image').filter('.'+filter).show(100);
            }
    });
    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
                enabled:true
        },
    });
 
});
var contactusid=document.getElementById("contactusid");
var gallery = document.getElementById("galleryid");
function opencontactus(){
    contactusid.style.display="flex";
    gallery.style.opacity=0.2;

}
function closecontactus(){
    contactusid.style.display="none";
    gallery.style.opacity=1.0;
}
