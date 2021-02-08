// Zodiac sings: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
const zodiacSigns = { 
    Capricorn: [1],
     Aquarius:[0120],  
    Pisces:[0220],
    Aries:[0321], 
    Taurus:[0420], 
    Gemini:[0521], 
    Cancer:[0621], 
    Leo:[0723], 
    Virgo:[0823],
    Libra:[0923],
    Scorpio:[1023],
    Saggitarius:[1123],
    Capricorn: [1222]
};      
const zodiac = (stringDate) =>{
    dayDate="";                                                             // create a actual number from the date given
    dayDate += stringDate.substring(3,5) + stringDate.substring(0,2)       // reversing the german date to put month infront
    parseInt(dayDate);                                                     
    for (i=0;i<Object.values(zodiacSigns).length;i++){      // loop through the zodiacSign Objects properties/values
        if (Object.values(zodiacSigns)[i]<dayDate)          
    { yourSign = Object.keys(zodiacSigns)[i]};              // create new let yourSign and overwrite it everytime the if returns true
    }
    return yourSign
};
console.log(zodiac("31-12-2002"));
console.log(zodiac("06-11-1994"));