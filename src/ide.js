'use strict';
const rp = require('request-promise');
const debug = require('debug')('HE');

class helpers {
    constructor() {

    }
    getQueryData({language,time_limit,memory_limit,source,input,lang},clientSecret,mode) {
        const obj ={
            client_secret:clientSecret,
            async:mode,
            source:source,
            lang:lang,
            input:input,
            time_limit:time_limit||1,
            memory_limit:memory_limit||262144
        };
        return obj;
    }
   
    getRequestPostJSON(data,url) {
        return {
            method: 'POST',
            uri: 'https://cors-anywhere.herokuapp.com/'+ url,
            form: data,
            gzip: true,
            headers:{
                'Content-Type': 'multipart/form-data',
                'X-Requested-With':'XMLHttpRequest',
                'Access-Control-Allow-Origin':'http://localhost:3000',
                'Access-Control-Allow-Methods':'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers':'Accept, Content-Type, Origin'
              },
        };
    }

    doOperation(rpData,callback) {
        return new Promise((resolve, reject) => {
             rp(rpData)
                    .then((body) => {
                        return body;
                    })
                    .then((res) => {
                        if(callback) {
                            callback(null,res);
                        }
                        resolve(res);
                    })
                    .catch((err) => {
                        if(callback) {
                            callback(err,null);
                        }
                        reject(err);
                    });
        });
    }

}

export default class HackerEarth extends helpers {
    constructor(clientSecret, mode) {
        super();  
        this._runURL = 'https://api.hackerearth.com/v3/code/run/';
        this._compileURL = 'https://api.hackerearth.com/v3/code/compile/';
        this._clientSecret = clientSecret;
        this._mode = mode || 0;
        debug('Bootstraping HackerEarth module with clientSecret as %s and mode as %s', clientSecret,mode);
    }

    get runURL() {
        return this._runURL;
    }

    get compileURL() {
        return this._compileURL;    
    }

    get clientSecret() {
        return this._clientSecret;
    }

    get mode() {
        return this._mode;
    }
    compile(config, callback) {
        let data = super.getQueryData(config,this.clientSecret,this.mode);
        debug('In HackerEarth:Compile Data sent to API is %s',JSON.stringify(data));
        let rpData = super.getRequestPostJSON(data,this.compileURL);
        return super.doOperation(rpData,callback);    
    }

    run(config, callback) {
        let data = super.getQueryData(config,this.clientSecret,this.mode);
        debug('In HackerEarth:Run Data sent to API is %s',JSON.stringify(data));
        let rpData=super.getRequestPostJSON(data,this.runURL);
        return super.doOperation(rpData,callback);
    }
}

