import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import { 
  ThemeProvider,
  Paper,
  createMuiTheme,
  Button,
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core';
import WhereToVoteTwoToneIcon from '@material-ui/icons/WhereToVote';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import HackerEarth from './ide'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import back from './back.jpg'
import backl from './backl.jpg'
import arial from './fonts/ARIAL.TTF'
import cute from './fonts/Randomly Cute.otf'



function App() {
  // eslint-disable-next-line
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("light", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "light" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("light"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    } 
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  const theme= createMuiTheme({
    palette:{
      type: darkMode ? "dark" : "light"
      ,
    },
  });
  const [lang, setLang] = useState([
    {
      name:"CPP",
      v:1
    },
    {
      name:"PYTHON",
      v:2
    },
    {
      name:"CSHARP",
      v:3
    },
    {
      name:"JAVA",
      v:4
    },
    {
      name:"JAVASCRIPT",
      v:5
    },
    {
      name:"JAVASCRIPT_NODE",
      v:6
    },
    {
      name:"PHP",
      v:7
    },
    {
      name:"RUBY",
      v:8
    }
  ],[])

  const [curr, setCurr] = useState(0)
  const [source,setSource]=useState({
    value:''
  })
  const [output,setOutput]=useState({
    value:''
  })
  const codeRef = React.createRef()
  const stdinRef = useRef()
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`${codeRef.current.value}`)
    setOutput({
      value:"Compiling and calculating result ..."
    })
    const s=`${codeRef.current.value}`
    //await setSource( `${codeRef.current.value}`)
    await console.log(s)
   // await console.log(typeof(sourcecode))
   const i=`${stdinRef.current.value}`
     
     
      
      const hackerEarth = new HackerEarth(
        '89d6d425a2229325e68ae2bbe0c12d49dcd76a63', //client secret key
        ''
    );
    
    
    const config = {};
    
    config.time_limit = 1;
    
    config.memory_limit = 323244;
    
    config.source = s; 
    
    config.input = i;

    config.lang=`${lang[curr].name}`


    
    hackerEarth.run(config, (err, res) => {
        if (err) {
          console.log(`${lang[curr].name}`)
            console.log(err);
        }
        else{
        //console.log(config.source)
        //console.log(res)
        if(JSON.parse(res).compile_status!=="OK"){
          setOutput({
            value:"Your code had an error: "+JSON.parse(res).compile_status
          })
        }
        console.log(JSON.parse(res));
        setOutput({
          value:JSON.parse(res).run_status.output
        })
      }
    });
  
  
  };
  const handleSubmit2 = async(e) => {
    e.preventDefault();
    console.log(`${codeRef.current.value}`)
    const s=`${codeRef.current.value}`
    //await setSource( `${codeRef.current.value}`)
    setOutput({
      value:"Compiling and checking for errors ..."
    })
    await console.log(s)
   // await console.log(typeof(sourcecode))
   const i=`${stdinRef.current.value}`
     
     
      
      const hackerEarth = new HackerEarth(
        '89d6d425a2229325e68ae2bbe0c12d49dcd76a63', //client secret key
        ''
    );
    
    
    const config = {};
    
    config.time_limit = 1;
    
    config.memory_limit = 323244;
    
    config.source = s; 
    
    config.input = i;

    config.lang=`${lang[curr].name}`


    
    hackerEarth.compile(config, (err, res) => {
      if (err) {
        console.log(`${lang[curr].name}`)
          console.log(err);
      }
      else{
      //console.log(config.source)
      //console.log(res)
      if(JSON.parse(res).compile_status!=="OK"){
        setOutput({
          value:"Your code had an error: "+JSON.parse(res).compile_status
        })
      }
      else{
        setOutput({
          value:"Your code compiled succesfully!!"
        })
      }
      }
    });
  };

  const toClear=(e)=>{
    e.preventDefault();
    const s=""
    codeRef.current.value=s
  }

  const onLangChange=async(event)=>{
    const valueIndex= event.target.value
     setCurr(valueIndex)
     if(valueIndex===0){
       codeRef.current.value=`/******************************************************************************

       Online C++ Compiler.
Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
cout<<"Hello World";

return 0;
}`

     }
     else if(valueIndex===1){
       codeRef.current.value=`'''

       Online Python Compiler.
Code, Compile, Run and Debug python program online.
Write your code in this editor and press "Run" button to execute it.

'''

print("Hello World")
`
     }
     else if(valueIndex===2){
       codeRef.current.value=`/******************************************************************************

       Welcome to Online IDE.
       Code, Compile, Run and Debug online from anywhere in world.
       
       *******************************************************************************/
       using System;
       class HelloWorld {
         static void Main() {
           Console.WriteLine("Hello World");
         }
       }`

     }
     else if(valueIndex===3){
       codeRef.current.value=`/******************************************************************************

       Welcome to Online IDE.
       Code, Compile, Run and Debug online from anywhere in world.
       
       *******************************************************************************/
public class Main
  {
    public static void main(String[] args) {
      System.out.println("Hello World");
     }
  }
      
       `
     }
  else if(valueIndex===4){
    codeRef.current.value=`/******************************************************************************

    Online Javascript Interpreter.
Code, Compile, Run and Debug javascript program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

print('Hello World');

   `
  }
  else if(valueIndex===5){
    codeRef.current.value=`/******************************************************************************

    Online NodeJS Interpreter.
Code, Compile, Run and Debug javascript program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
console.log("Hello World");`
  }
  else if(valueIndex===6){
    codeRef.current.value=`<?php
    /******************************************************************************
    
                                Online PHP Interpreter.
                    Code, Compile, Run and Debug php program online.
    Write your code in this editor and press "Run" button to execute it.
    
    *******************************************************************************/
    
echo "Hello World";
    `
  }
  else{
    codeRef.current.value=`=begin

    Online Ruby Interpreter.
    Code, Compile, Run and Debug Ruby script online.
    Write your code in this editor and press "Run" button to execute it.

=end

puts "Hello World"
`
  }
  }
 useEffect(()=>{
  codeRef.current.value=`/******************************************************************************

  Online C++ Compiler.
Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
cout<<"Hello World";

return 0;
}`
 },[])

  return (
    <ThemeProvider   theme={theme} > 
       <nav className={darkMode? "dark-mode":"light-mode"}>
       
           <h1 className="h" style={{color:darkMode?"#66FCF1":"#51E2F5"}}>ONLINE IDE:</h1>
        
      <div className="toggle-containerr">
    
          <span style={{ color: darkMode ? "#52606D" : "white" }}>☀︎</span>
          <span className="togglee">
            <input
              checked={darkMode}
              onChange={() => {setDarkMode(prevMode => !prevMode) }}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "white" : "#282a36" }}>☾</span>
        </div>
        </nav>
     <Paper  className= "app__paper" style={{height:"100%", backgroundColor:darkMode? "#212121" : "gainsboro",backgroundImage:darkMode?`url(${back})`:`url(${backl})`,transitionDelay:"0.5s", backgroundSize:darkMode?"":"cover" }}>
    <div className="App" >
    <div className="App__left">
      <div className="App__header">
      <h1 className="g" style={{color:darkMode?"#FFA8B6":"white", backgroundColor:darkMode?"black":"black"}}>SELECT LANGUAGE: </h1>
    <FormControl className="App__dropdown">
      <Select
      className="App__select"
      variant="outlined"
      value={curr}
      style={{backgroundColor:darkMode? "": "", color:darkMode? "#FFA8B6":"white"}}
      onChange={onLangChange}
      >
        <MenuItem style={{}} value={0}>{lang[0].name}</MenuItem>
        <MenuItem style={{}} value={1}> {lang[1].name}</MenuItem>
        <MenuItem style={{}} value={2}> {lang[2].name}</MenuItem>
        <MenuItem style={{}} value={3}> {lang[3].name}</MenuItem>
        <MenuItem style={{}} value={4}> {lang[4].name}</MenuItem>
        <MenuItem style={{}} value={5}> {lang[5].name}</MenuItem>
        <MenuItem style={{}} value={6}> {lang[6].name}</MenuItem>
        <MenuItem style={{}} value={7}> {lang[7].name}</MenuItem>
        

      </Select>
  </FormControl>
      </div>
      <h3 style={{color:darkMode?"#C5C6C7":""}}>Code Editor: </h3>
  <textarea type="text" ref={codeRef} className="App__code" style={{color:darkMode ? "":"#9DF9EF",backgroundColor:darkMode?"#d8d8d8":"#282a36",border:""}}></textarea>
  
  <div className="App__buttons">
    <Button variant={darkMode?"contained":"contained"} size="large" color={darkMode?"primary":"primary"} startIcon={<WhereToVoteTwoToneIcon style={{color:darkMode?"black":""}}/>}  style={{"margin-right": "10px",backgroundColor:darkMode?"#66FCF1":""}} onClick={handleSubmit}><span style={{fontFamily:`${arial}`,color:darkMode?"black":"#EDF7F6"}}>Run</span></Button>
    <Button variant="contained" disableFocusRipple="false" size="large" startIcon={<BugReportTwoToneIcon style={{color:darkMode?"black":""}} />} color="secondary" style={{"margin-right": "10px",backgroundColor:darkMode?"#FFA8B6":""}} onClick={handleSubmit2}><span style={{fontFamily:`${arial}`,color:darkMode?"black":"#EDF7F6"}}>Compile</span></Button>
    <Button variant="contained" size="large" startIcon={<DeleteForeverTwoToneIcon style={{color:darkMode?"black":""}}/>} style={{backgroundColor:darkMode?"#66FCF1":""}} color="primary" onClick={toClear}><span style={{fontFamily:`${arial}`,color:darkMode?"black":"#EDF7F6"}}>Clear</span></Button>
    </div>
    </div>
    <div className="App__right">
      <h3 className="App__smallH" style={{color:darkMode?"#C5C6C7":""}}>Input(Stdin): </h3>
    <textarea type="text" ref={stdinRef} className="App__input" style={{color:darkMode ? "":"#9DF9EF",backgroundColor:darkMode?"#d8d8d8":"#282a36",border:" "}} />
    <h3 className="App__smallH" style={{color:darkMode?"#C5C6C7":""}}>Output(Stdout): </h3>
    <textarea disabled value={output.value} className="App__output" style={{color:darkMode ? "":"#9DF9EF",backgroundColor:darkMode?"#d8d8d8":"#282a36",border:""}} ></textarea>
    </div>
   
  </div>
  </Paper>
  </ThemeProvider>
   
  );
}

export default App;
