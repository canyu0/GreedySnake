import router from '@system.router';
import brightness from '@system.brightness';
import app from '@system.app';
var a = [];
var b=[];
var snake=[];
var connection=[];
var timer1=null;
var bean=[];
for (var i = 0; i < 150; i ++) { b[i]=true;}
for (var i = 0; i < 150; i ++) {  //行循环
    a[i]=i;
    if(i<13){
        b[i]=false;
    }
    if(i>119){b[i]=false}
    snake[i]=false;
    connection[i]=-1;
    bean[i]=false;
}
b[4]=b[5]=b[6]=b[125]=b[126]=b[127]=true;
b[20]=b[21]=b[22]=b[32]=b[99]=b[109]=b[110]=b[111]=b[119]=false;
snake[55]=snake[56]=snake[57]=true;
connection[55]=connection[56]=connection[57]=1;
bean[48]=true;
var beanpos=48;
var head=57;
var tail=55;
var score1=0;
var way=1;
var unclicked=true;
function trans(x,y){
    if(y==1){
        return x+1;
    }
    else if(y==2){
        return x-11;
    }
    else if(y==3){
        return x-1;
    }
    else if(y==0){
        return x+11;
    }
};
function check(h,w,bb,ss){
    var t=trans(h,w);
    if(bb[t]==false){
        console.log("&*"+h+w+bb);
        return true;
        }
    if(w==2){
        if(h==4)return true;
        if(h==5)return true;
        if(h==6)return true;
    }
        if(w==1){
            if(h==43)return true;
            if(h==54)return true;
            if(h==65)return true;
            if(h==76)return true;
            if(h==87)return true;
        }
        if(w==3){
            if(h==44)return true;
            if(h==55)return true;
            if(h==66)return true;
            if(h==77)return true;
            if(h==88)return true;
        }
        if(ss[t]){
            console.log("&"+h+" "+w);
            return true;
        }
        return false;
}
var snakecolorlist=['snake1','snake2','snake3','snake4','snake5','snake6','snake7','snake8','snake9','snake10','snake11','snake12'];
var snakecolor='snake1';
export default {
    data: {
        a,
        b,
        snake,
        way,
        head,
        tail,
        bean,

        snakecolor,
        step:1
    },
    onInit() {

    },
    leftclick(){
        if(unclicked) {this.way=(this.way+1)%4;unclicked=false;}
        //console.log(this.way);
    },
    rightclick(){
        if(unclicked) {this.way=(this.way+3)%4;unclicked=false;}
        //console.log(this.way);
    },

    run1(){
        if(check(this.head,this.way,this.b,this.snake)){
            clearInterval(timer1);
            timer1=null;
            console.log("game over");
            router.replace({uri:'pages/gameover/gameover',
                params:{"key1":score1}
            });
        }else{
            this.step=(this.step+1)%12;

            this.snakecolor=snakecolorlist[this.step];
            console.log(this.step);
            console.log(this.snakecolor);
            connection[this.head]=this.way;
            this.head=trans(this.head,this.way);
            this.snake.splice(this.head,1,true);
            if(this.head!=beanpos){

                var temp=this.tail;
                this.snake.splice(this.tail,1,false);
                this.tail=trans(this.tail,connection[this.tail]);
                connection[temp]=-1;
            }
            else{
                console.log("here");
                this.bean.splice(beanpos,1,false);
                //bean[beanpos]=false;
                while(1)
                {
                    console.log(beanpos);
                    beanpos=Math.floor(Math.random()*130);
                    if(b[beanpos]==true && this.snake[beanpos]==false){
                        this.bean.splice(beanpos,1,true);
                        break;
                    }
                }
                score1++;
            }
            unclicked=true;
            console.log(this.head);
            console.log("**");
            console.log(beanpos);
            console.log("&&");
        }

    },
    onShow(){
        timer1=setInterval(this.run1,500) ;
        brightness.setKeepScreenOn({keepScreenOn:true});
    },
    tofirstpage(e)
    {
        if(e.direction=="right")
        {
            router.replace({uri:'pages/firstpage/firstpage'});
        }

    }
}
