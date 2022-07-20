/*
ANTRA UŽDUOTIS
Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai
Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

*/

var salys = [
    {salis: "Ispanija", valplotas: 505990, gyvsk: 47450795},
    {salis: "Prancuzija", valplotas:551695, gyvsk: 67413000},
    {salis: "Austrija", valplotas:83879, gyvsk: 8935112},
    {salis: "Lietuva", valplotas:65300, gyvsk: 2795680},
    {salis: "Belgija", valplotas:30689, gyvsk: 11492641},
];
for (var x of salys){
    console.log("========")
    console.log(`Šalis: ${x.salis}, joje gyvena: ${x.gyvsk} mln. gyventojų`)
    console.log(`Valstybės plotas: ${x.valplotas} km², plotas tenkantis vienam gyventojui: ${(x.valplotas * 1000000) / x.gyvsk.toFixed(2)} m²`)
}



