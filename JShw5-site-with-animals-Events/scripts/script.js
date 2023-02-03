

var accordionTab = document.querySelectorAll('.accordion_tab');
var accordionContent = document.querySelectorAll('.accordion_content');

for (let i = 0; i < accordionTab.length; i++) {
    accordionTab[i].addEventListener('click', function (){
        for (let j = 0; j < accordionTab.length; j++) {
            accordionTab[j].classList.remove('active_tab');
            accordionContent[j].classList.remove('active_content');
        }
        accordionTab[i].classList.add('active_tab');
         accordionContent[i].classList.add('active_content');
    });
    
}


