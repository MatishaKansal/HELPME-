class Time{
    constructor(){
        this.button = createButton(game.getItemInfo());
    }

    hide(){
        this.button.hide();
    }

    display(){
        this.button.position(200, 200); 
    }
}