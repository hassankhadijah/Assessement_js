
        const QuizContainer = document.getElementById('Quiz_Structure');
        const submitButton = document.getElementById('submit_button');
        const resultsContainer = document.getElementById('score');
        //Questions

        const Questions = [
            {
                Question: "Among the following are names of female except",
                option: ['anas', 'khadijah', 'fatimah', 'Aaisha'],
                answer: 'anas'
            },


            {
                Question: 'which of the following is correct',
                option: ['comme', 'wnte', 'went', 'og'],
                answer: 'went'
            },

            {
                Question: 'pick the best answer',
                option: ['books', 'pen', 'ruler', 'food'],
                answer: 'food'
            },

            {
                Question: 'which of the following is not  country',
                option: ['Birmingham', 'United Kingdom', 'Hong Kong', 'Saudi Arabia'],
                answer: 'Birmingham'
            }
        ];

        //function to create the quiz
        function buildQuestion() {
            let output = '';
            Questions.forEach((Q, I) => {
                output += `<div class="Quiz_container_me">${I + 1}. ${Q.Question}</div>`;
                Q.option.forEach(opt => {
                    output += `<label>
            <input type="checkbox" name="Q${I}" value="${opt}">
            ${opt}
            </label>`;
                });
                QuizContainer.innerHTML = output;
            });
        }

        
        // function to show the results
        function displayResults() {
            let candidateScore = 0;
            const answerContainers = QuizContainer.querySelectorAll('div.Quiz_container_me');
            Questions.forEach((Q, I) => {
                const selectedOption = document.querySelector(`input[name="Q${I}"]:checked`);
                if (selectedOption.value === Q.answer) {
                    answerContainers[I].classList.add('correct');
                    candidateScore++;
                } else {
                    answerContainers[I].classList.add('wrong');
                }
            });

            resultsContainer.innerHTML = `You got ${candidateScore} out of ${Questions.length} questions correct.`;
            resultsContainer.style.display = 'block';
        }



        submitButton.addEventListener('click', displayResults);
        buildQuestion()
