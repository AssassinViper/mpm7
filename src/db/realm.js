import Models from './models';
import Realm from 'realm'
//for release take away the deleteRealmIfMigrationNeeded

const deleteRealmIfMigrationNeeded = true;
const schemaVersion = 0;

export default db = {

  realm:false,

  realmInit : (cb)=>{

    Realm.open({schema:Models, deleteRealmIfMigrationNeeded, schemaVersion})
    .then(realm => {
      db.realm = realm;
      // ...use the realm instance here
      cb(realm);
    })
    .catch(error => {
      // Handle the error here if something went wrong

      alert(error);
    });
  },

  getRealm : ()=>{

    if(!db.realm){
      alert("need to init realm first");
  }

    return db.realm;
  },

  getToken : ()=>{
    return db.realm.objects("User")[0].token;
  }
  
}
