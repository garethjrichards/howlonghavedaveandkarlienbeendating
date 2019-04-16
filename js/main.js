var daveAndKarlienDating = document.getElementById('daveAndKarlienDating');
var daveAndKarlienEngagement = document.getElementById('daveAndKarlienEngagement');
var daveAndKarlienMarriage = document.getElementById('daveAndKarlienMarriage');

// Month is 0 indexed!!
var theDate = moment({year:2014, month: 5, day: 27, hour: 22}); // 27th June 2014 (Facebook says 26th of July but Dave knows the truth!)
var theEngagement = moment({year:2015, month:6, day:17, hour:14, minute:30}); // 17th July 2015
var theMarriage = moment({year:2016, month:2, day:19, hour:16, minute:52}); // 21st March 2016

var theDateRecur = moment(theDate).year(moment().year());
var theEngagementRecur = moment(theEngagement).year(moment().year());
var theMarriageRecur = moment(theMarriage).year(moment().year());

update(); //initial run so that times are displayed immediately

setInterval(function () {
    update();
}, 1000);

function update() {
    var canvas = document.getElementById('canvas');

    if (moment().isSame(theDateRecur, 'day')) {
        canvas.style.display = 'block';
        var dating = document.getElementsByClassName('dating'), i;
        for (var i = 0; i < dating.length; i++) {
            dating[i].style.display = 'block';
        }
    }
    if (moment().isSame(theEngagementRecur, 'day')) {
        canvas.style.display = 'block';
        var engagement = document.getElementsByClassName('engagement'), i;
        for (var i = 0; i < engagement.length; i++) {
            engagement[i].style.display = 'block';
        }
    }
    if (moment().isSame(theMarriageRecur, 'day')) {
        canvas.style.display = 'block';
        var marriage = document.getElementsByClassName('marriage'), i;
        for (var i = 0; i < marriage.length; i++) {
            marriage[i].style.display = 'block';
        }
    }

    var marDiff = moment().preciseDiff(theMarriage);
    var engDiff = moment().preciseDiff(theEngagement);
    var dateDiff = moment().preciseDiff(theDate);

    daveAndKarlienDating.innerText = dateDiff;
    daveAndKarlienEngagement.innerText = engDiff;
    daveAndKarlienMarriage.innerText = marDiff;
}
