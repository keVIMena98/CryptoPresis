# import libraries
import csv
import os, glob
import pandas as pd

# set working directory
path = "/Users/Kevin/Nordlocker/Data Science/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/"

# merge all whitelis files
all_files = glob.glob(os.path.join(path, "*_whitelist_form.csv"))
df_from_each_file = (pd.read_csv(f, sep=',') for f in all_files)
df_merged   = pd.concat(df_from_each_file, ignore_index=True)
df_merged.to_csv( "merged.csv")

# create dataframe using pandas
cabinet_data = pd.read_csv(
    r'/Users/Kevin/Nordlocker/Data Science/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/cabinet_whitelist_form.csv', header = 0)
# convert dataframe to list and set to variable
cabinet_wl = list(cabinet_data.Address)

# replace single quotes with double qoutes and set new variable
cabinet_whitelist = str(cabinet_wl).replace("'", '"')
print(cabinet_whitelist)






presale_data = pd.read_csv(
    r'/Users/Kevin/Nordlocker/Data Science/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/presale_whitelist_form.csv', header = 0)
presale_wl = list(presale_data.Address)

presale_whitelist = str(presale_wl).replace("'", '"')
print(presale_whitelist)


data = pd.read_csv(
    r'/Users/Kevin/Nordlocker/Data Science/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/fmc_whitelist_form.csv', header = 0)
fmc_wl = list(data.Address)

fmc_whitelist = str(fmc_wl).replace("'", '"')
print(fmc_whitelist)

