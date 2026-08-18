// Core pure function to determine round winner using generics
function determineWinner<TChoice, TResult>(
    player: TChoice,
    computer: TChoice,
    winMap: Map<TChoice, TChoice>,
    resultMap: Map<'win' | 'lose' | 'draw', TResult>
): TResult {
    if (player === computer) {
        return resultMap.get('draw')!;
    }
    if (winMap.get(player) === computer) {
        return resultMap.get('win')!;
    }
    return resultMap.get('lose')!;
}

// Helper function to pick a random choice
function getRandomChoice<TChoice>(choices: TChoice[]): TChoice {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Controller function that manages game state and DOM updates
function createGame<TChoice, TResult>(
    choices: TChoice[],
    winMap: Map<TChoice, TChoice>,
    resultMap: Map<'win' | 'lose' | 'draw', TResult>,
    choiceToString: (choice: TChoice) => string,
    resultToString: (result: TResult) => string
): void {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreEl = document.getElementById('player-score') as HTMLSpanElement;
    const computerScoreEl = document.getElementById('computer-score') as HTMLSpanElement;
    const choicesTextEl = document.getElementById('choices-text') as HTMLParagraphElement;
    const resultTextEl = document.getElementById('result-text') as HTMLHeadingElement;
    const buttons = document.querySelectorAll<HTMLButtonElement>('.btn');

    function handlePlay(playerChoice: TChoice): void {
        const computerChoice = getRandomChoice(choices);
        const result = determineWinner(playerChoice, computerChoice, winMap, resultMap);

        choicesTextEl.textContent = `You chose ${choiceToString(playerChoice)} — Computer chose ${choiceToString(computerChoice)}`;

        const winValue = resultMap.get('win');
        const loseValue = resultMap.get('lose');

        if (result === winValue) {
            playerScore++;
            playerScoreEl.textContent = playerScore.toString();
            resultTextEl.textContent = ` ${resultToString(result)}`;
            resultTextEl.style.color = '#4ade80';
        } else if (result === loseValue) {
            computerScore++;
            computerScoreEl.textContent = computerScore.toString();
            resultTextEl.textContent = ` ${resultToString(result)}`;
            resultTextEl.style.color = '#f87171';
        } else {
            resultTextEl.textContent = ` ${resultToString(result)}`;
            resultTextEl.style.color = '#facc15';
        }
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const choice = choices[index];
            if (choice !== undefined) {
                handlePlay(choice);
            }
        });
    });
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    const choicesList: string[] = ['rock', 'paper', 'scissors'];

    const winRules = new Map<string, string>([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper'],
    ]);

    const outcomes = new Map<'win' | 'lose' | 'draw', number>([
        ['win', 1],
        ['lose', 2],
        ['draw', 3],
    ]);

    createGame<string, number>(
        choicesList,
        winRules,
        outcomes,
        (choice) => choice.toUpperCase(),
        (result) => {
            if (result === 1) return 'You Win!';
            if (result === 2) return 'You Lose!';
            return "It's a Draw!";
        }
    );
});
