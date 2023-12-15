import React, { Component } from 'react';
import './assets/css/scrollertext.css'
class ScrollerText extends Component {
    
    render() {

        $(document).ready(function(){
            var w_height= $(this).height();
            var slide_width = $('.fixed_bottom').width();
            var slide_left = slide_width/w_height;
            $(window).scroll(function(e){
              var f_left = slide_left*$(this).scrollTop()*-2.4;
              $('.fixed_bottom').css({left: f_left});
              
            });
          });
        return (
            <div className="works-div">
                <h4  className='fixed_bottom' >НАШИ РАБОТЫ</h4>
            </div>
        );
    }
}

export default ScrollerText;
