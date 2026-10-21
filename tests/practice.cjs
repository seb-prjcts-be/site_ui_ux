const assert=require('node:assert/strict');
const {crop,move,models}=require('../practice.js');
assert.deepEqual(crop(1,50),[0,0,600,400]);
assert.deepEqual(crop(2,0),[0,100,300,200]);
assert.deepEqual(crop(2,100),[300,100,300,200]);
for(const zoom of [1,1.1,2,3])for(const x of [0,30,50,100]){const [left,top,width,height]=crop(zoom,x);assert(left>=0&&top>=0&&left+width<=600.00001&&top+height<=400.00001);}
const original=[0,1,2];assert.deepEqual(move(original,0,1),[1,0,2]);assert.deepEqual(original,[0,1,2]);
assert.deepEqual(move(original,0,-1),original);assert.deepEqual(move(original,2,1),original);
assert.deepEqual(move(move(original,0,1),1,-1),original);
assert.equal(Object.keys(models).length,6);assert.equal(models.sound.enabled,false);
console.log('OK: uitsnedegrenzen, beeldverhoudingen, volgorde en stille geluidsstart.');
