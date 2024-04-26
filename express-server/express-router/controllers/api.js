
const jsonData = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Joe Doe'
    }
]


const getAllData = ( req, res ) => {
    return res.status(200).json({ success: true, data: jsonData});
}


const findRecord = ( req, res ) => {
    const existsRecord = jsonData.find( d => d.id == Number( req.params.id ));
    if( existsRecord ){
        return res.status(200).json({ success: true, data: existsRecord });
    }
    return res.status(404).json({ success: false, message:"No record found" });
}

module.exports = {
    getAllData,
    findRecord
}