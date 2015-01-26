var swipe = function() {
// IF LOCK IS FALSE
    var listContainer = document.getElementById('wrap');
    var targetSelector = 'ul li';
    var threshold = 100;

    Hammer(listContainer).on('drag', function(e) {
        var isDraggingTarget = false,
            isDraggingChildOfTarget = false,
            draggedParents = false;
        var dragged = $(e.target);
        // console.log('whole element', e)
        // console.log('target', e.target)
        

        isDraggingTarget = dragged.is(targetSelector);

        if (!isDraggingTarget) {
            console.log('inside first if')
            draggedParents = dragged.parents(targetSelector);
            isDraggingChildOfTarget = draggedParents.length;
        }


        // e.class === blocked 
        // console.log('swiping in a block element', e.target)
        // return


        
        if (isDraggingTarget || isDraggingChildOfTarget) {
            // console.log('io sono', e)
            e.stopPropagation();
            e.preventDefault();
            e.gesture.preventDefault();
            var el = (isDraggingChildOfTarget) ? draggedParents : dragged;
            // console.log('el', el)
            var dragDistance = e.gesture.deltaX;

            if (dragDistance > threshold) {

                el.removeClass('prompt-remove');

            } else if (dragDistance < -threshold) {

                el.addClass('prompt-remove');
            }
        }
    });
}

swipe()


var lockQuestion = function() {
    $("li").click(function() {
        this.firstChild.nextSibling.id = 'locked'
        this.firstChild.nextSibling.src = 'http://localhost:3000/images/lock.png'
    });
}

var setLockDefault = function(){
      $('li').attr('locked', false);
      console.log($('li')[1].attributes[3].value)
}

