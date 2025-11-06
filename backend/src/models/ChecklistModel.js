// backend/src/models/ChecklistModel.js
import mongoose from "mongoose";

const tempSchema = new mongoose.Schema({
  time: String,
  readings: [Number], // flexible: 1..N readings per row
});

const deliverySchema = new mongoose.Schema({
  supplier: String,
  product: String,
  time: String,
  surfTemp: String,
  rejectedIfAny: String,
  sign: String,
});

const cookingSchema = new mongoose.Schema({
  itemCooked: String,
  endCookingTemperature: Number,
  time: String,
  chillingMethod: String,
  chillingDuration: String,
  endTemperature: Number,
});

const dishwasherCheckSchema = new mongoose.Schema({
  period: { type: String, enum: ["AM", "PM"], required: true }, // AM or PM
  time: String,
  temp: String,
  cleansingOk: { type: Boolean, default: false },
  chemicalSufficient: { type: Boolean, default: false },
  closingCheck: { type: Boolean, default: false },
  initial: String,
});

const openingCheckSchema = new mongoose.Schema({
  label: String,
  yes: { type: Boolean, default: false },
});

const closingCheckSchema = new mongoose.Schema({
  label: String,
  yes: { type: Boolean, default: false },
});

const checklistSchema = new mongoose.Schema(
  {
    name: String,
    date: { type: String, required: true }, // YYYY-MM-DD string (manual)
    dishwasherChecks: [dishwasherCheckSchema], // NEW: AM/PM dishwasher checks
    openingChecks: [openingCheckSchema],
    fridgeTemps: [tempSchema], // rows for AM/PM with reading arrays
    deliveryDetails: [deliverySchema],
    cookingDetails: [cookingSchema],
    wastageReport: [
      {
        itemName: String,
        session: String,
        reason: String,
        quantity: String,
        sign: String,
      },
    ],
    incidentReport: [
      {
        nature: String,
        actionTaken: String,
      },
    ],
    closingChecks: [closingCheckSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Checklist", checklistSchema);
