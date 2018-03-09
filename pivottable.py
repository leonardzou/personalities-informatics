import cgi
import cgitb; cgitb.enable()
import re
import csv

## Code from Ivo's lecture for importing csv data
data = csv.DictReader(open('processed_data.csv'))

obj = map(lambda row: { key.strip(): float(value) if re.match(r"^[-+]?\d*\.?\d+([eE][-+]?\d+)?$", value) else value for key, value in row.iteritems() }, data)


## Category arrays for building pivot table
race_cats = ['Arctic (Siberian, Eskimo)',
             'Caucasian (European)',
             'Caucasian (Indian)',
             'Caucasian (Middle East)',
             'Caucasian (North African, Other)',
             'Indigenous Australian','Mixed Race',
             'Native American',
             'North East Asian (Mongol, Tibetan, Korean Japanese, etc.)',
             'Other',
             'Pacific (Polynesian, Micronesian, etc.)',
             'South East Asian (Chinese, Thai, Malay, Filipino, etc.)',
             'West African, Bushmen, Ethiopian']

engnat_cats = ["Yes", "No"]
gender_cats = ["Female", "Male", "Other"]
hand_cats = ["Right", "Left", "Both"]
source_cats = ["Other source","From Google","From another page on the test website","From Facebook","From any url with \".edu\" in its domain name"]
location_cats = ['Albania','Algeria','American Samoa','Angola','Antigua and Barbuda','Argentina',
                 'Asia/Pacific Region','Australia','Austria','Azerbaijan',
                 'Bahamas','Bahrain','Bangladesh','Barbados','Belgium','Belize','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana',
                 'Brazil','Brunei Darussalam','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Chile',
                 'China','Colombia','Costa Rica','Croatia','Cyprus','Czech Republic','Denmark','Dominican Republic',
                 'Ecuador','Egypt','El Salvador','Estonia','Ethiopia','Europe','Faroe Islands','Fiji','Finland','France',
                 'Georgia','Germany','Ghana','Greece','Guadeloupe','Guam','Guatemala','Guernsey','Guyana',
                 'Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran, Islamic Republic of','Iraq',
                 'Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan',
                 'Kazakhstan','Kenya','Korea, Republic of','Kuwait','Kyrgyzstan','Lao People\'s Democratic Republic','Latvia','Lebanon','Lesotho',
                 'Libyan Arab Jamahiriya','Lithuania','Macedonia','Malawi','Malaysia','Maldives','Malta','Mauritania','Mauritius',
                 'Mexico','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Nigeria',
                 'Northern Mariana Islands','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru',
                 'Philippines','Poland','Portugal','Puerto Rico','Qatar','Romania','Russian Federation','Rwanda',
                 'Saint Vincent and the Grenadines','Saudi Arabia','Serbia','Singapore','Slovakia','Slovenia','South Africa','Spain','Sri Lanka','Sudan',
                 'Suriname','Sweden','Switzerland','Syrian Arab Republic','Taiwan','Tanzania, United Republic of','Thailand','Trinidad and Tobago',
                 'Tunisia','Turkey','Turks and Caicos Islands','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States',
                 'Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands, U.S.','Zambia','Zimbabwe']

personality_score_cats = ["0< x <=1","1< x <=2","2< x <=3","3< x <=4","4< x <=5"]
age_cats = ["13-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"]


##########################################################################################
############################# Taking in form variables ###################################
# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
if form.getvalue('row-label'):
    rowlabel = form.getvalue('row-label')
else:
    rowlabel = None
    
if form.getvalue('column-label'):
    columnlabel = form.getvalue('column-label')
else:
    columnlabel = None
    
if form.getvalue('aggregation'):
    aggregation = form.getvalue('aggregation')
else:
    aggregation = None

if form.getvalue('filter-parent'):
    filter_parent = form.getvalue('filter-parent')
else:
    filter_parent = None

if form.getvalue('filter-child'):
    filter_child = form.getvalue('filter-child')
else:
    filter_child = None


############################################################################################
################################ Row and Column stuff ######################################
def assign_str_and_cats(label):
    # columns with numerical values
    if label == "extravert":
        label_string = "Individual Extraversion Score"
        label_categories = personality_score_cats
    elif label == "neurotic":
        label_string = "Individual Neuroticism Score"
        label_categories = personality_score_cats
    elif label == "agreeable":
        label_string = "Individual Agreeableness Score"
        label_categories = personality_score_cats
    elif label == "conscientious":
        label_string = "Individual Conscientiousness Score"
        label_categories = personality_score_cats
    elif label == "openness":
        label_string = "Individual Openness Score"
        label_categories = personality_score_cats
    elif label == "age":
        label_string = "Age"
        label_categories = age_cats
    # columns with string values
    elif label == "race":
        label_string = "Race"
        label_categories = race_cats
    elif label == "engnat":
        label_string = "Is English your native language?"
        label_categories = engnat_cats
    elif label == "gender":
        label_string = "Gender"
        label_categories = gender_cats
    elif label == "hand":
        label_string = "What hand do you use to write with?"
        label_categories = hand_cats
    elif label == "participant_source":
        label_string = "How the participant came to the test - based on HTTP Referer"
        label_categories = source_cats
    elif label == "location":
        label_string = "Participant's technical location - ISO country code"
        label_categories = location_cats
    
    return label_string, label_categories

