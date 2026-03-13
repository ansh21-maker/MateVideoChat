import {now, Schema}from "mongoose";


const meetingSchema=new Schema(
 {
    user_id:{type:String},
    meetingCode:{type:String, require:true},
    date:{type:Date, default:Date.now, required:true };
 }
)

const Meeting=moogoose.model("Meeting", meetingSchema);
export {meetingSchema}; 