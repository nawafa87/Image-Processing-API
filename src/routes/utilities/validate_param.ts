  function check_defined (query: any) {
    let json_response;
    //Check if the query is valid and the argments is valid or not 
    if (query.filename == undefined || query.filename.length == 0){
        json_response = {response: 400, message: 'Please provide a filename'};
       return json_response;
    };
    if (query.height == undefined || !check_num(query.height)){
        json_response = {response: 400, message: 'Please provide a height'};
        return json_response;
        
    }
    if ( query.width == undefined || !check_num(query.width)){
        json_response = {response: 400, message: 'Please provide a width'};
        return json_response;
        
    }
    json_response = {response: 200}
    return json_response;
  };



  function check_num(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  export default check_defined