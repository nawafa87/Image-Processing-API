import express from 'express';
import path from 'path';
import check_defined from './utilities/validate_param';
import check_image_path_exisit from './utilities/validate_filename';


const routes = express.Router();

routes.get('/image', async (req, res) => {
    let get_query = req.query
    let valdaite_query = check_defined(get_query);
    if (valdaite_query.response == 400){
        return res.status(valdaite_query.response).json(valdaite_query.message);
    }
    else{
        const check_image = await check_image_path_exisit(get_query);
        if(check_image.response == 404){
            return res.status(check_image.response).json(check_image.message);
            
        }    
        return res.status(check_image.response).sendFile(path.resolve(check_image.path));
    }
});

export default routes;