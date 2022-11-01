import path from "path";
import { promises } from "fs";
import sharpImage from "./resize";

async function check_image_path_exisit(query: any): Promise<any> { 
    let dirPath = path.join(__dirname, '../../..');
    const thumbs_dir = await promises.readdir(`${dirPath}/thumbs`);
    const thumbs_exists = thumbs_dir.includes(`${query.filename}-${query.width}x${query.height}.jpeg`);
    if(thumbs_exists){
        // return the image from thumbs
        const json_response = {response: 200, message: 'Success', path: `${dirPath}/thumbs/${query.filename}-${query.width}x${query.height}.jpeg`};
        return json_response;
    }
    const image_dir = await promises.readdir(`${dirPath}/images`);
    const image_exisit = image_dir.includes(`${query.filename}.jpeg`);
    if (image_exisit){
        const reimage = await sharpImage(`${dirPath}/images/${query.filename}.jpeg`,Number(query.width),
        Number(query.height),`${dirPath}/thumbs/${query.filename}-${query.width}x${query.height}.jpeg`)
        if (reimage){
            // sharp the image and created in  thumbs then return 
            const json_response = {response: 200, message: 'Success', path: `${dirPath}/thumbs/${query.filename}-${query.width}x${query.height}.jpeg`};
            return json_response;
        }
    }
    
    else{
        const json_response = {response: 404, message: 'Image Not found'};
        return json_response ;
}
};


export default check_image_path_exisit;