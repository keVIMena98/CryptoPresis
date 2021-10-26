# import libraries
import os, glob
import pandas as pd

# Get the current working directory
cwd = os.getcwd()

# Print the current working directory
print("Current working directory: {0}".format(cwd))

# set working directory
path = "/Users/Kevin/Nordlocker/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/"

# merge all whitelist files
all_files = glob.glob(os.path.join(path, "*_whitelist_form.csv"))
df_from_each_file = (pd.read_csv(f, sep=',') for f in all_files)
df_merged   = pd.concat(df_from_each_file, ignore_index=True)
df_merged.to_csv( "merged.csv")

# create dataframe using pandas
whitelist_data = pd.read_csv(
    r'/Users/Kevin/Nordlocker/GitHub/CryptoPresis/cryptopresis-smart-contracts/whitelist/merged.csv', header = 0)
# convert dataframe to list and set to variable
whitelist = list(whitelist_data.Address)

# replace single quotes with double qoutes and set new variable
whitelist_array = str(whitelist).replace("'", '"')
print(whitelist_array)

# above code returns the following list to copy & paste into smart contract
whitelist_addresses = ["0x0Ba79a5aBe9aa1bB28B02c6412ba59b90F1DB489", "0xA4A9C4D861b4e3f0Ca436B82D99517FD8AADEdA5", 
"0x23E56392e605fE5D2eDDE803Be5070bA27a6Cae3", "0xDB7f1A997313a676990c59b96C125a26bdF79459", 
"0x00c0760336855d069cB09f0eE7857464BAb5EB30", "0x3c655AEDABD12a7C48C2f75de75f186B2D49722A", 
"0x17C2549B78439F056024EF500149EE75D818Bf7E", "0xc960Cfd4b93bC0cbba8248031859Fe8563033Df6", 
"0xEa70E7BCa0F8A0Ea9049CfaB7c8127aedBD25885", "0x5E05f0fd512E52e595BAaA607d3deBC10b213952", 
"0x0a240449b096b52c83ae5ce3b5166eb173afa23e", "0x66EDBB15621F1Ba62828D07885e12263ca184B7A", 
"0x495f947276749Ce646f68AC8c248420045cb7b5e", "0x7039F4978D4Dc20211F10E60797B8bb9592268c4", 
"0x04B6B98333C9346Ba9D0245dAE34942d390e1A80", "0xb9421D318F8917605aEc9bDd33437CD5DB6d873d", 
"0xD9d12559B86A11dA9d248204991b4e2A410E36Ad", "0x5277BE068Ed783fF99d713fA23EcD521c5365C9f", 
"0x740B3d3A5cE317ECe939f23355d434cAA07BB8B5", "0x00c0760336855d069cB09f0eE7857464BAb5EB30", 
"0xD22d349BdEDF95Be5adD949bC283924a987986C9", "0xaf8935a9a165649119Ca2FFeCe6Ee7763B0A4bE8", 
"0xab0a8BAA2245f4bBe9c4a577d2033eE81c10A8Aa", "0x935889AaD699F56B1384a07456Ce8Ffe41952915", 
"0x6Ae6f494174582EE58A4B161Ff5a3aDee1CEc7df"]

whitelist_addresses.range()

