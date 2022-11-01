import sharp from 'sharp';

async function sharpImage(pathoResizeImage: string, width: number, height: number, pathImageResult: string): Promise<Boolean>{
    let response = false;
    await sharp(pathoResizeImage).resize({ height: height, width: width }).toFile(`${pathImageResult}`)
    .then(function(newFileInfo) {
        response = true;
    })
    .catch(function(err) {
        console.log(err);
        response=false;
    });  
    return response;
} 

export default sharpImage;