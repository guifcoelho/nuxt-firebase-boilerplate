module.exports.isEmpty = (object)=>{
    if(Array.isArray(object)){
        return object.length === 0;
    }else{
        for(var key in object) {
            if(object.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}