var daveAndKarlienDating = document.getElementById('daveAndKarlienDating');
var daveAndKarlienEngagement = document.getElementById('daveAndKarlienEngagement');
var daveAndKarlienMarriage = document.getElementById('daveAndKarlienMarriage');

var theDate = moment([2014, 5, 27, 22, 0, 0, 0]);
var theEngagement = moment([2015, 6, 17, 14, 30, 0]);
var theMarriage = moment([2016, 2, 19, 16, 52, 0]);

var theDateRecur = theDate.recur().every(1).years();
var theEngagementRecur = theEngagement.recur().every(1).years();
var theMarriageRecur = theMarriage.recur().every(1).years();

setInterval(function(){update();}, 1000);

function update() {
    var canvas = document.getElementById('canvas');
    
    if (theDateRecur.matches(moment())) {
        canvas.style.display = 'block';
        var dating = document.getElementsByClassName('dating'), i;
        for (var i = 0; i < dating.length; i ++) {    
            dating[i].style.display = 'block';
        }
    }    
    if (theEngagementRecur.matches(moment())) {
        canvas.style.display = 'block';
        var engagement = document.getElementsByClassName('engagement'), i;
        for (var i = 0; i < engagement.length; i ++) {
            engagement[i].style.display = 'block';
        }
    }
    if (theMarriageRecur.matches(moment())) {
        canvas.style.display = 'block';
        var marriage = document.getElementsByClassName('marriage'), i;
        for (var i = 0; i < marriage.length; i ++) {
            marriage[i].style.display = 'block';
        }
    }
    
    var marDiff = moment.preciseDiff(moment(), theMarriage);
    var engDiff = moment.preciseDiff(moment(), theEngagement);
    var dateDiff = moment.preciseDiff(moment(), theDate);
    
    daveAndKarlienDating.innerText = dateDiff;
    daveAndKarlienDating.innerHTML = dateDiff;
    
    daveAndKarlienEngagement.innerText = engDiff;
    daveAndKarlienEngagement.innerHTML = engDiff;
    
    daveAndKarlienMarriage.innerText = marDiff;
    daveAndKarlienMarriage.innerHTML = marDiff;
}