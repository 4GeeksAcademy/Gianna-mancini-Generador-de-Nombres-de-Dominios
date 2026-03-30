const p = ['the', 'our'];
const a = ['great', 'big'];
const n = ['jogger', 'racoon'];

function generateDomainName(pronoun, adj, noun) {
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                console.log(pronoun[i] + adj[j] + noun[k] + '.com');
            }
        }
    }
} 
generateDomainName(p, a, n);

function generateDomainName2(pronoun, adj, noun) {
    pronoun.forEach(pElement => {
        adj.forEach(aElement => {
            noun.forEach(nElement => {
                console.log(`${pElement}${aElement}${nElement}.com`);
            });
        });
    });
}

generateDomainName2(p, a, n);