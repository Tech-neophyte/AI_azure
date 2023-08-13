function skillsmember() {
    var skills = document.getElementById("skills");
    var skillsvalue = skills.options[skills.selectedIndex].value;
    var skillsname = skills.options[skills.selectedIndex].text;
    var skillslist = document.getElementById("skillslist");
    var skillslistvalue = skillslist.value;
    if (skillslistvalue.indexOf(skillsvalue) == -1) {
        skillslist.value += skillsvalue + ",";
        var skillslisttext = document.getElementById("skillslisttext");
        skillslisttext.innerHTML += "<span class='badge badge-primary'>" + skillsname + "</span> ";
    }
}