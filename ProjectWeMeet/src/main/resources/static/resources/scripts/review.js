const reviewForm = document.getElementById('reviewForm');
const deleteButtons = reviewForm.querySelectorAll('[rel="delete"]');

const abuse = ['ㅅㅂ','ㅆㅂ','시발','씨발','10새','10새기','10새리','10세리','10쉐이','10쉑','10스','10쌔',
    '10쌔기','10쎄','10알','10창','10탱','18것','18넘','18년','18노','18놈',
    '18뇬','18럼','18롬','18새','18새끼','18색','18세끼','18세리','18섹','18쉑','18스','18아',
    'c파','c팔','fuck', 'ㄱㅐ','ㄲㅏ','ㄲㅑ','ㄲㅣ','ㅅㅂㄹㅁ','ㅅㅐ','ㅆㅂㄹㅁ','ㅆㅍ','ㅆㅣ','ㅆ앙','ㅍㅏ','凸',
    '갈보','갈보년','강아지','같은년','같은뇬','개같은','개구라','개년','개놈',
    '개뇬','개대중','개독','개돼중','개랄','개보지','개뻥','개뿔','개새','개새기','개새끼',
    '개새키','개색기','개색끼','개색키','개색히','개섀끼','개세','개세끼','개세이','개소리','개쑈',
    '개쇳기','개수작','개쉐','개쉐리','개쉐이','개쉑','개쉽','개스끼','개시키','개십새기',
    '개십새끼','개쐑','개씹','개아들','개자슥','개자지','개접','개좆','개좌식','개허접','걔새',
    '걔수작','걔시끼','걔시키','걔썌','걸레','게색기','게색끼','광뇬','구녕','구라','구멍',
    '그년','그새끼','냄비','놈현','뇬','눈깔','뉘미럴','니귀미','니기미','니미','니미랄','니미럴',
    '니미씹','니아배','니아베','니아비','니어매','니어메','니어미','닝기리','닝기미','대가리',
    '뎡신','도라이','돈놈','돌아이','돌은놈','되질래','뒈져','뒈져라','뒈진','뒈진다','뒈질',
    '뒤질래','등신','디져라','디진다','디질래','딩시','따식','때놈','또라이','똘아이','똘아이',
    '뙈놈','뙤놈','뙨넘','뙨놈','뚜쟁','띠바','띠발','띠불','띠팔','메친넘','메친놈','미췬',
    '미췬','미친','미친넘','미친년','미친놈','미친새끼','미친스까이','미틴','미틴넘','미틴년',
    '미틴놈','바랄년','병자','뱅마','뱅신','벼엉신','병쉰','병신','부랄','부럴','불알','불할','붕가',
    '붙어먹','뷰웅','븅','븅신','빌어먹','빙시','빙신','빠가','빠구리','빠굴','빠큐','뻐큐',
    '뻑큐','뽁큐','상넘이','상놈을','상놈의','상놈이','새갸','새꺄','새끼','새새끼','새키',
    '색끼','생쑈','세갸','세꺄','세끼','섹스','쇼하네','쉐','쉐기','쉐끼','쉐리','쉐에기',
    '쉐키','쉑','쉣','쉨','쉬발','쉬밸','쉬벌','쉬뻘','쉬펄','쉽알','스패킹','스팽','시궁창','시끼',
    '시댕','시뎅','시랄','시발','시벌','시부랄','시부럴','시부리','시불','시브랄','시팍',
    '시팔','시펄','신발끈','심발끈','심탱','십8','십라','십새','십새끼','십세','십쉐','십쉐이','십스키',
    '십쌔','십창','십탱','싶알','싸가지','싹아지','쌉년','쌍넘','쌍년','쌍놈','쌍뇬','쌔끼',
    '쌕','쌩쑈','쌴년','썅','썅년','썅놈','썡쇼','써벌','썩을년','썩을놈','쎄꺄','쎄엑',
    '쒸벌','쒸뻘','쒸팔','쒸펄','쓰바','쓰박','쓰발','쓰벌','쓰팔','씁새','씁얼','씌파','씨8',
    '씨끼','씨댕','씨뎅','씨바','씨바랄','씨박','씨발','씨방','씨방새','씨방세','씨밸','씨뱅',
    '씨벌','씨벨','씨봉','씨봉알','씨부랄','씨부럴','씨부렁','씨부리','씨불','씨붕','씨브랄',
    '씨빠','씨빨','씨뽀랄','씨앙','씨파','씨팍','씨팔','씨펄','씸년','씸뇬','씸새끼','씹같','씹년',
    '씹뇬','씹보지','씹새','씹새기','씹새끼','씹새리','씹세','씹쉐','씹스키','씹쌔','씹이','씹자지',
    '씹질','씹창','씹탱','씹퇭','씹팔','씹할','씹헐','아가리','아갈','아갈이','아갈통',
    '아구창','아구통','아굴','얌마','양넘','양년','양놈','엄창','엠병','여물통','염병','엿같','옘병',
    '옘빙','오입','왜년','왜놈','욤병','육갑','은년','을년','이년','이새끼','이새키','이스끼',
    '이스키','임마','자슥','잡것','잡넘','잡년','잡놈','저년','저새끼','접년','젖밥','조까',
    '조까치','조낸','조또','조랭','조빠','조쟁이','조지냐','조진다','조찐','조질래','존나','존나게','존니','존만',
    '존만한','좀물','좁년','좁밥','좃까','좃또','좃만','좃밥','좃이','좃찐','좆같','좆까','좆나',
    '좆또','좆만','좆밥','좆이','좆찐','좇같','좇이','좌식','주글','주글래','주데이','주뎅',
    '주뎅이','주둥아리','주둥이','주접','주접떨','죽고잡','죽을래','죽통','쥐랄','쥐롤',
    '쥬디','지랄','지럴','지롤','지미랄','짜식','짜아식','쪼다','쫍빱','찌랄','창녀','캐년',
    '캐놈','캐스끼','캐스키','캐시키','탱구','팔럼','퍽큐','호로','호로놈','호로새끼',
    '호로색','호로쉑','호로스까이','호로스키','후라들','후래자식','후레']; //욕설 전역 배열


deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', e => {
        e.preventDefault();

        const index = deleteButton.dataset.index;
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `review/delete/?index=${index}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const responseText = xhr.responseText; // 'true' | 'false'
                    if (responseText === 'true') {
                        location.href += '';
                    } else {
                        alert('알 수 없는 이유로 삭제하지 못하였습니다.\n\n이미 삭제된 메모일 수도 있습니다.');
                    }
                } else {
                    alert('서버와 통신하지 못하였습니다.\n\n잠시 후 다시 시도해 주세요.');
                }
            }
        };
        xhr.send();
    });
});



function postReview(content, toFocus, refreshCommentAfter) {

    refreshCommentAfter ??= true;

    const articleIndex = reviewForm['articleIndex'].value;
    const reviewStar = reviewForm['reviewStar'].value;
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('articleIndex', articleIndex);
    formData.append('content', content);
    formData.append('reviewStar', reviewStar);
    xhr.open('POST', `review/index`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const responseObject = JSON.parse(xhr.responseText);
                switch (responseObject.result) {
                    case 'success':
                        if (toFocus) {
                            toFocus.value = '';
                            toFocus.focus();
                        }
                        if (refreshCommentAfter === true) {
                            location.href += '';
                        }
                        break;
                    case 'failure_exception':
                        alert('사용자님은 권한이 없습니다.');
                        break;
                    case 'failure':
                        alert('회사에 문의해주시기 바랍니다.');
                        break;
                    default:
                        alert('댓글을 작성하지 못하였습니다. 잠시 후 다시 시도해 주세요.');
                }
            }else {
                alert('서버와 통신하지 못하였습니다. 잠시 후 다시 시도해 주세요.');

            }
        }
    };
    xhr.send(formData);
}



reviewForm.onsubmit = e => {
    e.preventDefault();
    if (reviewForm['content'].value === '') {
        alert('댓글을 입력해 주세요');
        reviewForm['content'].focus();
        return;
    }
    if (abuse.some(x => reviewForm['content'].value.indexOf(x) > -1)) {
        alert('내용에 욕설이 포함되있습니다 다시 입력해주세요');
        return;
    }
    postReview(reviewForm['content'].value);
};

const writerButton = reviewForm.querySelector('[name="write"]');

writerButton.addEventListener('click', e => {
    e.preventDefault();
    window.location.href ="/write";
})