rowlabel_str, rowlabel_cats = assign_str_and_cats(rowlabel)
columnlabel_str, columnlabel_cats = assign_str_and_cats(columnlabel)
aggregation_str = assign_str_and_cats(aggregation)[0]
if filter_parent != None:
    filter_parent_str = assign_str_and_cats(filter_parent)[0]

## Results are stored in a 2D result[] array, representing the pivot table
## (rows as outer array, columns as inner array, each "cell" being a dictionary
results = []
for i in range(len(rowlabel_cats)):
    results.append([])
    for j in range(len(columnlabel_cats)):
        ## initialise the array
        results[i].append({"value":0.0, "num_ele":0})

#############################################################################################
################################# Aggregation stuff #########################################
def lookup_category_index(valu, label, row_or_col):
    ## for columns that are numerical values, this function
    ## categorises/bins each row's value into the appropriate
    ## category
    if label == "age":
        if valu<=20:
            return 0
        elif valu<=30:
            return 1
        elif valu<=40:
            return 2
        elif valu<=50:
            return 3
        elif valu<=60:
            return 4
        elif valu<=70:
            return 5
        elif valu<=80:
            return 6
        elif valu<=90:
            return 7
        elif valu<=100:
            return 8
    elif label in ["extravert", "neurotic", "agreeable", "conscientious", "openness"]:
        if valu<=1:
            return 0
        elif valu<=2:
            return 1
        elif valu<=3:
            return 2
        elif valu<=4:
            return 3
        elif valu<=5:
            return 4
    else:
        # label column has strings
        if row_or_col == "row":
            return rowlabel_cats.index(valu)
        else:
            return columnlabel_cats.index(valu)

if filter_parent == None:
    for row in obj:
        row_index = lookup_category_index(row[rowlabel_str], rowlabel, "row")
        column_index = lookup_category_index(row[columnlabel_str], columnlabel, "column")
    
        results[row_index][column_index]["value"] += row[aggregation_str]
        results[row_index][column_index]["num_ele"] += 1
else:
    for row in obj:
        meets_filter = False
        if filter_parent in ["extravert", "neurotic", "agreeable", "conscientious", "openness", "age"]:
            if lookup_category_index(row[filter_parent_str], filter_parent, None) == int(filter_child):
                meets_filter = True
        elif row[filter_parent_str] == filter_child:
            meets_filter = True
        
        if meets_filter:
            row_index = lookup_category_index(row[rowlabel_str], rowlabel, "row")
            column_index = lookup_category_index(row[columnlabel_str], columnlabel, "column")

            results[row_index][column_index]["value"] += row[aggregation_str]
            results[row_index][column_index]["num_ele"] += 1

#############################################################################################
###################################### Print Table ##########################################
print "Content-Type: text/html"
print
print "<html>"
print "<head>"
print "<title>Personalities - Pivot Table</title>"
print '<link rel="stylesheet" href="assets/css/main.css" />'
print "<style>"
print "    h2 {"
print "        font-family: Helvetica Neue,Helvetica,Arial,sans-serif"
print "    }"
print "    table {"
print "        font-family: Helvetica Neue,Helvetica,Arial,sans-serif"
print "    }"
print "</style>"
print "</head>"

print "<body>"
print "<h2>Mean " + aggregation_str + "</h2>"
print "    <table border=\"1\" style=\"width:100%\">"
print "        <tr>"
# print header row
print "            <th>"+ rowlabel +"</th>"
for i in columnlabel_cats:
    print "            <th>"+i+"</th>"
print "        </tr>"

for i in range(len(rowlabel_cats)):
    row_not_empty = False
    for k in range(len(columnlabel_cats)):
        if results[i][k]["value"] != 0:
            row_not_empty = True

    if row_not_empty:
        print "        <tr>"
        print "<th>" + rowlabel_cats[i] + "</th>"
        for j in range(len(columnlabel_cats)):
            try:
                mean_val = ((results[i][j]["value"])/(results[i][j]["num_ele"]))
            except:
                mean_val = 0
    
            if mean_val==0:
                print "<td style=\"background-color:#000000\">",
            elif mean_val<=1:
                print "<td style=\"background-color:#f7fcf0\">",
            elif mean_val<=1.5:
                print "<td style=\"background-color:#e0f3db\">",
            elif mean_val<=2:
                print "<td style=\"background-color:#ccebc5\">",
            elif mean_val<=2.5:
                print "<td style=\"background-color:#a8ddb5\">",
            elif mean_val<=3:
                print "<td style=\"background-color:#7bccc4\">",
            elif mean_val<=3.5:
                print "<td style=\"background-color:#4eb3d3\">",
            elif mean_val<=4:
                print "<td style=\"background-color:#2b8cbe\">",
            elif mean_val<=4.5:
                print "<td style=\"background-color:#0868ac\">",
            elif mean_val<=5:
                print "<td style=\"background-color:#084081\">",
            print "%.3f</td>" % mean_val
    
        print "        </tr>"
print "    </table>"

print "</body>"
print "</html>"

