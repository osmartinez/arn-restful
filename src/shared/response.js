module.exports = function(data,multiple = true){
    if(!multiple){
        if(typeof data.recordset === 'undefined' || data.recordset.length == 0){
            return {}
        }
        else{
            return data.recordset[0]
        }
    }

    return data.recordset
}