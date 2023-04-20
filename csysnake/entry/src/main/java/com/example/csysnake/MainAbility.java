package com.example.csysnake;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        setSwipeToDismiss(true);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
