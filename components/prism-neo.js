Prism.languages.neo = {
    'comment': {
        pattern: /\/\/.+\s/,
        lookbehind: true,
        greedy: true
    }, 
    'string': {
        pattern: /".+?"|'.'/,
        lookbehind: true,
        greedy: true,
    },
    'number': {
        pattern: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/,
        lookbehind: true,
        greedy: true
    },
    'keyword': /\b(?:fn|u[0-9]+|s[0-9]+|f[0-9]+|T|comptime|extern|inline|opaque|packed|struct|const|defer|error|match|union|break|else|loop|next|type|yeet|and|any|not|pub|as|fn|if|or)\b/,
    'macro': {
        pattern: /\B(\#[a-zA-Z]+\b)/,
        lookbehind: true,
        greedy: true,
        alias: 'keyword',
    }
}
