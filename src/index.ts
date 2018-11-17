interface IHomer {
    name(shout: boolean): String;
}


class Homer implements IHomer {
    name(shout: boolean){
        if (shout) {
            return 'Homer Simpson!!!!';
        }
        return 'Homer Simpson ok';
    }
}

const instance = new Homer();
console.log(instance.name(false));