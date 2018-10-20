import { firebaseApp } from './firebaseConfig';

const db = firebaseApp.database();
const database = db.ref('database');
export const dbRequestDoctorsRef = database.child('requested_doctors');
export const dbDonorsRef = database.child('blood_donors');
export const dbContactRef = database.child('contact_us');