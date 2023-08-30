# Download HLS AES-128 Encrypted Videos
Running this tutorial you will: 
- install `curl`
- install `hlsdl`
- install `node` with `crypto-js`
- download an HLS AES-128 encrypted video

## 

## Install curl
Copy this command in the shell:
```sh
sudo apt-get install libcurl4-openssl-dev
```
and press Enter

## Install hlsdl
Copy this command in the shell:
```sh
# Remove the folder if exists
rm -rf hlsdl
# Clone the hlsdl repository
git clone https://github.com/selsta/hlsdl
# Move inside the hlsdl folder
cd hlsdl
# Compile hlsdl
make
# Go back on the parent directory
cd ..
```
and press Enter

## Install node with crypto-js
Copy this command in the shell:
```sh
# Install node and npm
nvm install stable
# Install the crypto-js lib for node
npm i crypto-js
```
and press Enter

## Download an HLS AES-128 encrypted video
Copy this command in the shell:
```sh
# The encrypted keys used to encrypt the video
echo "Enter the user encrypted keys:"  
read encKeys
printf "\n"
# The decrypted keys used to encrypt the video
decKeys=$(node decryptKeys.js $encKeys)
printf "Decoded keys in hex are:\n$decKeys\n\n"

# The m3u8 url to download the video
echo "Enter the m3u8 url:"  
read m3u8url
# The process that download the file and decrypt it
.hlsdl/hlsdl -K $decKeys $m3u8url
```
and press Enter

## Download the file from the Google Cloud Shell folder interface
You can download the `.ts` file directly from the <walkthrough-editor-spotlight spotlightId="file-explorer">file explorer</walkthrough-editor-spotlight>.
Right click on the <walkthrough-editor-open-file filePath="000_hls_output.ts">`.ts file`</walkthrough-editor-open-file> and then click `download`.

## Congratulations
Congratulations!
<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Go back to the previous points if you need to download another `HLS AES-128 encrypted video`.