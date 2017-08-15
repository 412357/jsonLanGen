import * as path from 'path';
import * as fs from 'fs'

fs.readFile(path.resolve(__dirname,'translations.main.json'),'utf8' ,function(err, data){
    if(err){
        return err;
    }

    handleData(data);
});

function handleData( data:string ){
    let langFiles = {} ;
    
    JSON.parse(data).forEach( element => {
        
        element.langs.forEach( (lan, i) => {
            if( !langFiles[lan] ){
                langFiles[lan] = {};
            }
            langFiles[lan][element.key]=element.trans[i];
        });

    });

    for (let key in langFiles) {

        if (langFiles.hasOwnProperty(key)) {
            let lang = langFiles[key];
            let dir = path.resolve( __dirname,'i18n' );
            if( !fs.existsSync(dir) ){
                fs.mkdirSync(dir);
            }
            fs.writeFile(path.join(dir,`${key}.json`),JSON.stringify( lang,null,2 ), console.error );
        }

    }
}
