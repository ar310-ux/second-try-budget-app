(function(root){
'use strict';
const cents=v=>Math.round(Number(v)*100)/100;
const nonnegative=v=>Number.isFinite(Number(v))?Math.max(0,Number(v)):0;
function monthlyIncome(p){const pay=nonnegative(p.pay);return cents(pay*(p.frequency==='hourly'?nonnegative(p.hours)*52/12:p.frequency==='weekly'?52/12:1)+nonnegative(p.extra));}
function budget(p){const income=monthlyIncome(p),essentials=cents(Object.values(p.essentials||{}).reduce((s,v)=>s+nonnegative(v),0)),remainder=cents(income-essentials),target=cents(income*nonnegative(p.rate)/100),savings=cents(Math.min(Math.max(0,remainder),target)),flexible=cents(Math.max(0,remainder-savings));return{income,essentials,savings,flexible,target,deficit:cents(Math.max(0,-remainder)),weekly:cents(flexible*12/52)};}
function totals(transactions,month){const result={income:0,expense:0,saving:0};for(const t of transactions){if((!month||t.date.startsWith(month))&&Object.hasOwn(result,t.type))result[t.type]+=nonnegative(t.amount);}for(const k in result)result[k]=cents(result[k]);result.available=cents(result.income-result.expense-result.saving);return result;}
function goalProgress(goal,transactions,monthlySaving){const saved=cents(nonnegative(goal.start)+totals(transactions).saving),remaining=Math.max(0,cents(nonnegative(goal.amount)-saved));return{saved,remaining,percent:goal.amount>0?Math.min(100,saved/goal.amount*100):0,months:remaining===0?0:monthlySaving>0?Math.ceil(remaining/monthlySaving):null};}
root.Pockets={cents,monthlyIncome,budget,totals,goalProgress};if(typeof module!=='undefined')module.exports=root.Pockets;
})(typeof window!=='undefined'?window:globalThis);
