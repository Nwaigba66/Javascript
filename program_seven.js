module.exports = function average(...args) {
    return args.reduce((acc, value) => acc + value) / args.length;
  };
      