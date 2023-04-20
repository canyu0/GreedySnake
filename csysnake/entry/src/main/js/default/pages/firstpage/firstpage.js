import router from '@system.router'
import brightness from '@system.brightness';
import app from '@system.app';
export default {
    data: {
        title: "Hello HarmonyOS",
        isHarmonyOS: true
    },
    toindex()
    {
        router.replace({uri:'pages/index/index'})
    },
    tosetting()
    {
        router.replace({uri:'pages/setting/setting'})
    },
    switchTitle() {
        let that = this;
        that.title = that.isHarmonyOS ? "Hello World" : "Hello HarmonyOS";
        that.isHarmonyOS = !that.isHarmonyOS;
    },
    onShow(){
        brightness.setKeepScreenOn({keepScreenOn:true});
    },
    quit(e)
    {
        if(e.direction=="right")
        {
            console.log("quit");
            app.terminate();
        }
    }
}