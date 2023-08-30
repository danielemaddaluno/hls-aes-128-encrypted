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
The following command will:
- remove `hlsdl` the folder if exists
- clone the `hlsdl` repository
- change directory, inside the hlsdl folder
- clone the `hlsdl` repository
- compile hlsdl
- go back on the parent directory

Copy the command in the shell:
```sh
rm -rf hlsdl
git clone https://github.com/selsta/hlsdl
cd hlsdl
make
cd ..
```

and press Enter

## Install node with crypto-js
The following command will:
- install node and npm
- install the crypto-js lib for node

Copy the command in the shell:
```sh
nvm install stable
npm i crypto-js
```
and press Enter

## Download an HLS AES-128 encrypted video
The following command will:
- give the encrypted keys used to encrypt the video. Use something like [The Stream Detector](https://chrome.google.com/webstore/detail/the-stream-detector/iakkmkmhhckcmoiibcfjnooibphlobak) to find the URI streams, then look for something like: `EXT-X-KEY:METHOD=AES-128,URI=`, open that URI and copy the response, that will be the encrypted keys.
- compute the decrypted keys used to encrypt the video
- insert the he m3u8 url to download the video. You can easily get that using [The Stream Detector](https://chrome.google.com/webstore/detail/the-stream-detector/iakkmkmhhckcmoiibcfjnooibphlobak).
- launch hlsdl to download the video file decrypted

Copy the command in the shell:
```sh
echo "Enter the user encrypted keys:"  
read encKeys
printf "\n"

decKeys=$(node decryptKeys.js $encKeys)
printf "Decoded keys in hex are:\n$decKeys\n\n"

echo "Enter the m3u8 url:"  
read m3u8url

cd hlsdl
./hlsdl -K $decKeys $m3u8url
cd ..
mv --backup=numbered hlsdl/000_hls_output.ts ./
```
and press Enter

## Download the file from the Google Cloud Shell folder interface
You can download the `.ts` file directly from the <walkthrough-editor-spotlight spotlightId="file-explorer">file explorer</walkthrough-editor-spotlight>.
Right click on the `.ts file` and then click `download`.

## Congratulations
Congratulations!
<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Go back to the previous points if you need to download another `HLS AES-128 encrypted video`.