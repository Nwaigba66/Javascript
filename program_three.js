 var inputs = process.argv.slice(2);
  var result = inputs.map(item => item[0])
                        .reduce((accumulator, next) => accumulator + next);
    console.log(`[${inputs}] becomes "${result}"`)
