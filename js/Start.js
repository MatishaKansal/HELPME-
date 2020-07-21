class Start{
    constructor(){
        this.food = createButton("Volunteer For Food");   
        this.food.style('height', '200px');
        this.food.style('width', '200px');
        this.food.style('color', 'black');
        this.food.style('background', 'orange');
        this.ngo = createButton("NGO");
        this.ngo.style('height', '200px');
        this.ngo.style('width', '200px');
        this.ngo.style('color', 'black');
        this.ngo.style('background', 'rgb(22, 150, 248)');
        this.delivery = createButton("Volunteer For Delivery");
        this.delivery.style('height', '200px');
        this.delivery.style('width', '200px');
        this.delivery.style('color', 'black');
        this.delivery.style('background', 'green');
        this.greeting = createElement("h1");
        this.greeting.style('color', 'darkBlue');

    }

    hide(){
        this.food.hide();
        this.ngo.hide();
        this.delivery.hide();
        this.greeting.hide();
    }

    display(){
        this.greeting.style.color = "purple";
        this.greeting.html("HELP ME!");
        this.greeting.position(380, 50);
        this.food.position(200, 200);
        this.ngo.position(400, 400);
        this.delivery.position(600, 200);
        this.food.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form3 = new Food();
            form3.display();
        });
        this.ngo.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form1 = new Form();
            form1.display();
        });
        this.delivery.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form2 = new Delivery();
            form2.display();
        });

    }
}