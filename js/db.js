// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
    console.log(change.type, change.doc.id, change.doc.data());
    
  });
  