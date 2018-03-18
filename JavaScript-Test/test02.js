//誕生の曜日は？

function mySet(){
            myWeekTbl=new Array("日","月","火","水","木","金","土");
            myDate=new Date(document.born.myY.value,document.born.myM.value-1,document.born.myD.value);
            myWeek=myDate.getDay();
            document.born.myMes.value="貴方は"+myWeekTbl[myWeek]+"曜日に生まれました";
        }