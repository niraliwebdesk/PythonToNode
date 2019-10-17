const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    imagePath: { 
        type: String,
        required:false
    }, 
        imageType :{
            type:String
        },
        fileName :{
            type: String,
        required:false
        
        } 
    
    // fileName:{
    //     type:String,
    //     required:false
    // }
});

const upload_image = mongoose.model('Images', PostSchema);
module.exports = upload_image;  

// var Item = new ItemSchema(
//     { img: 
//         { data: Buffer, contentType: String }
//     }
//   );
//   var Item = mongoose.model('Images',ItemSchema);