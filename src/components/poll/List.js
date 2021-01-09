import React, { useReducer } from 'react'

// const initialPollList = 0;
// export const reducer = (state, action) => {
//     switch(action){
//         case "increment":
//             return state + 1
//         case "decrement":
//             return state - 1
//         case "reset":
//             return initialPollList
//         default:
//             return state
//     }
// }

    const initialPollList = {
        id: 1,
        question: "what framework do you use?",
        answer: {
            option_one: {
                answer: "python",
                votes: 0,
            },
            option_two: {
                answer: "javascript",
                votes: 0,
            },
            option_three: {
                answer: "swift",
                votes: 0,
            }
        },
        id: 2,
        question: "who will be the new US president in 2021?",
        answer: {
            option_one: {
                answer: "Obama",
                answer_count: 0,
            },
            option_two: {
                answer: "Biden",
                answer_count: 0,
            },
            option_three: {
                answer: "Trump",
                answer_count: 0,
            }
        },
    };

    const reducer = (state=initialPollList, action) => {
        switch(action){
            case "new question":
                return { ...state,
                    id = action.id,
                    question = actiion.question,
                    answer = {
                        option_one = {
                            answer = action.answer.option_one.answer,
                            votes = action.answer.option_one.vote,
                        },
                        option_two = {
                            answer = action.answer.option_two.answer,
                            votes = action.answer.option_two.vote,
                        },
                        option_three = {
                            answer = action.answer.option_three.answer,
                            votes = action.answer.option_three.vote,
                        }
                    }
                }
            case "increment vote one":
                
            case "reset":
                return initialPollList
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialPollList);


    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}

export default List;
