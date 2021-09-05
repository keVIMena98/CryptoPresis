# import all necessary packages
from PIL import Image
from IPython.display import display
import random
import json



# this code injects all attributes and their weights
background = ["Blue", "Orange"] 
background_weights = [30, 70]

circle = ["Blue", "Orange"] 
circle_weights = [30, 70]

square = ["Blue","Orange"] 
square_weights = [30, 70]



# Dictionary variable for each trait. 
# Eech trait corresponds to its file name
# Add more shapes and colours as you wish
background_files = {
    "Blue": "blue",
    "Orange": "orange",
}

square_files = {
    "Blue": "blue-square",
    "Orange": "orange-square",     
}

circle_files = {
    "Blue": "blue-circle",
    "Orange": "orange-circle", 
}



# this function generates unique image combinations
TOTAL_IMAGES = 10000 # Number of random unique images we want to generate ( 2 x 2 x 2 = 8)

all_images = [] 

def create_new_image():

    new_image = {} #

    # For each trait category, select a random trait based on the weightings 
    new_image ["Background"] = random.choices(background, background_weights)[0]
    new_image ["Circle"] = random.choices(circle, circle_weights)[0]
    new_image ["Square"] = random.choices(square, square_weights)[0]

    if new_image in all_images:
        return create_new_image()
    else:
        return new_image



# this loop iterates through each attriubte and generates unique combinations based on trait weightings
for i in range(TOTAL_IMAGES): 

    new_trait_image = create_new_image()

    all_images.append(new_trait_image)



# this function returns true if all images are unique
def all_images_unique(all_images):
    seen = list()
    return not any(i in seen or seen.append(i) for i in all_images)

print("Are all images unique?", all_images_unique(all_images))



# this loop iterates through all_images and adds a unique token id to each image
i = 0
for item in all_images:
    item["tokenId"] = i
    i = i + 1



# this code prints all images
print(all_images)



# get traits count
background_count = {}
for item in background:
    background_count[item] = 0

circle_count = {}
for item in circle:
    circle_count[item] = 0

square_count = {}
for item in square:
    square_count[item] = 0

for image in all_images:
    background_count[image["Background"]] += 1
    circle_count[image["Circle"]] += 1
    square_count[image["Square"]] += 1

print(background_count)
print(circle_count)
print(square_count)



# this code generates metadata for all traits
METADATA_FILE_NAME = './metadata/all-traits.json'; 
with open(METADATA_FILE_NAME, 'w') as outfile:
    json.dump(all_images, outfile, indent=4)



# this loop iterates through all_images to generate images
for item in all_images:

    im1 = Image.open(f'./layers/backgrounds/{background_files[item["Background"]]}.jpg').convert('RGBA')
    im2 = Image.open(f'./layers/circles/{circle_files[item["Circle"]]}.png').convert('RGBA')
    im3 = Image.open(f'./layers/squares/{square_files[item["Square"]]}.png').convert('RGBA')

    #Create each composite
    com1 = Image.alpha_composite(im1, im2)
    com2 = Image.alpha_composite(com1, im3)

    #Convert to RGB
    rgb_im = com2.convert('RGB')
    file_name = str(item["tokenId"]) + ".png"
    rgb_im.save("./images/" + file_name)



# this code generates metadata for each images
f = open('./metadata/all-traits.json',) 
data = json.load(f)

IMAGES_BASE_URI = "ADD_IMAGES_BASE_URI_HERE"
PROJECT_NAME = "ADD_PROJECT_NAME_HERE"

def getAttribute(key, value):
    return {
        "trait_type": key,
        "value": value
    }
for i in data:
    token_id = i['tokenId']
    token = {
        "image": IMAGES_BASE_URI + str(token_id) + '.png',
        "tokenId": token_id,
        "name": PROJECT_NAME + ' ' + str(token_id),
        "attributes": []
    }
    token["attributes"].append(getAttribute("Background", i["Background"]))
    token["attributes"].append(getAttribute("Circle", i["Circle"]))
    token["attributes"].append(getAttribute("Square", i["Square"]))

    with open('./metadata/' + str(token_id), 'w') as outfile:
        json.dump(token, outfile, indent=4)
f.close()