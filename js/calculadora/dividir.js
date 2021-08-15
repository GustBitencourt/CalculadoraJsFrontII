export default (numero1, numero2) => {
    if (numero2 != 0) {
        return numero1 / numero2;
    }else {
    return 'Não se pode dividir por zero';
    }
}