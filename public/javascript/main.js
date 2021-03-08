//bonus recap
/* 
let age = prompt ( "saisir votre age" );

if (age < 18){
    alert ( "vous etes un mineur" );
}else if (age < 40){
    alert ( "vous etes adulte" );
}
else {
    alert ( "vous etes senior" );
} */
/* 
let vehicule = prompt (" quel vehicule voulez vous ? vw, bmw, skoda ").toLowerCase()
let km = prompt (" Combien de kilometre voulez vous faire ? ")

const prix ={
    vw : 0.5,
    bmw: 0.6,
    skoda: 0.3
} 

// exo2

// let phrase = " bonjour tout le monde "
// console.log (phrase)

// console.log (phrase.length)

// phrase = phrase.trim()
// console.log (phrase)

// console.log (phrase.length)

// console.log (phrase.charAt(phrase.length-1))

// phrase = phrase .replace("bonjour", "")
// console.log(phrase)

// phrase = "hibou" + phrase
// console.log (phrase)



// let nombre = Math.floor(Math.random()*9)
// console.log

//---------------------------------------------

// exo1

// let prenom = prompt (" quel est ton prenom ? ") //01 
// alert ("bonjour "+ prenom)

// let age = prompt("quel est ton age ? ")  //02
// alert (" tu as " + age + " ans ")

// let nom = prompt (" quel est ton nom ? ") 


//--------------------------------------------------

//exo0

// let x = 20, y = 10, z = -5;


// x = x - 10;
// y = y * 2;
// z = z + 5;

// alert ("x : " + x +
//         "\ny : " + y +
//         "\nz : " + z);

// let mult = x * y;
// let divi = y / z;
// let mod = 10 % 2;

// alert("Variable mult : " + mult +
//         "\nVariable divi : " + divi +
//         "\nVariable mod : " + mod);

//-----------------------------------------------

//exo math

// let nombre = 8.56   //01 let nombre = 8.56

// console.log (Math.round(nombre))    //02 Arrondir au nombre à l'entier le plus proche

// console.log (Math.ceil(nombre))      //03 Arrondir à l'entier vers le haut

// console.log (Math.floor(nombre))     //04 Arrondir à l'entier vers le bas

// console.log (Math.trunc(nombre))  //05 Enlever toute la partie décimale

// console.log (Math.random())     //06 Afficher un nombre aléatoire entre 0-1

// console.log (Math.random()*100)     //07 Afficher un nombre aléatoire entre 0-100

// console.log (Math.floor(Math.random()*100))      //08 Afficher un nombre entier aléatoire entre 0-100

// console.log (Math.pow(8, 2))      //09 Afficher 8 puissance 2

// console.log (Math.sqrt(9))      //10 Afficher racine carré de 9

// console.log (Math.cbrt(9))       //11

// console.log (Math.abs(-1))    //12 Afficher la valeur absolue de -1

// console.log (Math.max(-2, 1000, 8, 57))   //13 Afficher la valeur la plus grande parmi -2, 1000, 8, 57

// console.log (Math.min(-2, 1000, 8, 57))   //14 Afficher la valeur la plus petite parmi -2, 1000, 8, 57

//------------------------------------------------

//exo giraud 08

// let intro = ("fais le bon choix")
// let manga = prompt ("tough, saint-seiya, death note")
// let anime = prompt ("bobobo, initial-d, city hunter")
// let unlimited_powa = prompt ("berserk, dragon ball, gto")
// let saiyajin = prompt ("devil-devil, one piece, high school")
// let mordor = prompt ("coq de combat, chonchu, devil's man")

// let choix = (" tu as choisis : ")



// console.log (manga. length)

// console.log (manga.toUpperCase())

// console.log (anime.toLowerCase())

// console.log (unlimited_powa.indexOf("g")) //question?comment prendre le deuxieme G?

// console.log (saiyajin.slice(6, 11))

// console.log (mordor.toString())


// alert ( intro +
//         manga +
//         anime +
//         unlimited_powa +
//         saiyajin +
//         mordor )

/* -------------------------------------------------------------------------------- */

/* let x = 7, y = 14

let vrai = x < y
let faux = 14 <= 7

let egalval = 4 == "4"
let egalvaltype = 4 === "4"

let difval = 4 != "4"
let difvaltype = 4 !== "4" */

/* ----------------------------------------------------------------------------------- */
// Les ternaires
/* let heure = 17, bon = ""

bon = (heure <= 18) ? "Bonjour" : "Bonsoir"
alert (bon) */

//--------------------------------------------------------------------------------
// Exo1 recap
let tableau = [1721, 979, 366, 299, 675, 1456]


for(let i = 0; i<tableau.length; i++){
    for(let e = 0; e<tableau.length; e++){
        if (tableau[e] + tableau[i] === 2020) {
            console.log(tableau[e], tableau[i])
            console.log(tableau[e] * tableau[i])
        }
        
    }
}

// Exo2 recap
let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];



for(let i = 0; i<tab.length; i++){
    for(let e = 0; e<tab.length; e++){
        if (tab[e] + tab[i] === 2020) {
            console.log(tab[e], tab[i])
            console.log(tab[e] * tab[i])
        }
        
    }
}
//-------------------------------------------------------------
let tableau1 = [1757,1890,1440,1750,1822,1957,2005,1979,1405,2003,1997,1741,1494,1780,1774,1813,447,1429,1990,1767,1969,1787,1944,1863,1778,2004,1991,
    1754,
    1748,
    1756,
    1977,
    611,
    1934,
    1818,
    1924,
    528,
    1753,
    1867,
    1865,
    1799,
    1743,
    1955,
    1993,
    1972,
    1987,
    1960,
    1817,
    1837,
    1900,
    1839,
    1946,
    1786,
    1857,
    1840,
    1985,
    1850,
    1801,
    1926,
    1523,
    1886,
    1492,
    1737,
    1909,
    1766,
    1986,
    1773,
    1749,
    1781,
    1760,
    1849,
    1833,
    1854,
    1814,
    1820,
    2000,
    1834,
    1851,
    1779,
    1825,
    1885,
    1882,
    1912,
    962,
    1988,
    302,
    1965,
    1751,
    1764,
    1844,
    1949,
    1984,
    1933,
    958,
    1746,
    1999,
    1914,
    1989,
    1879,
    1954,
    1827,
    1816,
    1918,
    633,
    1797,
    1811,
    1936,
    1961,
    1937,
    1829,
    1788,
    1772,
    1505,
    1905,
    1304,
    1404,
    1868,
    1978,
    1872,
    2006,
    1256,
    1883,
    1966,
    1931,
    1796,
    1793,
    714,
    1904,
    1841,
    1824,
    1962,
    1739,
    1897,
    1906,
    1735,
    1876,
    873,
    1959,
    1963,
    1917,
    1804,
    1789,
    1782,
    1848,
    1828,
    1826,
    1929,
    1525,
    1862,
    1952,
    1878,
    1775,
    1776,
    1430,
    1943,
    1938,
    1941,
    1594,
    1928,
    1856,
    1903,
    1871,
    1836,
    1847,
    1956,
    1915,
    1870,
    1875,
    1892,
    276,
    1896,
    1945,
    1821,
    1947,
    1898,
    1802,
    1853,
    1895,
    1790,
    1819,
    1980,
    1832,
    1673,
    1964,
    1800,
    1971,
    1842,
    2002,
    1921,
    1940,
    1845,
    1527,
    1428,
    1932,
    1893,
    1908,
    1889,
    1974,
    1981,
    1791,
    1975]