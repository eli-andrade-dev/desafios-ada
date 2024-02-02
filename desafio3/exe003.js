function verificarCompatibilidade(navegador, sistemaOperacional) {

    return (navegador === "chrome" || navegador === "firefox") &&
        (sistemaOperacional === "windows" || sistemaOperacional === "mac");
}


console.log(verificarCompatibilidade("chrome", "windows")); 
console.log(verificarCompatibilidade("chrome", "mac"));
console.log(verificarCompatibilidade("firefox", "windows")); 
console.log(verificarCompatibilidade("firefox", "mac")); 
console.log(verificarCompatibilidade("firefox", "sony")); 
console.log(verificarCompatibilidade("safari", "mac"));
