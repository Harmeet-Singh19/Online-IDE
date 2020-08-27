var hackerEarth=require('hackerearth-node'); //require the Library
//Now set your application 
var hackerEarth=new hackerEarth(
                                '89d6d425a2229325e68ae2bbe0c12d49dcd76a63',  //Your Client Secret Key here this is mandatory
                                ''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
);

function onCompile(){
  var config={};
config.time_limit=1;  //your time limit in integer
config.memory_limit=323244;  //your memory limit in integer
config.source=`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello World";

    return 0;
}
`;  //your source code for which you want to use hackerEarth api
config.input="";  //input against which you have to test your source code
config.language="C++"; //optional choose any one of them or none
hackerEarth.compile(config)
                        .then(result => {
                          //Handle Result

                          let ans=JSON.parse(result)
                          console.log(ans.compile_status)
                        })
                        .catch(err => {
                          //Handle Error
                          console.log(err)
                        });
  }
 export const onRun=()=>{
    var config={};
config.time_limit=1;  //your time limit in integer
config.memory_limit=323244;  //your memory limit in integer
config.source=`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello World";

    return 0;
}
`;  //your source code for which you want to use hackerEarth api
config.input="";  //input against which you have to test your source code
config.language="C++"; //optional choose any one of them or none
 hackerEarth.run(config)
                    .then(result => {
                      //Handle Result
                      let ans=JSON.parse(result)
                          console.log(ans.run_status.output)
                    })
                    .catch(err => {
                      //Handle Error
                    });      
                  }

