const openCard = document.getElementById("carta");
const songCarta = document.getElementById("starcart");



function showCard(){
    songCarta.play();
    const carta = `
    <p class="text">Olá meu amor, hoje completamos nosso primeiro ano juntos como namorados, primeiro queria te agradecer por tudo nesse um ano que passou, você deu um sentido na minha vida, e me fez ver as coisas de outra maneira com toda certeza. Você é a pessoa mais especial da minha vida meu amor, e saber que posso contar contigo pra qualquer coisa me conforta todos os dias da minha vida. Você é a pessoa mais linda, dedicada, estudiosa e íncrivel que eu conheço e eu prometo que vamos fazer tudo o que você sempre quis daqui alguns anos meu amor, você não merece nada menos do que isso. Obrigado por abrir mão de tantas coisas por minha causa, por não desistir de nós, te amarei até meu último dia de vida e pra toda eternidade. Me lembro exatamente do dia que eu te pedi em namoro, era num final de tarde e a gente estava assistindo The Walking Dead, eu peguei as caixas do lado da cama pra te pedir em namoro, o melhor dia da minha vida. Quem diria que a menina que eu via na escola seria minha namorada alguns anos depois né?
    E hoje estamos aqui, completando um ano juntos, o primeiro ano tão especial para nós. Não sei dizer o que eu seria sem você nos meus dias, esse site não representa tudo que você merece ganhar como presente no nosso aniversário de um ano na verdade, não representa nem 5% do que eu queria fazer pra você. Porém, com tudo que aconteceu eu estou fazendo meu melhor pra ver você feliz nesse dia tão especial, por mais simples que seja eu fiz com todo amor e carinho do mundo. Você merece o mundo meu amor, e algum dia vamos casar e vamos conquistar tudo que falamos em ter hoje em dia e viver a melhor vida um junto do outro pra sempre. Eu te amo incansavelmente, amo seu cabelo, seu rosto, pele, seu corpo, seu jeito. Eu amo tudo em você, eu amo você. A mulher mais linda desse mundo, que sempre me apoiou em tudo e me incentiva a continuar estudando e nunca desistir de fazer o que eu gosto, você esteve aqui nos momentos ruins e nos bons também, você é amada por todos aqui em casa e sempre vai ser. Eu tenho orgulho de você meu amor, nunca vai existir alguém igual. E quero que saiba que eu estou aqui sempre, e não quero que você desista nunca amor, que quando a faculdade, o trabalho ou a vida não estiver fácil, nós passaremos juntos por tudo isso, estarei do seu lado sempre. No momento que eu estou escrevendo isso não vejo a hora de chegar nosso dia, passamos por muitas coisas e chegar nessa data é sempre especial, pois significa que aprendemos com os erros uns dos outros e amadurecemos, e hoje vivemos tranquilos e daqui alguns anos estaremos juntos todos os dias e fazendo tudo o que queremos, inclusive várias sapecagens hihihi (sua gostosa), esse teu jeito de ser só você consegue amor, suas brincadeiras a forma que você me faz rir, que você me deixa com vergonha também né e o seu drama também, que não posso dizer "não" que ja me pergunta: "não me ama mais é isso??"; adoro quando você faz isso. Você é a pessoa da minha vida, depois de perder minha avó se não fosse por você para estar ali me ouvindo e me ajudando eu jamais conseguiria lidar tão bem com essa perda, você ajudou não só eu, mas a minha mãe também e tenho certeza que ela se sentiu acolhida e feliz por te ver la também, eu escolhi colocar nossas fotos com algumas músicas por que acho que isso nos traz lembranças dos melhores momentos dentro desse 1 ano, as fotos da viagem, das maquiagens, dos dias felizes , dos momentos especiais. Obrigado por ser a mulher que eu terei pra sempre, a mulher da minha vida hoje eu simplesmente não consigo imaginar minha vida sem você, não vejo a hora de casar com você e ter nossa vida, e poder olhar pra você e te chamar de minha esposa, e chorar junto com você quando esse dia chegar. Espero que você goste das fotos que eu separei amorzinho, fiz isso para nós mesmos atualizarmos nossas fotos no nosso site, colocando outras músicas e tudo mais, então conforme você tiver alguma ideia eu vou sempre atualizar ele com muito carinho. Vai ser nossa galeria, mas do nosso jeito mesmo. Vamos aproveitar todos os momentos desse dia especial, e registrar tudo aqui depois. Obrigado por ficar do meu lado durante esse um ano de namoro, e me desculpa pelas vezes que por conta do meu estresse acabei sendo diferente com você meu amor, obrigado por ter me perseguido por 3 anos e nunca desistido de tentar, graças a isso hoje eu posso afirmar que sou a pessoa mais feliz do mundo. E todos nós te amamos pra sempre, eu e toda minha familía, e tenho certeza que minha avó não poderia estar me vendo do céu mais orgulhosa pela pessoa que eu escolhi para estar comigo pro resto da vida.  
    </p>`;

    

   
    
    document.getElementById("localdacarta").innerHTML += carta;
   
}





openCard.addEventListener("click", showCard);


