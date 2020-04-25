function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("musica", true);
VideoSetVolume("video",0);
}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
GotoSceneNameAndPlay("Scene2",0);
SoundPlay("sonido",false);

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.On Click";
VideoPause("video");
SoundPlay("sonido",false);
}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.On Release";
VideoResume("video");
SoundPlay("sonido",false);
}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.On Click";
VideoSetVolume("video",100);
SoundPlay("sonido",false);
}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.On Release";
VideoSetVolume("video",0);
SoundPlay("sonido",false);
}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene1",0);
SoundPlay("sonido",false);

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.On Click";
SoundPause("musica");
SoundPlay("sonido",false);

}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.On Release";
SoundPlay("musica",false);
SoundPlay("sonido",false);
}

