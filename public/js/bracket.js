var $tournament = $('.tournament'),
    $bracket = $('<ul class="bracket"><li></li><li></li></ul>');

var participants = ['Adam', 'Matt', 'Evan', 'Abby', 'Heather', 'Christina', 'Ryan', 'Tyler', 'Steve', 'Steph', 'Jenna', 'Derek', 'Mike', 'Sam'];

function buildBracket($el, p1, p2) {
    if (!p1 && !p2) {
        $el.append($bracket.clone());
    }
}

function cleanUp() {
    var $brackets = $('.bracket'),
        removed = false;
    for (var i = 0; i < $brackets.length; i++) {
        // break before there aren't enough spots
        if ($('li:empty').length === participants.length) break;

        var empty = true;
        $brackets.eq(i).find('li').each(function () {
            if (!$(this).is(':empty')) {
                empty = false;
            }
        });
        if (empty) {
            $brackets.eq(i).remove();
            removed = true;
        }
    }
    return removed;
}

buildBracket($tournament);

var level = 0,
    $brackets,
    $previousBrackets;

// build 4 levels of brackets
while (level < 4) {
    $brackets = $('.bracket');

    $brackets = $brackets.filter(function (i, el) {
        if ($previousBrackets) {
            if ($.inArray(el, $previousBrackets) >= 0) {
                return false;
            }
        }
        return true;
    });

    if (!$previousBrackets) {
        $previousBrackets = $brackets;
    }
    else {
        $previousBrackets = $.merge($previousBrackets, $brackets);
    }

    $brackets.each(function () {
        $(this).find('li:empty').each(function () {
            buildBracket($(this));
        });
    });

    level++;
}

// remove empty lis until there are as many spots as participants
while (cleanUp()) { }

// add participants to empty lis
var $empty = $('li:empty');
for (var i = 0; i < participants.length; i++) {
    $empty.eq(i).html('<button>' + participants[i] + '</button>');
}

// check if bracket has 2 winners, if so, change to buttons
function changeToButtons() {
    $('.bracket').each(function () {
        var $winner = $(this).children('.winner');
        if ($winner.length === 0) {
            var $winners = $(this).children('li').children('ul').children('.winner');
            if ($winners.length === 2) {
                $winners.each(function () {
                    $(this).html('<button class="winner">' + $(this).text() + '</button>');
                });
            }
        }
    });
}

$(document).on('click', 'button', function () {
    var $ul = $(this).parent().parent();

    if ($(this).hasClass('winner')) {
        $ul = $ul.parent().parent();
    }

    $ul.append($('<li class="winner">' + $(this).text() + '</li>'));

    // replace all buttons on clicked tier with text
    $ul.find('button').each(function () {
        $(this).replaceWith($(this).text());
    });

    changeToButtons();
});