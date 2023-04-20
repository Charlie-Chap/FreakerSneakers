function selectfonts()
{
   var s=document.getElementById('selectfonts');
   var selectfonts = s.option[s.selectedIndex].value;
   if(selectfonts != "")
   document.getElementById('myTextarea').style.fontFamily = selectfonts;
   else alert("Please choose a font...");
}
selectfonts();
