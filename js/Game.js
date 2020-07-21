class Game{
  constructor(){
  }
  update(itemName){
    database.ref('item').update({
      item: itemName
    });
  }
    
  static getItemInfo(){
    var itemInfoRef = database.ref('item');
    itemInfoRef.on("value",(data)=>{
      Item = data.val();
    })
  }
}