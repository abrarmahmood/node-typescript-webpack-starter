import 'source-map-support/register';
import * as fs from 'fs';

interface IHomer {
    name(shout: boolean): String;
}


class Homer implements IHomer {
    name(shout: boolean){
        fs.readFileSync('i-do-not-exist')
        if (shout) {
            return 'Homer Simpson!!!!';
        }
        return 'Homer Simpson ok';
    }
}

const instance = new Homer();
console.log(instance.name(false));