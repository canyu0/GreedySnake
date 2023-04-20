import router from '@system.router'
import brightness from '@system.brightness';
import app from '@system.app';
export default {
    data: {
        title: "",
        score:10
    },
    onInit() {
        this.score=this.key1;
    },
    tofirstpage()
    {
        router.replace({uri:'pages/firstpage/firstpage'});
    },
    onShow(){
        brightness.setKeepScreenOn({keepScreenOn:true});
    },
    swipetofirstpage(e)
    {
        if(e.direction=="right")
        {
            console.log("right");
            router.replace({uri:'pages/firstpage/firstpage'});
        }
    }
}
