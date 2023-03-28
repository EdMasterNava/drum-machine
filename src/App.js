import React from 'react';
import Display from './components/Display';
import Pads from './components/Pads';
import './components/css/App.css';

const banks = {1: 
  {Q: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/18[kb]80s-COWBELL1.wav.mp3', name: 'COWBELL'},
   W: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/24[kb]80s-TAMB1.wav.mp3', name: 'TAMBOURINE'},
   E: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/42[kb]80s-HHOPEN2.wav.mp3', name: 'OPEN HAT'},
   A: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-LOWCONGA.wav.mp3', name: 'LOW CONGA'},
   S: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-MIDCONGA.wav.mp3', name: 'MID CONGA'},
   D: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/13[kb]80s-HICONGA.wav.mp3', name: 'HI CONGA'},
   Z: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3', name: 'KICK'},
   X: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/19[kb]80s-SNARE1.wav.mp3', name: 'SNARE'},
   C: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/11[kb]80s-HHCLOSE1.wav.mp3', name: 'CLOSED HAT'}}, 
 2: 
  {Q: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/25[kb]mattel-tom20.wav.mp3', name: 'LASER HI'},
   W: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/26[kb]mattel-tom19.wav.mp3', name: 'LASER MID'},
   E: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/27[kb]mattel-tom18.wav.mp3', name: 'LASER LOW'},
   A: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/42[kb]mattel-tom10.wav.mp3', name: 'DEEP'},
   S: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/94[kb]mattel-hho2.wav.mp3', name: 'CRASH'},
   D: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/25[kb]mattel-hh1.wav.mp3', name: 'CLOSED HAT'},
   Z: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Commodore%2064%208bit%20SID%20Drums/17[kb]c64sid-kick11.wav.mp3', name: 'KICK'},
   X: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Commodore%2064%208bit%20SID%20Drums/12[kb]c64sid-Sou013.wav.mp3', name: 'SNARE'},
   C: 
     {link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Commodore%2064%208bit%20SID%20Drums/28[kb]c64sid-Sou018.wav.mp3', name: 'SCRATCH'}}};

class App extends React.Component {
constructor(props){
super(props);
this.state = {
pad: '',
name: 'SAMPLER',
bank: 1
}
this.togglePlay = this.togglePlay.bind(this);
this.updateState = this.updateState.bind(this);
this.keyPressed = this.keyPressed.bind(this);
this.toggleBank = this.toggleBank.bind(this);
}
componentDidMount() {
document.addEventListener('keydown', this.keyPressed);
}
componentWillUnmount() {
document.removeEventListener('keydown', this.keyPressed);
}
keyPressed(event){
const upperCase = event.key.toUpperCase();
if("QWEASDZXC".includes(upperCase)){
this.setState({pad: upperCase, name: banks[this.state.bank][upperCase]['name']}, () => this.togglePlay());
} 
}
updateState(event){
this.setState({pad: event.currentTarget.id, name: banks[this.state.bank][event.currentTarget.id]['name']}, () => this.togglePlay());
}
togglePlay() {
this.audio = new Audio(banks[this.state.bank][this.state.pad]['link']);
this.audio.play();
}
toggleBank(){
if(this.state.bank === 1){
this.setState({bank: 2});
}else{
this.setState({bank: 1})
}
}

render() {
return (
<div id="background">
<div id="drum-machine-border">
<div id="drum-machine">
<Display name={this.state.name} bank={this.state.bank} toggleBank={this.toggleBank}/>
<Pads updateState={this.updateState} keyPressed={this.keyPressed} />
</div>
</div>
</div>
);
}
}

export default App;
