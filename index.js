// escribe('index.js', function() {
//   describe('multiply', function() {
//     it("is an equation whose multiplied results will equal 62", function() {
//       expect(var1).to.be.a('number')
//       expect(var2).to.be.a('number')
//       expect(multiply).to.eq(62)
//     });
//   });
//   describe('random', function() {
//     it("is generates a random integer greater than 0", function() {
//       expect(random).to.be.a('number')
//       expect(random).to.not.eq(0)
//     });
//   });
//   describe('mod', function() {
//     it("is generates a remainder that is equal to 4", function() {
//       expect(mod).to.eq(4)
//     });
//   });
//   describe('max', function() {
//     it("will return 20 as the highest number in the set", function() {
//       expect(max).to.eq(20)
//     });
//   })/ Write your code here


const var1 = 2
const var2 = 31
const multiply = var1 * var2
const random = Math.floor(Math.random() * 10) + 1
const mod = 16 % 6
const max = Math.max(5, 3, 7, 20)