function exercicio01(){
    let perfumes = [];

    perfumes.push("Perfume1");
    perfumes.push("Perfume2");
    perfumes.push("Perfume3");
    perfumes.push("Perfume4");

    perfumes[3] = "OutroPerfume";

    perfumes.push("MaisUmPerfume");

    perfumes.splice(0, 1);

    alert(perfumes);

}