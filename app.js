var pronoun = ['the', 'our'];
var adj = ['great', 'big', 'tiny', 'amazing'];
var noun = ['lion', 'bear', 'dog', 'cat'];

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            console.log(pronoun[i] + adj[j] + noun[k] + '.com');
        }
    }
}