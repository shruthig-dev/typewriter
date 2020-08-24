  
const sentence = "hello there from lighthouse labs\n";
let timeInterval = 50;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, timeInterval += 50);
}
  
