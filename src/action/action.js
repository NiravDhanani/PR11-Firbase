import { get, getDatabase, ref, set } from "firebase/database";
import app from "../Firebaseauth";

export const ADD_USER = (obj) => {
  return async (dispatch) => {
    try {
      const db = getDatabase(app);
await set(ref(db, `Employee/${obj.userId}`), {
        name: obj.name,
        phone: obj.phone,
        email: obj.email,
        company: obj.company,
        message: obj.message,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const VIEW_USER = () => {
  return async (dispatch) => {
    try {
      const db = getDatabase(app);
      let data = (await get(ref(db, "Employee"))).val();
        if(data){
            dispatch({
                type : 'viewdata',
                payload : data
            })
        }
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

