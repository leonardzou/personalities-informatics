// Code used from http://www.sanwebe.com/2013/05/select-box-change-dependent-options-dynamically
$(document).ready(function(){

//let's create arrays
    
var race = [
    {display: "Arctic (Siberian, Eskimo)", value: "Arctic (Siberian, Eskimo)"},
    {display: "Caucasian (European)", value: "Caucasian (European)"},
    {display: "Caucasian (Indian)", value: "Caucasian (Indian)"},
    {display: "Caucasian (Middle East)", value: "Caucasian (Middle East)"},
    {display: "Caucasian (North African, Other)", value: "Caucasian (North African, Other)"},
    {display: "Indigenous Australian", value: "Indigenous Australian"},
    {display: "Mixed Race", value: "Mixed Race"},
    {display: "Native American", value: "Native American"},
    {display: "North East Asian (Mongol, Tibetan, Korean Japanese, etc.)", value: "North East Asian (Mongol, Tibetan, Korean Japanese, etc.)"},
    {display: "Other", value: "Other"},
    {display: "Pacific (Polynesian, Micronesian, etc.)", value: "Pacific (Polynesian, Micronesian, etc.)"},
    {display: "South East Asian (Chinese, Thai, Malay, Filipino, etc.)", value: "South East Asian (Chinese, Thai, Malay, Filipino, etc.)"},
    {display: "West African, Bushmen, Ethiopian", value: "West African, Bushmen, Ethiopian"}];
    

var engnat = [
    {display: "Yes", value: "Yes"},
    {display: "No", value: "No"}];

var gender = [
    {display: "Female", value: "Female"},
    {display: "Male", value: "Male"},
    {display: "Other", value: "Other"}];

var hand = [
    {display: "Right", value: "Right"},
    {display: "Left", value: "Left"},
    {display: "Both", value: "Both"}];

var source = [
    {display: "Other source", value: "Other source"},
    {display: "From Google", value: "From Google"},
    {display: "From another page on the test website", value: "From another page on the test website"},
    {display: "From Facebook", value: "From Facebook"},
    {display: "From any url with \".edu\" in its domain name", value: "From any url with \".edu\" in its domain name"}];

var location = [
    {display: "Albania", value: "Albania"},
    {display: "Algeria", value: "Algeria"},
    {display: "American Samoa", value: "American Samoa"},
    {display: "Angola", value: "Angola"},
    {display: "Antigua and Barbuda", value: "Antigua and Barbuda"},
    {display: "Argentina", value: "Argentina"},
    {display: "Asia/Pacific Region", value: "Asia/Pacific Region"},
    {display: "Australia", value: "Australia"},
    {display: "Austria", value: "Austria"},
    {display: "Azerbaijan", value: "Azerbaijan"},
    {display: "Bahamas", value: "Bahamas"},
    {display: "Bahrain", value: "Bahrain"},
    {display: "Bangladesh", value: "Bangladesh"},
    {display: "Barbados", value: "Barbados"},
    {display: "Belgium", value: "Belgium"},
    {display: "Belize", value: "Belize"},
    {display: "Bermuda", value: "Bermuda"},
    {display: "Bhutan", value: "Bhutan"},
    {display: "Bolivia", value: "Bolivia"},
    {display: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina"},
    {display: "Botswana", value: "Botswana"},
    {display: "Brazil", value: "Brazil"},
    {display: "Brunei Darussalam", value: "Brunei Darussalam"},
    {display: "Bulgaria", value: "Bulgaria"},
    {display: "Burkina Faso", value: "Burkina Faso"},
    {display: "Cambodia", value: "Cambodia"},
    {display: "Cameroon", value: "Cameroon"},
    {display: "Canada", value: "Canada"},
    {display: "Cape Verde", value: "Cape Verde"},
    {display: "Cayman Islands", value: "Cayman Islands"},
    {display: "Chile", value: "Chile"},
    {display: "China", value: "China"},
    {display: "Colombia", value: "Colombia"},
    {display: "Costa Rica", value: "Costa Rica"},
    {display: "Croatia", value: "Croatia"},
    {display: "Cyprus", value: "Cyprus"},
    {display: "Czech Republic", value: "Czech Republic"},
    {display: "Denmark", value: "Denmark"},
    {display: "Dominican Republic", value: "Dominican Republic"},
    {display: "Ecuador", value: "Ecuador"},
    {display: "Egypt", value: "Egypt"},
    {display: "El Salvador", value: "El Salvador"},
    {display: "Estonia", value: "Estonia"},
    {display: "Ethiopia", value: "Ethiopia"},
    {display: "Europe", value: "Europe"},
    {display: "Faroe Islands", value: "Faroe Islands"},
    {display: "Fiji", value: "Fiji"},
    {display: "Finland", value: "Finland"},
    {display: "France", value: "France"},
    {display: "Georgia", value: "Georgia"},
    {display: "Germany", value: "Germany"},
    {display: "Ghana", value: "Ghana"},
    {display: "Greece", value: "Greece"},
    {display: "Guadeloupe", value: "Guadeloupe"},
    {display: "Guam", value: "Guam"},
    {display: "Guatemala", value: "Guatemala"},
    {display: "Guernsey", value: "Guernsey"},
    {display: "Guyana", value: "Guyana"},
    {display: "Haiti", value: "Haiti"},
    {display: "Honduras", value: "Honduras"},
    {display: "Hong Kong", value: "Hong Kong"},
    {display: "Hungary", value: "Hungary"},
    {display: "Iceland", value: "Iceland"},
    {display: "India", value: "India"},
    {display: "Indonesia", value: "Indonesia"},
    {display: "Iran, Islamic Republic of", value: "Iran, Islamic Republic of"},
    {display: "Iraq", value: "Iraq"},
    {display: "Ireland", value: "Ireland"},
    {display: "Isle of Man", value: "Isle of Man"},
    {display: "Israel", value: "Israel"},
    {display: "Italy", value: "Italy"},
    {display: "Jamaica", value: "Jamaica"},
    {display: "Japan", value: "Japan"},
    {display: "Jersey", value: "Jersey"},
    {display: "Jordan", value: "Jordan"},
    {display: "Kazakhstan", value: "Kazakhstan"},
    {display: "Kenya", value: "Kenya"},
    {display: "Korea, Republic of", value: "Korea, Republic of"},
    {display: "Kuwait", value: "Kuwait"},
    {display: "Kyrgyzstan", value: "Kyrgyzstan"},
    {display: "Lao People's Democratic Republic", value: "Lao People's Democratic Republic"},
    {display: "Latvia", value: "Latvia"},
    {display: "Lebanon", value: "Lebanon"},
    {display: "Lesotho", value: "Lesotho"},
    {display: "Libyan Arab Jamahiriya", value: "Libyan Arab Jamahiriya"},
    {display: "Lithuania", value: "Lithuania"},
    {display: "Macedonia", value: "Macedonia"},
    {display: "Malawi", value: "Malawi"},
    {display: "Malaysia", value: "Malaysia"},
    {display: "Maldives", value: "Maldives"},
    {display: "Malta", value: "Malta"},
    {display: "Mauritania", value: "Mauritania"},
    {display: "Mauritius", value: "Mauritius"},
    {display: "Mexico", value: "Mexico"},
    {display: "Mongolia", value: "Mongolia"},
    {display: "Montenegro", value: "Montenegro"},
    {display: "Morocco", value: "Morocco"},
    {display: "Mozambique", value: "Mozambique"},
    {display: "Myanmar", value: "Myanmar"},
    {display: "Namibia", value: "Namibia"},
    {display: "Nepal", value: "Nepal"},
    {display: "Netherlands", value: "Netherlands"},
    {display: "New Zealand", value: "New Zealand"},
    {display: "Nicaragua", value: "Nicaragua"},
    {display: "Nigeria", value: "Nigeria"},
    {display: "Northern Mariana Islands", value: "Northern Mariana Islands"},
    {display: "Norway", value: "Norway"},
    {display: "Oman", value: "Oman"},
    {display: "Pakistan", value: "Pakistan"},
    {display: "Palau", value: "Palau"},
    {display: "Panama", value: "Panama"},
    {display: "Papua New Guinea", value: "Papua New Guinea"},
    {display: "Paraguay", value: "Paraguay"},
    {display: "Peru", value: "Peru"},
    {display: "Philippines", value: "Philippines"},
    {display: "Poland", value: "Poland"},
    {display: "Portugal", value: "Portugal"},
    {display: "Puerto Rico", value: "Puerto Rico"},
    {display: "Qatar", value: "Qatar"},
    {display: "Romania", value: "Romania"},
    {display: "Russian Federation", value: "Russian Federation"},
    {display: "Rwanda", value: "Rwanda"},
    {display: "Saint Vincent and the Grenadines", value: "Saint Vincent and the Grenadines"},
    {display: "Saudi Arabia", value: "Saudi Arabia"},
    {display: "Serbia", value: "Serbia"},
    {display: "Singapore", value: "Singapore"},
    {display: "Slovakia", value: "Slovakia"},
    {display: "Slovenia", value: "Slovenia"},
    {display: "South Africa", value: "South Africa"},
    {display: "Spain", value: "Spain"},
    {display: "Sri Lanka", value: "Sri Lanka"},
    {display: "Sudan", value: "Sudan"},
    {display: "Suriname", value: "Suriname"},
    {display: "Sweden", value: "Sweden"},
    {display: "Switzerland", value: "Switzerland"},
    {display: "Syrian Arab Republic", value: "Syrian Arab Republic"},
    {display: "Taiwan", value: "Taiwan"},
    {display: "Tanzania, United Republic of", value: "Tanzania, United Republic of"},
    {display: "Thailand", value: "Thailand"},
    {display: "Trinidad and Tobago", value: "Trinidad and Tobago"},
    {display: "Tunisia", value: "Tunisia"},
    {display: "Turkey", value: "Turkey"},
    {display: "Turks and Caicos Islands", value: "Turks and Caicos Islands"},
    {display: "Uganda", value: "Uganda"},
    {display: "Ukraine", value: "Ukraine"},
    {display: "United Arab Emirates", value: "United Arab Emirates"},
    {display: "United Kingdom", value: "United Kingdom"},
    {display: "United States", value: "United States"},
    {display: "Uruguay", value: "Uruguay"},
    {display: "Uzbekistan", value: "Uzbekistan"},
    {display: "Venezuela", value: "Venezuela"},
    {display: "Vietnam", value: "Vietnam"},
    {display: "Virgin Islands, U.S.", value: "Virgin Islands, U.S."},
    {display: "Zambia", value: "Zambia"},
    {display: "Zimbabwe", value: "Zimbabwe"}];

var age = [
    {display: "13-20", value: "0"},
    {display: "21-30", value: "1"},
    {display: "31-40", value: "2"},
    {display: "41-50", value: "3"},
    {display: "51-60", value: "4"},
    {display: "61-70", value: "5"},
    {display: "71-80", value: "6"},
    {display: "81-90", value: "7"},
    {display: "91-100", value: "8"}];

var personality_scores = [
    {display: "0> x >=1", value: "0"},
    {display: "1> x >=2", value: "1"},
    {display: "2> x >=3", value: "2"},
    {display: "3> x >=4", value: "3"},
    {display: "4> x >=5", value: "4"}];


//If parent option is changed
$("#filter-parent").change(function() {
        var parent = $(this).val(); //get option value from parent 
        
        switch(parent){ //using switch compare selected option and populate child
              case 'race':
                list(race);
                break;
              case 'engnat':
                list(engnat);
                break;              
              case 'gender':
                list(gender);
                break;
              case 'hand':
                list(hand);
                break;
              case 'participant_source':
                list(source);
                break;              
              case 'location':
                list(location);
                break;
              case 'age':
                list(age);
                break;
              case 'extravert':
                list(personality_scores);
                break;              
              case 'neurotic':
                list(personality_scores);
                break;
              case 'agreeable':
                list(personality_scores);
                break;
              case 'conscientious':
                list(personality_scores);
                break;              
              case 'openness':
                list(personality_scores);
                break;
            default: //default child option is blank
                $("#filter-child").html('');  
                break;
           }
});

//function to populate child select box
function list(array_list)
{
    $("#filter-child").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options 
        $("#filter-child").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
    });
}

});

