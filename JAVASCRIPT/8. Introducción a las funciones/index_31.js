function* generaid() {
    let id = 0;
    while (true) {
        id++
        yield i //Esperando hasta que se vuelva a llamar
        if (id < 10) {
            return
        }
    }
}

const gen = generaid();
console.log(gen.next().value)
