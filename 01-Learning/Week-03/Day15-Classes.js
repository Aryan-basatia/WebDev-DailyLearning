/*
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function (){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
};
Color.prototype.hex = function (){
    const {r,g,b} = this;
    return '#'+((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
};
Color.prototype.rgba = function (a = 1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
};

const colorObj1 = new Color(12,125,200);
const colorObj2 = new Color(12,125,200); */

//must have constructor call automatically when make instance

 class Color {
    constructor(r,g,b,name) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRgb(){
        const {r,g,b} = this;
        return `${r},${g},${b}`;
    }
    rgb(){
        return `rgb(${this.innerRgb()})`;
    }
    rgba(a = 1.0){
         return `rgba(${this.innerRgb()},${a})`;
     }
    hex(){
        const {r,g,b} = this;
        return '#'+((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
    }
}


const c1 = new Color(25,55,75)
c1.hex();
