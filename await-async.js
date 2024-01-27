const logAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('-'), 100)
    })
}

const doSomething = async () => {
    const resolveValue = await logAsync();
    console.log(resolveValue);
}

doSomething();
console.log('Legen')
console.log('dary!')
