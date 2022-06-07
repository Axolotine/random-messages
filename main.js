//Takes: an array of any type
//Returns: a random value from that array
function randFromArray(inputArray){
    const l = inputArray.length;
    if (l === 1) return inputArray[1];

    //Error checking, not necessary
    // if (l === -1) {
    //     console.log('ERROR: ARRAY IS EMPTY');
    //     return 'ERROR';
    // }

    const randIndex = Math.floor(Math.random() * l);

    return inputArray[randIndex];
}

//Returns: a random message made of random strings
function getRandomMsg(){
    // #region Word definitions
    const msgNouns = [
        'shrimp',
        'dog',
        'cat',
        'soup',
        'water tower',
        'girl',
        'guy',
        'boy',
        'essence',
        'vibe',
        'treasure',
        'magician',
        'orc',
        'moon',
        'earth',
        'planet',
        'sun',
        'star',
        'pal',
        'friend',
        'bug',
        'shoe',
        'shirt',
        'service',
        'elf',
        'scientist',
        'coffee'
    ];
    const msgAdjectives = [
        'rare',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'legendary',
        'exceptional',
        'unique',
        'shabby',
        'creepy',
        'wet',
        'sick',
        'cool',
        'hot',
        'big',
        'small',
        'black',
        'grey',
        'white',
        'capable',
        'gluten free',
        'strange',
        'low carb',
        'credible',
        'shway',
        'girly',
        'manly',
        'taken',
        'stinky',
        'special',
        'mundane'
    ];
    const msgVerbs = [
        'eat',
        'buy',
        'create',
        'jump',
        'run',
        'attack',
        'roll',
        'shoot',
        'pick',
        'cook',
        'bury',
        'vaporize',
        'smoke',
        'drink',
        'love',
        'alienate',
        'groove',
        'dance',
        'explode'
    ];
    // #endregion
    const aNoun = () => { return randFromArray(msgNouns) };
    const anAdj = () => { return randFromArray(msgAdjectives) };
    const aVerb = () => { return randFromArray(msgVerbs) };

    const msgStructures = [
        `I ${anAdj()} ${aVerb()} the ${aNoun()}.`,
        `The ${anAdj()} ${aNoun()} ${aVerb()}ed.`,
        `Going to the ${anAdj()} store to ${aVerb()} some ${aNoun()}.`,
        `Is this ${aNoun()} ${anAdj()}? I'd like to ${aVerb()} it.`,
        `This one goes out to all the ${anAdj()} ${aNoun()}s out there... keep on ${aVerb()}ing!`,
        `Yeah... ${aNoun()}... ${aNoun()}... ${aNoun()}... they're all the same...`,
        `Before you can ${aVerb()}, the ${aNoun()} ${aVerb()}s!`,
        `Would the ${aNoun()} like a ${anAdj()} ${aNoun()} ${aNoun()}?`
    ];
    const finalMsg = randFromArray(msgStructures);

    return finalMsg;
}

//---
console.log(getRandomMsg());