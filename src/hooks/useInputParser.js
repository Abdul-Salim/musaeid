import useReminderFunctions from "./useReminderFunctions";

const useInputParser = () => {
    const {SetReminder} = useReminderFunctions()

    const inputIdentifier = (input) => {
        const smallInput = input.toLowerCase();
        console.log("hi");
    
        if(smallInput.startsWith('set a reminder')) {
            console.log('hellllll')
            SetReminder(smallInput);
        }
        if (smallInput.startsWith("read today's schedule")) {
            console.log('small', smallInput)
        }

    }

    return {inputIdentifier};

    // switch(smallInput) {
    //     case smallInput.includes('set a reminder'):
    //         console.log('the input', smallInput);
    //         setReminder(smallInput);
    //         break;
    //     case 'add reminder':
    //         console.log('hello', smallInput)
    //         break;
    //     default: console.log('not')
    // }
};

export default useInputParser;