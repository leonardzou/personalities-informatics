import csv

def listo_lists(filename):
    # Returns a list which contains each row of the .csv file as a list
    #
    # Note: filename assumed to be a .csv file
    with open(filename, 'rU') as in_file:
        contents = csv.reader(in_file, skipinitialspace = True)
        listo_lists = []
        for row in contents:
            listo_lists += [row]
    in_file.close()
    return listo_lists

def country_frequency(listo_lists):
    # Returns a list of countries which have participants of more than 10
    category_list = []
    index = 6
    for list in listo_lists:
        if list != listo_lists[0]:
            category_list.append(list[index])
    dictionary = {}
    for country in category_list:
        if country in dictionary:
            dictionary[country] += 1
        else:
            dictionary[country] = 1
    awesome_list = []
    for item in dictionary:
        if dictionary[item] > 10:
            awesome_list.append(item)
    return awesome_list

def category_list(category,listo_lists):
    # Returns a list which contains each participant's corresponding entry
    # to category selected from a list of lists
    category_list = []
    index = 0
    if category == "race":
        index = 0
    elif category == "age":
        index = 1
    elif category == "engnat":
        index = 2
    elif category == "gender":
        index = 3
    elif category == "hand":
        index = 4
    elif category == "HTTP":
        index = 5
    elif category == "ISO":
        index = 6
    for list in listo_lists:
        if list != listo_lists[0]:
            if list[index] not in category_list:
                category_list.append(list[index])
    return category_list

def index_category(category):
    # Returns the number corresponding to the category's position in the
    # lists of the csv
    if category == "race":
        index = 0
    elif category == "age":
        index = 1
    elif category == "engnat":
        index = 2
    elif category == "gender":
        index = 3
    elif category == "hand":
        index = 4
    elif category == "HTTP":
        index = 5
    elif category == "ISO":
        index = 6
    return index

def index_trait(trait):
    # Returns the number corresponding to the trait's position in the
    # lists of the csv
    if trait == "extraversion":
        index = 7
    elif trait == "neuroticism":
        index = 8
    elif trait == "agreeableness":
        index = 9
    elif trait == "conscientiousness":
        index = 10
    elif trait == "openness":
        index = 11
    return index

def graph_data(dataset, category, trait):
    # Returns a list of lists, which are pairings of each individual
    # subcategory within a category to their average score
    rows = listo_lists(dataset)
    item_list = category_list(category,rows)
    category_index = index_category(category)
    if category_index == 6:
        item_list = country_frequency(rows)
    trait_index = index_trait(trait)
    category_score = []
    for item in item_list:
        count = 0
        accumulated_score = 0
        for list in rows:
            if list[category_index] == item:
                count += 1
                accumulated_score += float(list[trait_index])
        average_score = round((accumulated_score / count), 2)
        if category_index == 1:
            element = [int(item), average_score]
        else:
            element = [item, average_score]
        category_score.append(element)
        category_score.sort()
    return category_score

def kendall_coeff():
    # Calculates the Kendall coefficient for the specific case between
    # age and agreeableness score
    pairings = graph_data("processed_data.csv", "age", "agreeableness")
    concordant = 0
    discordant = 0
    for i in range(0, len(pairings)-1):
        for j in range(i+1, len(pairings)):
            if pairings[i][0] != pairings[j][0]:
                if pairings[i][1] != pairings[j][1]:
                    if pairings[i][0] > pairings[j][0]:
                        if pairings[i][1] > pairings[j][1]:
                            concordant += 1
                        elif pairings[i][1] < pairings[j][1]:
                            discordant += 1
                    elif pairings[i][0] < pairings[j][0]:
                        if pairings[i][1] < pairings[j][1]:
                            concordant += 1
                        elif pairings[i][1] > pairings[j][1]:
                            discordant += 1
    return (2.0*(concordant - discordant))/(len(pairings)*(len(pairings)-1))