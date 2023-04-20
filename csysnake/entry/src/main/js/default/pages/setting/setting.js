import router from '@system.router'
import brightness from '@system.brightness';
import app from '@system.app';
export default {
    data: {
        title: "Hello HarmonyOS",
        isHarmonyOS: true
    },

    todifficulty(){
        //router.replace({uri: 'pages/index/index'})
    },
    tocomingsoon()
    {
        router.replace({uri: 'pages/comingsoon/comingsoon'});
    },
    swipetofirstpage(e)
    {
        if(e.direction=="right")
        {
            console.log("aaa");
            router.replace({uri:'pages/firstpage/firstpage'});
        }

    },
    tofirstpage()
    {

        router.replace({uri:'pages/firstpage/firstpage'});

    },
    onShow(){
        brightness.setKeepScreenOn({keepScreenOn:true});
    }
}