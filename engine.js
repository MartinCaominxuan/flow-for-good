(function(root){
const N=0,E=1,S=2,W=3, dr=[-1,0,1,0],dc=[0,1,0,-1];
const specs=[
 {name:'Every drop begins somewhere',note:'Turn the pipes. Make your first connection.',limit:12,path:[0,1,2,7,12,13,14,19,24],turns:[1,2,1,3,1,2,3]},
 {name:'Let nature do its work',note:'Cloudy water needs a little green.',limit:16,path:[0,1,6,11,12,13,18,23,24],poll:[6],green:[18],turns:[2,1,3,1,2,1,1]},
 {name:'A river finds its way',note:'Follow the bends. There is time to breathe.',seconds:120,path:[0,1,2,3,8,13,12,17,22,23,24],poll:[8],green:[17],turns:[1,2,1,1,3,2,1,2,1]},
 {name:'Clean water, twice over',note:'Each polluted stretch needs a natural filter.',seconds:105,path:[0,1,6,5,10,15,16,11,12,13,18,19,24],poll:[6,12],green:[10,18],turns:[1,1,2,1,3,1,1,1,2,1,3]},
 {name:'The last mile',note:'A thoughtful route. A brighter tomorrow.',limit:24,seconds:120,path:[0,1,2,7,6,11,16,17,12,13,14,19,24],poll:[7,12],green:[16,19],turns:[1,1,2,1,3,1,1,2,1,1,2]}
];
function dir(a,b){if(b-a===1)return E;if(b-a===-1)return W;if(b-a===5)return S;return N;}
function createLevel(index){const s=specs[index]; const tiles=Array.from({length:25},(_,i)=>({type:i%4===0?'greenDecor':'terrain',ports:[],rotation:0}));s.path.forEach((p,i)=>{const ports=i===0?[dir(p,s.path[1])]:i===s.path.length-1?[dir(p,s.path[i-1])]:[dir(p,s.path[i-1]),dir(p,s.path[i+1])];const type=i===0?'source':i===s.path.length-1?'goal':s.poll?.includes(p)?'pollution':s.green?.includes(p)?'greenery':'pipe';const rotation=type==='pipe'?(s.turns[i-1]||1):0;tiles[p]={type,ports:ports.map(d=>(d+rotation)%4),rotation,solution:ports};});return {spec:s,tiles};}
function rotate(tile){if(tile.type==='pipe'){tile.ports=tile.ports.map(d=>(d+1)%4);tile.rotation=(tile.rotation+1)%4;return true;}return false;}
function trace(tiles){let pos=0,entry=null,water='clean';const steps=[],seen=new Set();for(let n=0;n<26;n++){const tile=tiles[pos];if(seen.has(pos))return {steps,reason:'loop'};seen.add(pos);if(tile.type==='pollution')water='polluted';if(tile.type==='greenery')water='clean';steps.push({pos,water});if(tile.type==='goal')return {steps,success:water==='clean',reason:water==='clean'?'success':'polluted'};const exit=tile.ports.find(d=>d!==entry);if(exit===undefined)return {steps,reason:'broken'};const r=Math.floor(pos/5)+dr[exit],c=pos%5+dc[exit];if(r<0||r>4||c<0||c>4)return {steps,reason:'edge'};const next=r*5+c;if(!tiles[next].ports.includes((exit+2)%4))return {steps,reason:'broken'};entry=(exit+2)%4;pos=next;}return {steps,reason:'loop'};}
const api={specs,createLevel,rotate,trace};if(typeof module!=='undefined')module.exports=api;else root.FlowEngine=api;
})(typeof window!=='undefined'?window:globalThis);
