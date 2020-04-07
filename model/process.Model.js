const mongoose = require("mongoose");

var ProcessSchema = new mongoose.Schema({
     
    clientName: {
        type : String,
        
    },
    Buss_Unit: {
        type : String,
       
    },
    Sub_Buss_Unit: {
       type : String,
       
    },
    Proc_Name: {
        type: String,
        
    },
    Proc_Id: {
        type: String,
        unique: true,
       
    },
    Proc_Desc: {
        type: String,
       
    },
    Mon_Vol: {
        type: Number,
       
    },
    AHT: {
        type: Number,
        
    },
    FTE: {
        type: Number,
       
    },
    SLA: {
        type: String,
       
    },
    TAT: {
        type: String,
        
    },
    App_Used: {
        type: String,
       
    },
    Doc_Present: {
        type:String,
       
    },
    Rule_Based: {
        type:String,
       
    },
    Stuc_Data: {
        type: String,
       
    },
    Inp_Data_Type: {
        type: String,
        
    },
    Amenable_RPA: {
        type: String,
       
    },
    Amenable_Cognitive: {
        type: Number,
      
    },
    Automation_Ready: {
        type: String,
       
    },
    AP_Perc: {
        type: Number,
    },
    FTE_Benefit: {
        type: Number,
    },
    Status: {
        type: String,
    }
} ,
     {
        toObject: {
          virtuals: true,
        },
        toJSON: {
          virtuals: true,
        },
});

mongoose.model("Process", ProcessSchema);