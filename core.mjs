export const defaults={topic:'신기한 기술·물건의 작동 원리',channelName:'원리 한 스푼',textModel:'gemini-3.8-flash',videoModel:'veo-3.1-fast-generate-preview',voice:'Kore',videoRate:'',otherEstimate:'',trend:false};
export function estimate(s,n=4){if(!Number(s.videoRate)||Number(s.videoRate)<0)return null;return Math.round((Number(s.videoRate)*8*n+Math.max(0,Number(s.otherEstimate)||0))*100)/100;}
export function validateDraft(d){if(!d.title||!Array.isArray(d.scenes)||d.scenes.length!==4)throw Error('대본 형식 오류: 장면은 4개여야 합니다.');for(const s of d.scenes)if(typeof s.narration!=='string'||!s.narration.trim()||typeof s.prompt!=='string'||!s.prompt.trim())throw Error('장면 지시문 또는 내레이션이 비어 있습니다.');return d;}
export function assEscape(s){return String(s).replace(/[{}\\]/g,'').replace(/\r?\n/g,'\\N');}
export function wav(pcm){let h=Buffer.alloc(44);h.write('RIFF');h.writeUInt32LE(pcm.length+36,4);h.write('WAVEfmt ',8);h.writeUInt32LE(16,16);h.writeUInt16LE(1,20);h.writeUInt16LE(1,22);h.writeUInt32LE(24000,24);h.writeUInt32LE(48000,28);h.writeUInt16LE(2,32);h.writeUInt16LE(16,34);h.write('data',36);h.writeUInt32LE(pcm.length,40);return Buffer.concat([h,pcm]);}
export const demoIdeas=[
{title:'인덕션은 왜 냄비만 뜨거워질까?',reason:'눈에 보이지 않는 자기장을 장면으로 설명하기 좋아요.',score:96},
{title:'엘리베이터 문은 사람을 어떻게 알아볼까?',reason:'일상 속 센서의 원리를 쉽게 보여줄 수 있어요.',score:93},
{title:'노이즈 캔슬링은 소음을 어떻게 지울까?',reason:'반대 파형을 시각적으로 비교할 수 있어요.',score:91},
{title:'지퍼는 어떻게 한 번에 맞물릴까?',reason:'작은 부품의 움직임을 확대해 보여줄 수 있어요.',score:89},
{title:'무선 충전은 어떻게 선 없이 전기를 보낼까?',reason:'코일 사이 에너지 전달을 애니메이션으로 표현해요.',score:88}];
export function demoDraft(idea){return {title:idea.title,description:'일상 속 기술을 쉽게 알아보는 32초. #Shorts #작동원리 #과학',tags:['Shorts','과학','작동원리'],scenes:[
{label:'호기심',narration:'매일 사용하는 물건 안에는 어떤 비밀이 숨어 있을까요? 눈에 보이지 않는 작동 원리를 들여다봅니다.',prompt:'Vertical cinematic macro shot of an everyday device, dark studio, lime green light, slow dolly in, no text.'},
{label:'구조',narration:'겉모습은 단순해도 내부에는 여러 부품이 들어 있습니다. 각각의 부품이 서로 다른 역할을 맡고 있죠.',prompt:'Vertical clean exploded-view 3D illustration of the device, components separating smoothly, dark teal background, no text.'},
{label:'원리',narration:'핵심은 에너지를 전달하거나 움직임을 바꾸는 구조입니다. 작은 변화가 우리가 보는 결과를 만들어 냅니다.',prompt:'Vertical abstract scientific visualization, glowing energy flow between components, clear educational 3D render, no text.'},
{label:'마무리',narration:'익숙한 물건도 원리를 알고 나면 새롭게 보입니다. 다음에는 또 어떤 일상 속 기술을 알아볼까요?',prompt:'Vertical cinematic device hero shot, assembled parts, soft reflections, subtle orbit camera, no text.'}]};}
