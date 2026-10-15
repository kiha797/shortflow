import {test} from 'node:test';import assert from 'node:assert/strict';import {estimate,validateDraft,wav,assEscape} from '../core.mjs';
test('비용 미설정 차단 및 장면수에 따른 계산',()=>{assert.equal(estimate({videoRate:''}),null);assert.equal(estimate({videoRate:200,otherEstimate:50}),6450);assert.equal(estimate({videoRate:200,otherEstimate:50},1),1650);});
test('빈 장면 및 4장면 초과는 유료 생성 전에 차단',()=>{assert.throws(()=>validateDraft({title:'x',scenes:[]}));assert.throws(()=>validateDraft({title:'x',scenes:Array(4).fill({narration:'x',prompt:''})}));});
test('음성 WAV 헤더는 PCM 24kHz mono와 일치',()=>{const b=wav(Buffer.alloc(48000));assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.readUInt32LE(24),24000);assert.equal(b.readUInt32LE(40),48000);});
test('대본의 ASS 제어문 제거',()=>assert.equal(assEscape('{\\pos(1,1)}텍스트'),'pos(1,1)텍스트'));
