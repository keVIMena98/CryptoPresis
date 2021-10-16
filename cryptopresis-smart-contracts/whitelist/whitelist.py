import pprint as pp
import pandas as pd
import csv

# test terminal
print("hello world")

# whitelisted addresses list
whitelist = []

# code to create whitelist list with csv
with open('cabinet_whitelist_form.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter='", "')
    for column in csv_reader: # .columns['addresses']
        col_ls = csv_reader[column].tolist()
        whitelist.append(col_ls)
    print(whitelist)

# create dataframe from csv file
with open('cabinet_whitelist_form.csv') as csv_file:
    wl_data = pd.read_csv(csv_file, index_col='username')
    wl_df = pd.DataFrame(wl_data, columns= ['username','addresses'])
print(wl_df)

# code to create whitelist list with pandas
for col in wl_df.columns:
    # convert pandas series to list
    col_ls = wl_df[col].tolist()
    # append column list to ls
    whitelist.append(col_ls)
# print the created list
print(whitelist)


# r'C:\Users\CICC\Documents\GitHub\NFT-Project\cryptopresis-smart-contracts\whitelist\cabinet_whitelist_form.csv'